<template>
  <div>
    <div class="about">
      <!-- <img
        class="magnifiable"
        src="https://lh3.googleusercontent.com/XEvzlRTAP0WqxGujbXkrUQqfP4EWAcL2zIZoUZzblXVUHlJSJ5LI55GgPiaK39czR1iPucFej-xJvAIXsBqa1qEfCR53rGMUZQPaaG4gZJdsn4YgXxXg1UiclFz7i--BOag7BEdzDXQ=w2400"
        itemprop="image"
        width="200px"
      /> -->
      <img
        class="magnifiable"
        src="~/assets/img/profile.png"
        itemprop="image"
        width="200px"
      />
    </div>
    <div class="about">
      <p>Skill</p>
      <p>
        [Visual Tool] TouchDesigner / GLSL / Processing / p5.js
        <br />[Sound Tool] Cycling 74 Max / Ableton Live <br />[Programming
        Language] Python <br />[Frontend] Nuxt.js / HTML / SCSS
      </p>
    </div>
    <div class="about">
      <p>Exhibition / Event</p>
      <details>
        <summary>[2021]</summary>
        <p>
          [2021.01]
          <a
            href="https://computervisionart.com/pieces2021/identity-disperser/"
            target="_blank"
            >computer vision art gallery for 2021 / identity disperser
            -afforestation-</a
          >
          - Technical support
        </p>
      </details>
      <details>
        <summary>[2020]</summary>
        <p>
          [2020.12]
          <a
            href="https://sa2020.siggraph.org/en/attend/art-gallery/session_slot/191/2"
            target="_blank"
            >SIGGRAPH ASIA 2020 ART GALLERY</a
          >
          /
          <a
            href="https://cclab.sfc.keio.ac.jp/projects/x-visual-holarchy/"
            target="_blank"
            >holarchy</a
          >
          - Front-end
          <br />
          [2020.09]
          <a
            href="https://twitter.com/rhizomatiks/status/1308730110661414912?s=20"
            target="_blank"
            >Playing Tokyo Vol.11</a
          >
          - Visual <br />
          [2020.06]
          <a
            href="https://twitter.com/metro_kyoto/status/1273953213180375040?s=20"
            target="_blank"
            >Save The Metro Compilations curated by Ken’ichi Itoi</a
          >
          - Visual <br />[2020.04]
          <a
            href="https://twitter.com/CCLab_SFC/status/1251122493642817538?s=20"
            target="_blank"
            >x-Music Online Vol.00</a
          >
          - Visual <br />[2020.04]
          <a
            href="https://twitter.com/rhizomatiks/status/1245636361731768321?s=20"
            target="_blank"
            >Staying Tokyo Vol.00</a
          >
          - Visual <br />[2020.02]
          <a href="http://ochiaisoup.com/?p=3734" target="_blank"
            >Algorave Tokyo</a
          >
          - Visual
        </p>
      </details>
      <details>
        <summary>[2019]</summary>
        <p>
          [2019.10] SFC Creative Week&nbsp;- Visual <br />[2019.07]
          <a href="https://sukitoku.hatenablog.com/entry/190617" target="_blank"
            >X-Music DJ Night</a
          >
          - Visual <br />[2019.06]
          <a href="https://kagurane.com/schedules/view/1156" target="_blank"
            >SourceCord Vol.3</a
          >
          - Visual <br />[2018.11]
          <a
            href="http://club-stomp.com/2018/11/09/algorave-osaka/"
            target="_blank"
            >Algorave Osaka</a
          >
          - Visual
        </p>
      </details>
    </div>
    <div class="about">
      <p>Awards</p>
      <p>
        [2020.12]&nbsp;<a
          href="https://kc-i.jp/activity/award/isca/2020/nominate/#link3"
          target="_blank"
          >ISCA Wonderland 2020&nbsp;/&nbsp;Sonic-Aquarium</a
        >&nbsp;-&nbsp;3rd Prize
      </p>
    </div>
    <div class="about">
      <p>Education</p>
      <p>
        [2020.04 - Current]
        <a href="https://xml.sfc.keio.ac.jp/" target="_blank">x-Music Lab</a>,
        at
        <a href="https://www.keio.ac.jp/" target="_blank">Keio University</a>
        <a href="https://www.sfc.keio.ac.jp" target="_blank">SFC</a>
        <br />[2019.04 - Current]
        <a href="https://cclab.sfc.keio.ac.jp" target="_blank"
          >Computational Creativity Lab</a
        >, at
        <a href="https://www.keio.ac.jp/" target="_blank">Keio University</a>
        <a href="https://www.sfc.keio.ac.jp" target="_blank">SFC</a>
      </p>
    </div>
    <div class="about">
      <p>Work Experiences</p>
      <p>
        [2020.12 - Current]
        <a href="https://synflux.io/" target="_blank">Synflux</a>
        internship
        <br />
        [2021.02]
        <a href="https://www.career.dentsu.jp/intern/w2021/" target="_blank"
          >Dentsu, School of Technology & Idea</a
        >
        internship
        <br />
        [2020.10 - Current]
        <a href="https://dentsucraft.tokyo/" target="_blank"
          >Dentsu Craft Tokyo</a
        >
        internship
        <br />
        [2019.06 - 2019.10]
        <a href="https://nepps.jp" target="_blank">Nepps</a> Mentor
        <br />[2019.01 - 2019.03]
        <a href="https://www.1-10.com" target="_blank">1→10, Inc.</a>
        internship
        <br />[2018.03]
        <a
          href="https://tech.mercari.com/entry/2017/12/20/170000"
          target="_blank"
        >
          Mercari BOLD Scholarship for SXSW 2018
        </a>
      </p>
    </div>
  </div>
</template>

<style>
template {
  font-family: "JetBrains Mono";
  font-size: 10px;
  color: #ffffff;
}

.about {
  font-family: "JetBrains Mono";
  font-weight: 500;
  display: block;
  font-size: 1rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  line-height: 1.5;
  padding-bottom: 2rem;
}

.about a {
  text-decoration: none;
  color: #9e9e9e;
}

.about a:visited {
  text-decoration: none;
  color: #9e9e9e;
}

.about a:hover {
  color: #ffffff;
}

.about details:focus {
  outline: none;
}
</style>