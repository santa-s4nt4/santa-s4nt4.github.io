const PROXY_BASE = 'https://my-scrapbox-proxy.santanaruse.workers.dev';
const PROJECT_NAME = 's4nt4-cc';

let allPages = [];

// 除外するタイトルのリスト
const EXCLUDED_TITLES = ['art work', 'client work', 'よもやま話', 'technique', 'sonic aquarium', 'electric catfish', '実験/習作'];

const LOG_TAGS = ['all', 'よもやま話', 'technique', '実験/習作'];


// --- フィルタボタンを動的に生成する関数 ---
function setupLogFilters() {
  const nav = document.querySelector('.filter-nav'); // HTML側のボタンを入れる容器
  if (!nav) return;

  nav.innerHTML = ''; // 一旦空にする

  LOG_TAGS.forEach(tag => {
    const btn = document.createElement('button');
    btn.textContent = tag;
    btn.className = 'filter-btn';
    if (tag === 'all') btn.classList.add('active'); // 初期状態は all をアクティブに

    btn.onclick = () => displayLog(tag); // クリックイベントを設定
    nav.appendChild(btn);
  });
}

/**
 * Scrapbox記法をHTMLに変換する
 */
function scrapboxToHtml(text) {
  const lines = text.split('\n');
  const title = lines.shift();
  let html = `<h1>${title}</h1>`;

  lines.forEach(line => {
    if (!line.trim()) { html += '<br>'; return; }

    // 1. 強調見出し [* ]
    line = line.replace(/^\[\* (.+?)\]/g, '<h2>$1</h2>');

    // 2. 画像
    line = line.replace(/\[(https?:\/\/scrapbox\.io\/files\/[^\]]+)\]/g, (match, url) => {
      const proxiedUrl = url.replace('https://scrapbox.io', PROXY_BASE);
      return `<img src="${proxiedUrl}" alt="image">`;
    });
    line = line.replace(/\[(https?:\/\/[^\]]+\.(?:png|jpg|jpeg|gif|svg|webp))\]/g, '<img src="$1">');

    // 3. YouTube
    line = line.replace(/\[https?:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)\]/g,
      '<div class="video-container"><iframe src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe></div>');

    // 4. 内部リンク & 外部リンク & アイコン (ここを修正)
    line = line.replace(/\[([^\]]+)\]/g, (match, content) => {
      // 外部リンクの判定（httpが含まれているか）
      const urlMatch = content.match(/(https?:\/\/[^\s]+)/);

      if (urlMatch) {
        const url = urlMatch[1];
        // URL以外の部分をラベルとして抽出
        const label = content.replace(url, '').trim();
        // ラベルがあればそれを使い、なければURLをそのまま表示
        return `<a href="${url}" target="_blank" class="external-link">${label || url}</a>`;
      }

      // アイコン判定
      if (content.endsWith('.icon')) {
        const iconName = content.replace('.icon', '');
        return `<img src="${PROXY_BASE}/api/pages/${PROJECT_NAME}/${encodeURIComponent(iconName)}/icon" class="scrapbox-icon">`;
      }

      // それ以外（[Sight / Insight] など）は内部リンクとして viewer.html へ
      return `<a href="viewer.html?page=${encodeURIComponent(content)}" class="scrapbox-tag">${content}</a>`;
    });

    // インデント処理
    const indentMatch = line.match(/^(\s+)(.*)/);
    if (indentMatch) {
      const level = indentMatch[1].length;
      html += `<div class="indent" style="margin-left:${level * 20}px">${indentMatch[2]}</div>`;
    } else if (!line.startsWith('<h2')) {
      html += `<p>${line}</p>`;
    } else {
      html += line;
    }
  });
  return html;
}

/**
 * データの取得
 */
// --- fetchScrapboxData に関連記事用の分岐を追加 ---
async function fetchScrapboxData(pageType, currentPageTitle = null, foundTags = []) {
  try {
    const response = await fetch(`${PROXY_BASE}/api/pages/${PROJECT_NAME}?limit=100`);
    const data = await response.json();
    allPages = data.pages;

    if (pageType === 'works') {
      displayWorks('all');
    } else if (pageType === 'log') {
      setupLogFilters(); // ★ ボタンを作ってから
      displayLog('all');  // ★ 描画する
    } else if (pageType === 'related') {
      displayRelatedLinks(currentPageTitle, foundTags);
    } else {
      displayTrash();
    }
  } catch (err) {
    console.error(err);
  }
}

// --- displayRelatedLinks ---
function displayRelatedLinks(currentTitle, tagsToSearch) {
  const container = document.getElementById('related-grid');
  const section = document.querySelector('.related-section');
  if (!container || !section) return;

  // 1. 関連ページを抽出
  const relatedPages = allPages.filter(page => {
    // 自分自身のページは除外
    if (page.title === currentTitle) return false;

    // 除外タイトル（インデックス用ページなど）も除外
    if (EXCLUDED_TITLES.includes(page.title.toLowerCase())) return false;

    const desc = page.descriptions.join(' ').toLowerCase();

    // ★ 強化：タグの検索ロジック
    return tagsToSearch.some(tag => {
      // カッコを除去し、小文字にする
      const t = tag.toLowerCase().replace(/[\[\]]/g, '');

      // 「実験/習作」のようにスラッシュがある場合、分割して「実験」単体でもヒットするようにする
      const keywords = t.includes('/') ? [t, ...t.split('/')] : [t];

      return keywords.some(k => {
        const cleanK = k.trim();
        if (!cleanK) return false;
        // [実験] のような形式、または本文中の単語として含まれているかチェック
        return desc.includes(`[${cleanK}]`) || desc.includes(cleanK);
      });
    });
  });

  console.log("Found related pages:", relatedPages);

  if (relatedPages.length > 0) {
    section.style.display = 'block';

    // 2. 表示スタイルの判定
    const isWorkRelated = tagsToSearch.some(tag => {
      const t = tag.toLowerCase();
      return t.includes('work') || t.includes('art') || t.includes('client');
    });

    if (isWorkRelated) {
      container.classList.remove('log-list');
      renderGrid(relatedPages, container);
    } else {
      container.classList.add('log-list');
      renderLogList(relatedPages, container);
    }
  } else {
    section.style.display = 'none';
  }
}

// --- Log専用のフィルタリング関数 ---
function displayLog(filterTag) {
  const container = document.getElementById('log-grid');
  if (!container) return;

  // ボタンのアクティブ状態の切り替え
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === filterTag) btn.classList.add('active');
  });

  const filtered = allPages.filter(page => {
    // 除外タイトルのチェック
    if (EXCLUDED_TITLES.includes(page.title.toLowerCase())) return false;

    const desc = page.descriptions.join(' ').toLowerCase();

    // ★ 改善：LOG_TAGS に含まれるいずれかのタグを持っているか判定
    // (all 以外のタグが desc に含まれているか)
    const hasLogTag = LOG_TAGS.some(t => t !== 'all' && desc.includes(`[${t}]`)) || desc.includes('[よもやま話]');
    if (!hasLogTag) return false;

    if (filterTag === 'all') return true;

    // 特定のタグでの絞り込み
    let searchTag = filterTag.toLowerCase();
    if (searchTag === '雑記') {
      return desc.includes('[雑記]') || desc.includes('[よもやま話]');
    }
    return desc.includes(`[${searchTag}]`);
  });

  renderLogList(filtered, container);
}

// --- Log専用の描画関数 (サムネイルなし・日付あり) ---
function renderLogList(pages, container) {
  container.innerHTML = '';
  if (pages.length === 0) {
    container.innerHTML = '<p class="loading">No logs found.</p>';
    return;
  }

  pages.forEach(page => {
    const row = document.createElement('div');
    row.className = 'log-row';

    // 日付のフォーマット (YY/MM/DD)
    const date = new Date(page.updated * 1000);
    const yy = String(date.getFullYear()).slice(-2);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const dateStr = `${yy}/${mm}/${dd}`;

    // --- ★ 改善：タグの判定ロジックを動的に変更 ---
    const desc = page.descriptions.join(' ');

    // LOG_TAGS（'all'以外）の中で、記事の本文に含まれているものを探す
    let tagLabel = 'よもやま話'; // デフォルト値

    // LOG_TAGS リストをループして、最初に見つかったタグを表示名にする
    for (const t of LOG_TAGS) {
      if (t !== 'all' && desc.includes(`[${t}]`)) {
        tagLabel = t;
        break; // 1つ見つかったら終了（複数ある場合は最初のものが優先）
      }
    }

    // もし [よもやま話] という直書きタグがあれば優先する（以前の仕様との互換性）
    if (desc.includes('[よもやま話]')) {
      tagLabel = 'よもやま話';
    }

    row.innerHTML = `
      <a href="viewer.html?page=${encodeURIComponent(page.title)}" class="log-link">
        <div class="log-title-area">
          <span class="log-date">${dateStr}</span>
          <h3 class="log-title">${page.title}</h3>
        </div>
        <div class="log-type-tag">${tagLabel}</div>
      </a>
    `;
    container.appendChild(row);
  });
}

function displayWorks(filterTag) {
  const container = document.getElementById('works-grid');
  if (!container) return;

  // ボタンのactive切り替え処理 (省略)

  const filtered = allPages.filter(page => {
    // ★ 修正：除外リストに含まれているかチェック
    if (EXCLUDED_TITLES.includes(page.title.toLowerCase())) {
      return false;
    }

    const desc = page.descriptions.join(' ');
    if (filterTag === 'all') return desc.includes('[art work]') || desc.includes('[client work]');
    return desc.includes(`[${filterTag}]`);
  });

  renderGrid(filtered, container);
}

function renderGrid(pages, container) {
  container.innerHTML = '';
  const previewImg = document.getElementById('hover-preview-image');
  const previewContainer = document.getElementById('hover-preview-container');

  pages.forEach(page => {
    const row = document.createElement('div');
    row.className = 'work-row';

    // 作品種別の判定
    const desc = page.descriptions.join(' ');
    const isArt = desc.includes('[art work]');
    const typeLabel = isArt ? 'art work' : 'client work';

    let imgUrl = page.image || '';
    if (imgUrl.startsWith('https://scrapbox.io')) {
      imgUrl = imgUrl.replace('https://scrapbox.io', PROXY_BASE);
    }

    row.innerHTML = `
      <a href="viewer.html?page=${encodeURIComponent(page.title)}" class="row-link">
        <div class="title-area">
          <h3>${page.title}</h3>
        </div>
        <div class="type-tag">${typeLabel}</div>
      </a>
    `;

    // --- エラー回避策：要素が存在する場合のみイベントを追加 ---
    if (previewImg && previewContainer) {
      row.addEventListener('mouseenter', () => {
        if (imgUrl) {
          previewImg.style.backgroundImage = `url('${imgUrl}')`;
          previewContainer.style.opacity = '1';
        }
      });
      row.addEventListener('mouseleave', () => {
        previewContainer.style.opacity = '0';
      });
    }
    container.appendChild(row);
  });
}

async function fetchAboutContent() {
  const container = document.getElementById('about-content');
  try {
    const response = await fetch(`${PROXY_BASE}/api/pages/${PROJECT_NAME}/about/text`);
    const text = await response.text();
    const bodyText = text.split('\n').slice(1).join('\n');
    container.innerHTML = scrapboxToHtml(bodyText);
  } catch (err) {
    container.innerHTML = 'About content not found.';
  }
}