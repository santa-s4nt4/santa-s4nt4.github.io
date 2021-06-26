<template>
  <div>
    <div class="work">
      <div class="title">
        <p>visual system for Algorave Tokyo</p>
      </div>
      <div class="video">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/jUwbr3d6jvk?color=white"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <img
        class="magnifiable"
        src="https://lh3.googleusercontent.com/-gttDXJJ2jGM/XkzkdidhSKI/AAAAAAAAqdM/ImQW8kFWhdUoF-OgM7P5xKttRMFoo5uuQCE0YBhgL/s1200/algorave1.gif"
        itemprop="image"
        width="80%"
      />
      <br />
      <img
        class="magnifiable"
        src="https://lh3.googleusercontent.com/-c-qLqCyOhzQ/XkzkizaSAoI/AAAAAAAAqdU/sj47hh6QwCweBwCXZkPz9ZpZO5w2EXlawCE0YBhgL/s1200/algorave2.gif"
        itemprop="image"
        width="80%"
      />
      <br />
      <img
        class="magnifiable"
        src="https://lh3.googleusercontent.com/-UOs49wHV3R4/Xkzkf48fBTI/AAAAAAAAqdQ/Jac7WLbAgvcj-oWVTQ_wdcXaRY4anxZ1wCE0YBhgL/s1200/algorave4.gif"
        itemprop="image"
        width="80%"
      />
      <br />
      <div class="discription">
        <p width="60%">
          <br />
          2020/02/15に落合soupで行われたAlgorave TokyoでのVJに使用したvisual
          system．
        </p>
      </div>
      <div class="caption">
        <p>Tool : TouchDesigner / GLSL</p>
        <p>
          Sound :
          <a href="https://twitter.com/renick" target="_blank">Renick Bell</a>
        </p>
        <p>
          Link :
          <a href="http://ochiaisoup.com/?p=3734" target="_blank"
            >Algorave Tokyo 2020/02/15</a
          >
        </p>
        <p>
          Source Code :
          <a href="https://github.com/santa-s4nt4/AlgoraveTokyo" target="_blank"
            >GitHub</a
          >
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
  font-family: "Noto Sans JP", sans-serif;
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