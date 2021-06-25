<template>
  <div class="container">
    <div class="title">
      <p>S4NT4.GRAPHICS<span class="blink">▁</span></p>
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
    </div>
    <div class="person_discription">
      <p>
        Santa is a visual programmer based in Tokyo.
        <br> Favorite: visual performance, generative art, installation...
      </p>
    </div>
    <div class="works">
      <p>
        Noticeable works: 
        <br>
        Sonic-Aquarium, holarchy, Playing Tokyo Vol.11, Save The Metro Compilations, Algorave Tokyo
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
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
  font-size: 1.6rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  padding-bottom: 1rem;
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
  font-size: 1.6rem;
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
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  padding-bottom: 2rem;
}

.works {
  font-family: "JetBrains Mono";
  display: block;
  font-weight: 400;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: -0.05rem;
  padding-bottom: 2rem;
}

.works a {
  text-decoration: none;
}

</style>
