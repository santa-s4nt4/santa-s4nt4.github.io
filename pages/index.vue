<template>
  <div class="container">
    <div class="title">
      <a href=""><p>S4NT4.GRAPHICS<span class="blink">▁</span></p></a>
    </div>
    <div class="links">
      <a href="https://twitter.com/santa_s4nt4" target="_blank">
        &#x1f5e3;
      </a>
      <a href="https://www.instagram.com/santa_s4nt4/" target="_blank">
        &#x1f4f7;
      </a>
      <a href="https://github.com/santa-s4nt4" target="_blank">
        &#x1f528;
      </a>
      <a href="https://www.notion.so/s4nt4/ba157394681a4894986ea95a4ca2454d" target="_blank">
        &#x1f4dd;
      </a>
    </div>
    <div class="person_discription">
      <p>
        <span @click="view_about">Santa</span> is a visual programmer based in Tokyo.
        <br> Favorite: visual performance, generative art, installation...
      </p>
    </div>
    <div class="works">
      <p>
        Noticeable works: 
        <br>
        <span @click="sonic_aquarium">Sonic-Aquarium</span>, 
        <span @click="holarchy">holarchy</span>, 
        <span @click="pt_11">Playing Tokyo Vol.11</span>, 
        <span @click="save_metro">Save The Metro Compilations</span>, 
        <span @click="algorave_tokyo">Algorave Tokyo</span>
      </p>
    </div>
    <div class="content">
      <!--(1)component要素 (currentViewで指定されたコンポーネントを動的に表示する) -->
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import none from '~/components/none.vue'
import about from '~/components/about.vue'
import sonic_aquarium from '~/components/works/sonic_aquarium.vue'
import Component2 from '~/components/Component2.vue'

export default {
  components: {
    none,
    about,
    sonic_aquarium,
    Component2
  },
  data() {
    return { 
      //(2)表示するコンポーネント名を指定します。
      currentView: "none"
    }
  },
  methods: {
    //(3)ボタンクリックで表示するコンポーネントを切り替える
    view_about() {
      this.currentView = "about"
    },
    sonic_aquarium() {
      this.currentView = "sonic_aquarium"
    },
    holarchy() {
      this.currentView = "component2"
    },
    pt_11() {
      this.currentView = "component2"
    },
    save_metro() {
      this.currentView = "component2"
    },
    algorave_tokyo() {
      this.currentView = "component2"
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap");

template {
  font-family: "JetBrains Mono";
  font-size: 10px;
}

.container {
  background-color: black;
  min-height: 100vh;
  text-align: left;
  padding-top: 1rem;
  padding-left: 1rem;
}

.title {
  font-family: "JetBrains Mono";
  font-weight: 500;
  display: block;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  padding-bottom: 1rem;
}

.title a {
  text-decoration: none;
  color: #ffffff;
}

.blink {
	-webkit-animation: blink 0.25s ease-in-out infinite alternate;
	animation: blink 0.25s ease-in-out infinite alternate;
}
@-webkit-keyframes blink {
	0% {opacity: 0;}
	100% {opacity: 1;}
}
@keyframes blink {
	0% {opacity: 0;}
	100% {opacity: 1;}
}

.links {
  display: block;
  font-weight: 300;
  font-size: 1.4rem;
  letter-spacing: 0.15rem;
  padding-bottom: 1rem;
}

.links a {
  text-decoration: none;
}

.person_discription {
  font-family: "JetBrains Mono";
  display: block;
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  padding-bottom: 2rem;
}

.person_discription span {
  background-color: #ffffff;
}

.person_discription span:hover {
  background-color: #000000;
}

.works {
  font-family: "JetBrains Mono";
  display: block;
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  padding-bottom: 2rem;
}

.works a {
  text-decoration: none;
}

.works span {
  background-color: #ffffff;
}

.works span:hover {
  background-color: #000000;
}

</style>
