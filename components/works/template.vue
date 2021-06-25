<template>
<div>
  <div class="work">
    <div class="title">
      <p>Sonic-Aquarium</p>
    </div>
    <div class="video">
          <iframe
            width="80%"
            src="https://www.youtube.com/embed/7j8HI5-rkBw?color=white"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
        </div>
        <mark>archive movie</mark>
        <br />
        <br />
        <img
          class="magnifiable"
          src="https://lh3.googleusercontent.com/UJNk3djFAmUrpogJ1gpFIzeilvNJz-G-7cLE9qQDyAGhDUen7Aslu1c4q22mGy5UNylVnzH2fV7EqPbdVPDRS9C6COlWlcW-aPCI_I71CaIExmsuW6gdh5aTBZBMxjoikjFKtG0Hpi0=w2400"
          itemprop="image"
          width="80%"
        />
        <br>
        <mark>appreciation mode</mark>
        <br />
        <br />
        <img
          class="magnifiable"
          src="https://lh3.googleusercontent.com/GG7yd9jKqjdnbK6uT-1fNZQcmq-mbfCFP19kLpr5vZqaiZMIXEyXtBbnPvZFWT7LhvOIb-T2Eq66fBva3eWYnIyFv3DAXXTBioDrsaRJlFcwKpRTBsv1_YqxlJ94ykDwIXD7fyIjeq8=w2400"
          itemprop="image"
          width="80%"
        />
        <br>
        <mark>session mode</mark>
        <br />
        <br />
        <img
          class="magnifiable"
          src="https://lh3.googleusercontent.com/kyFz8ffq5xMb7hK-qSo4Ls9ujg6Sdbf53_y0Y1208-zgnMEZ8ziulgo2TZWMZKtx5NJnqiy2BedWP3G6WLZ5kLRXqA5A0TIC9I3AEZkg9p4hNtZlZ-8zesGCgiT5Fiuy2noo6xqCQi0=w2400"
          itemprop="image"
          width="80%"
        />
        <br>
        <mark>visualize of trajectory</mark>
        <div class="discription">
          <p width=60%>
          <br />
          家庭での水槽や水族館の水槽の中で鳴っている音は鑑賞者には届かない．また，水槽の中にいる生き物には鳴き声など人間の耳によく聴こえる音を発するものは少なく，水槽から直接鑑賞者に届く音情報は非常に少ない．そのため家庭や水族館の水槽では視覚に重きを置いた鑑賞体験に限定されている場合が多い．そこで，本作品は，水槽の中の金魚の動きから音を生成し，水槽の中と音が同期された，聴覚から水槽を鑑賞できる仕組みとなっている．また，金魚とその動きから生成された音の関わりを映像で可視化することで，聴覚･視覚で楽しめるような新しい鑑賞体験を提示する．
          <br />
          <br />
          加えて，金魚は音を認知することができ，音を聞き分けたり，音に敏感であるという特徴を活かし，特定の楽器を金魚に学習させた．それにより，鑑賞者が楽器を水槽の近くで演奏することで，その楽器の音に反応して金魚は普段の動きより激しい動きになったり，その音に誘導されるような動きをし，そこから音を生成し，人間と魚のセッションを行う．それにより鑑賞者と金魚の新たなインタラクションを図る．また，楽器の音に反応した金魚の動きはより優美に見え，これは視覚にも強い影響を与える．
        </p>
        </div>
        <div class="caption">
          <p>
          Tool : Max for Live (Max 8) / Ableton Live 10 / TouchDesigner / YOLOv3
          </p>
          <p>
            Award :
            <a
            href="https://kc-i.jp/activity/award/isca/2020/nominate/#link3"
            target="_blank"
            >ISCA Wonderland 2020 - 3rd Prize</a>
          </p>
          <p>
          Credit :
            <br />Ayaka Sakakibara - Planning / Sound Design
            <br />Santa - Visualization System / Detection System
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