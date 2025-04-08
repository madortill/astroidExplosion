<template>
  <div id="app">
    <opening v-if="page === 0" v-show="!showMap" class="page" @next-section="page++"></opening>
    <astroid v-if="page === 1" v-show="!showMap" class="page" @next-section="page++" @to-map="toMap" @next-part="step++" :newPage="newPage"></astroid>
    <final-exar v-if="page === 2" v-show="!showMap" class="page" @next-section="page++" @to-map="toMap"></final-exar>
    <map-dir v-if="showMap" class="page" :currStep="step" @close-map="showMap = false" @to-page="toPage"></map-dir>
  </div>
</template>

<script>
import Opening from "@/components/Opening.vue";
import Astroid from "@/components/Astroid.vue";
import FinalExar from "@/components/FinalExar.vue";
import MapDir from "@/components/MapDir.vue";
export default {
  name: "app",
  components: {
    Opening,
    Astroid,
    FinalExar,
    MapDir
  },
  data() {
    return {
      page: 0,
      showMap: false,
      step: 0,
      newPage: -1,
    };
  },
  methods: {
    toMap() {
      this.showMap = true;
    },
    toPage(page) {
      this.page = 1;
      this.newPage = page;
      console.log(this.newPage);
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
