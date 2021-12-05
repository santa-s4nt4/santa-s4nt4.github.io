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
    <div class="works">
      <p>
        Noticeable works:
        <br />
        <router-link @click.native="sonic_aquarium" to="/"
          >Sonic-Aquarium</router-link
        >, <router-link @click.native="holarchy" to="/">holarchy</router-link>,
        <router-link @click.native="pt_11" to="/"
          >Playing Tokyo Vol.11</router-link
        >,
        <router-link @click.native="save_metro" to="/"
          >Save The Metro Compilations</router-link
        >,
        <router-link @click.native="algorave_tokyo" to="/"
          >Algorave Tokyo</router-link
        >
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
import sonic_aquarium from "~/pages/works/sonic_aquarium.vue";
import holarchy from "~/pages/works/holarchy.vue";
import pt_11 from "~/pages/works/pt_11.vue";
import save_metro from "~/pages/works/save_metro.vue";
import algorave_tokyo from "~/pages/works/algorave_tokyo.vue";

export default {
  components: {
    none,
    about,
    sonic_aquarium,
    holarchy,
    pt_11,
    save_metro,
    algorave_tokyo,
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
    sonic_aquarium() {
      this.currentView = "sonic_aquarium";
    },
    holarchy() {
      this.currentView = "holarchy";
    },
    pt_11() {
      this.currentView = "pt_11";
    },
    save_metro() {
      this.currentView = "save_metro";
    },
    algorave_tokyo() {
      this.currentView = "algorave_tokyo";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap");

template {
  font-family: "JetBrains Mono";
  font-size: 10pt;
}

body {
  overscroll-behavior-y: none;
}

.container {
  background-color: black;
  min-height: 100vh;
  text-align: left;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.site_title {
  font-family: "JetBrains Mono";
  font-weight: 500;
  display: block;
  color: #ffffff;
  letter-spacing: -0.05rem;
  padding-bottom: 1rem;
}

.site_title p {
  font-size: 2rem;
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
  font-size: 2rem;
  letter-spacing: 0.15rem;
  padding-bottom: 1rem;
}

.links a,
a:visited {
  text-decoration: none;
  color: #ffffff;
}

.person_discription {
  font-family: "JetBrains Mono";
  display: block;
  font-weight: 400;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  line-height: 1.5;
  padding-bottom: 1rem;
}

.person_discription a {
  text-decoration: none;
  color: #ffffff;
  background-color: #ffffff;
}

.person_discription a:hover {
  background-color: #000000;
}

.works {
  font-family: "JetBrains Mono";
  display: block;
  font-weight: 400;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  line-height: 1.5;
  padding-bottom: 2rem;
}

.works a {
  text-decoration: none;
  background-color: #ffffff;
  color: #ffffff;
}

.works a:active {
  color: #ffffff;
}

.works a:hover {
  background-color: #000000;
}
</style>
