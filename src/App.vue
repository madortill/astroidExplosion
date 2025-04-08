<template>
  <div id="app">
    <opening v-if="page === 0" class="page" @next-section="page++"></opening>
    <astroid v-if="page === 1" class="page" @next-section="page++" @to-map="toMap"></astroid>
    <final-exar v-if="page === 2" class="page" @next-section="page++" @to-map="toMap"></final-exar>

  </div>
</template>

<script>
import Opening from "@/components/Opening.vue";
import Astroid from "@/components/Astroid.vue";
import FinalExar from "@/components/FinalExar.vue";
export default {
  name: "app",
  components: {
    Opening,
    Astroid,
    FinalExar
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    toMap() {
      console.log("map");
    }
  }
};
</script>

<style>
#app {
  background-image: url(/src/assets/media/app/background.svg);
  background-size: cover;
  height: 100vh;
  width: 100vw;
  font-size: 2.3rem;
  color: aliceblue;
  overflow: hidden;
  position: relative;
}

html {
  font-family: "secolar";
  font-size: calc(10px + 0.5vw);
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
  z-index: 1;
}
</style>
