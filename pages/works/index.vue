<template>
  <div>
    <div class="about">
      <p>Works</p>
      <details>
        <summary>[2021]</summary>
        <p>
          -
          <router-link @click.native="style_jockey_01" to="/"
            >visual system for MUTEK.JP x WOMB</router-link
          >
          <br />
          -
          <router-link @click.native="sonic_aquarium_resonance" to="/"
            >Sonic Aquarium -Resonance-</router-link
          >
        </p>
      </details>
      <details>
        <summary>[2020]</summary>
        <p>
          -
          <router-link @click.native="sonic_aquarium" to="/"
            >Sonic Aquarium</router-link
          >
          <br />
          -
          <router-link @click.native="holarchy" to="/">holarchy</router-link>
          <br />
          -
          <router-link @click.native="pt_11" to="/"
            >visual system for Playing Tokyo Vol.11</router-link
          >
          <br />
          -
          <router-link @click.native="save_metro" to="/"
            >visual system for Save The Metro Compilations</router-link
          ><br />
          -
          <router-link @click.native="algorave_tokyo" to="/"
            >visual system for Algorave Tokyo</router-link
          >
        </p>
      </details>
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
import holarchy from "~/pages/works/holarchy.vue";
import pt_11 from "~/pages/works/pt_11.vue";
import save_metro from "~/pages/works/save_metro.vue";
import algorave_tokyo from "~/pages/works/algorave_tokyo.vue";

export default {
  components: {
    none,
    about,
    style_jockey_01,
    sonic_aquarium_resonance,
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
    style_jockey_01() {
      this.currentView = "style_jockey_01";
    },
    sonic_aquarium_resonance() {
      this.currentView = "sonic_aquarium_resonance";
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
</style>