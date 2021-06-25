<template>
<div>
  <div class="work">
    <div class="title">
      <p>holarchy</p>
    </div>
    <img
    class="magnifiable"
    src="https://lh3.googleusercontent.com/q2D8hgWaeAhPw-oBmWJtCqmQQsvbA26Dkoi1QiF2j6GRKVbn3FsfIYBEyl7-hTTgSNr0m8owtQ2N8So9XhcywmZPyAkFzOGdqYlb2Snv-7DJY9uQrf05anm_rvhBjoA3zKmQqz3B4og=w2400"
    itemprop="image"
    width="80%"/>
    <br>
        <div class="discription">
          <p width=60%>
            <br />
          本作品はディープラーニングを用いた映像の自動選択により，新たなaudio-visualを作り出すオンラインインスタレーションである．
          <br /><br />
          これまでaudio-visual，DJ+VJなどの音と映像が共存する表現領域における映像表現は，すでに存在するクリップを組み合わせることによるサンプリング的手法，リアルタイムにコンピュータで計算されるジェネラティブな手法，目の前で起こる現象の音とその状況自体を見せること，など様々なアプローチが行われてきた．その視覚的な効果によって音楽の拡張や，新たな意味の付与などのがなされてきた．
          <br /><br />
          しかしどの手法においても，送出する映像やプログラムの選択自体はアーティストの恣意的な判断によって曲に対応させることが前提であった．
          <br /><br />
          本作品は曲の特徴量と作者が事前に選択した多数の映像の特徴量を同空間で比較し，自動的に選択することで新たなaudio-visual作品を作り出す，アーティストによる恣意性を廃したオンラインインスタレーションである．作品では鑑賞者が選択したyoutube動画の音が，数秒ごとに区切られ，その特徴量と，事前に準備された無数の映画や映像の短く区切られたクリップの特徴量を同空間で比較して最も近い映像を選び出し，音楽とともにそれにフィットした映像を次々表示する．
          この映像選択手法によって，アーティストがこれまで構築してきた音に対する映像のマッピング関係をディープラーニングによって再構築し，あり得るかもしれない対応関係の可能性を示唆する．また，これまで繋がり得なかった異なる映画・映像の繋がりのないシーンが一つの映像となり，総体として立ち現れる（部分であり全体であること，holarchy）ことで，鑑賞者はそれらの関連性から一つのストーリーを見出すことになる．
          本作品によって，audio-visualやDJ+VJ表現は一度アーティストの手癖や判断基準から開放され逸脱し，アーティストにも新たな視点を与えるだろう．
          </p>
        </div>
        <div class="caption">
          <p>
          Link : <a href="https://ai-visual.github.io/holarchy/" target="_blank">holarchy</a> / 
          <a href="https://cclab.sfc.keio.ac.jp/projects/x-visual-holarchy/">Project page</a>
          </p>
          <p>
            Exhibition : <a
            href="https://sa2020.siggraph.org/en/attend/art-gallery/session_slot/191/2"
            >SIGGRAPH ASIA 2020 ART GALLERY(2020.12.4-13)</a
          >
          </p>
          <p>
          Credit :
            <br />
            Keio SFC Nao Tokui Lab (Computational Creativity Lab) x-visual team
            <br />Scott Allen - Direction <br />Yusuke Yamada - Deep
            learning <br />Reo Anzai - UI design <br />Santa - Front-end
            <br />Aina Ono - Tech support
          </p>
        </div>
  </div>
</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap");

template {
  font-family: "JetBrains Mono";
  font-size: 10px;
}

.work {
  width: 60%;
  padding-bottom: 3rem;
}

.work p {
  font-family: "JetBrains Mono";
  font-weight: 500;
  display: block;
  font-size: 1rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
}

.work a {
  text-decoration: none;
  color: #9e9e9e;
}

.work a:hover {
  color: #ffffff;
}

.work mark {
  background-color: #ffffff;
  font-family: "JetBrains Mono";
  font-weight: 500;
  font-size: 0.8rem;
}

.title p {
  font-family: "JetBrains Mono";
  font-weight: 500;
  display: block;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
}

.discription {
  padding-bottom: 1.6rem;
}

.discription p {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
}

.caption p {
  padding-bottom: 0.5rem;
}

.video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

</style>