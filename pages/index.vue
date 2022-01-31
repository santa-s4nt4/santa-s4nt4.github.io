<template>
  <div class="container">
    <link rel="stylesheet" href="~/assets/css/jetbrains-mono.css" />
    <div class="site_title">
      <router-link @click.native="none" to="/"
        ><p>s4nt4.cc<span class="blink">▁</span></p></router-link
      >
    </div>
    <div class="links">
      <a href="https://twitter.com/_s4nt4" target="_blank"> &#x1f4ac;</a>
      <a href="https://www.instagram.com/__s4nt4/" target="_blank">
        &#x1f4f7;</a
      >
      <a href="https://github.com/santa-s4nt4" target="_blank"> &#x1f528;</a>
      <a
        href="https://www.notion.so/s4nt4/ba157394681a4894986ea95a4ca2454d"
        target="_blank"
      >
        &#x1f4dd;</a
      >
    </div>
    <div class="person_discription">
      <p>
        <router-link @click.native="view_about" to="/">Santa</router-link>
        is a visual artist based in Tokyo, Japan.
      </p>
    </div>
    <div class="about_work">
      <p>
        Noticeable about_work:
        <br />
        <router-link @click.native="style_jockey_01" to="/"
          >Style Jockey @MUTEK.JP x WOMB</router-link
        >,
        <router-link @click.native="sonic_aquarium_resonance" to="/"
          >Sonic Aquarium -Resonance-</router-link
        >,
        <router-link @click.native="sonic_aquarium" to="/"
          >Sonic Aquarium</router-link
        >,
        <router-link @click.native="pt_11" to="/"
          >Playing Tokyo Vol.11</router-link
        >,
        <router-link @click.native="algorave_tokyo" to="/"
          >Algorave Tokyo</router-link
        >
        and
        <router-link @click.native="all_works" to="/">more</router-link>.
      </p>
    </div>
    <div class="content">
      <!--(1)component要素 (currentViewで指定されたコンポーネントを動的に表示する) -->
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import none from "~/components/none.vue";
import about from "~/components/about.vue";
import style_jockey_01 from "~/pages/works/style_jockey_01.vue";
import sonic_aquarium_resonance from "~/pages/works/sonic_aquarium_resonance.vue";
import sonic_aquarium from "~/pages/works/sonic_aquarium.vue";
import pt_11 from "~/pages/works/pt_11.vue";
import algorave_tokyo from "~/pages/works/algorave_tokyo.vue";
import all_works from "~/pages/works/index.vue";

export default {
  components: {
    none,
    about,
    style_jockey_01,
    sonic_aquarium_resonance,
    sonic_aquarium,
    pt_11,
    algorave_tokyo,
    all_works,
  },
  data() {
    return {
      //(2)表示するコンポーネント名を指定します。
      currentView: "none",
    };
  },
  methods: {
    //(3)ボタンクリックで表示するコンポーネントを切り替える
    none() {
      this.currentView = "none";
    },
    view_about() {
      this.currentView = "about";
    },
    style_jockey_01() {
      this.currentView = "style_jockey_01";
    },
    sonic_aquarium_resonance() {
      this.currentView = "sonic_aquarium_resonance";
    },
    sonic_aquarium() {
      this.currentView = "sonic_aquarium";
    },
    pt_11() {
      this.currentView = "pt_11";
    },
    algorave_tokyo() {
      this.currentView = "algorave_tokyo";
    },
    all_works() {
      this.currentView = "all_works";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap");

template {
  font-family: "JetBrains Mono";
  font-size: 11pt;
}

body {
  overscroll-behavior-y: none;
}

.container {
  background-color: black;
  min-height: 100vh;
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 6rem;
  padding-right: 6rem;
}

.site_title {
  font-family: "JetBrains Mono";
  font-weight: 600;
  display: block;
  color: #ffffff;
  letter-spacing: -0.3rem;
  padding-bottom: 4rem;
}

.site_title p {
  font-size: 6rem;
}

.site_title a {
  text-decoration: none;
  color: #ffffff;
}

.blink {
  -webkit-animation: blink 0.25s ease-in-out infinite alternate;
  animation: blink 0.25s ease-in-out infinite alternate;
}
@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.links {
  display: block;
  font-weight: 300;
  font-size: 2.8rem;
  letter-spacing: 0.5rem;
  padding-bottom: 4rem;
}

.links a,
a:visited {
  text-decoration: none;
  color: #ffffff;
}

.person_discription {
  font-family: "JetBrains Mono";
  display: block;
  font-weight: 300;
  font-size: 2.8rem;
  color: #ffffff;
  letter-spacing: 0.25rem;
  line-height: 6rem;
  padding-bottom: 4rem;
}

.person_discription a {
  text-decoration: none;
  color: #ffffff;
  background-color: #ffffff;
}

.person_discription a:hover {
  background-color: #000000;
  font-style: italic;
  font-weight: 500;
}

.about_work {
  font-family: "JetBrains Mono";
  display: block;
  font-weight: 300;
  font-size: 2.8rem;
  color: #ffffff;
  letter-spacing: 0.25rem;
  line-height: 6rem;
  padding-bottom: 4rem;
}

.about_work a {
  text-decoration: none;
  background-color: #ffffff;
  color: #ffffff;
  font-weight: 500;
}

.about_work a:active {
  color: #ffffff;
}

.about_work a:hover {
  background-color: #000000;
  font-style: italic;
}

@media all and (max-width: 768px) {
  .container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  p {
    font-family: "JetBrains Mono";
    font-size: 11pt;
  }

  .site_title {
    font-family: "JetBrains Mono";
    font-weight: 600;
    display: block;
    color: #ffffff;
    letter-spacing: 0.05rem;
    padding-bottom: 1rem;
  }

  .site_title p {
    font-size: 2rem;
  }

  .links {
    padding-bottom: 1rem;
    font-size: 2rem;
  }

  .person_discription {
    line-height: 2rem;
    padding-bottom: 1rem;
  }

  .about_work {
    line-height: 2rem;
    padding-bottom: 1rem;
  }
}
</style>
