<template>
    <div id="app">
      <opening class="page"></opening>
    </div>

</template>

<script>
import Opening from "@/components/Opening.vue"
export default {
    name: "app",
    components: {
        Opening,
    }
}
</script>

<style scoped>
#app {
  background-image: url(/src/assets/media/app/background.svg);
  background-size: cover;
  height: 100vh;
  width: 100vw;
  font-family: "secolar";
  font-size: 2rem;
  color: aliceblue;
}

html {
	Font-size: calc(10px + 0.5vw);
  direction: rtl;
}

@font-face {
  font-family: migdal;
  src: url(/src/assets/fonts/migdalHaemek/migdalfontwin-webfont.ttf);
}

@font-face {
  font-family: secolar;
  src: url(/src/assets/fonts/secolarOne/SecularOne-Regular.ttf);
}

.page {
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>
