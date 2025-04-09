<template>
  <div class="astroid">
    <astroid-explosion
      v-if="page == 0"
      @next-section="nextPage"
    ></astroid-explosion>
    <what-is-astroid
      v-if="page == 1"
      @next-section="nextPage"
    ></what-is-astroid>
    <astroid-type
      v-if="page == 2"
      @next-section="nextPage"
      @start-game="gameOn = true"
      @end-game="gameOn = false"
    ></astroid-type>
    <how-to-explode v-if="page == 3" @next-section="nextPage"></how-to-explode>
    <!-- Map view: appears when game is not on -->
    <div class="map" @click="toMap" v-if="!gameOn">
      <img
        class="map-icon"
        src="/src/assets/media/app/map-lightSaber.svg"
        alt="map-icon"
      />
      <p class="map-text">מפת הלומדה</p>
    </div>
  </div>
</template>

<script>
import AstroidExplosion from "@/components/AstroidExplosion.vue";
import AstroidType from "@/components/AstroidType.vue";
import HowToExplode from "@/components/HowToExplode.vue";
import WhatIsAstroid from "@/components/WhatIsAstroid.vue";

export default {
  name: "astroid",
  components: {
    AstroidExplosion,
    AstroidType,
    HowToExplode,
    WhatIsAstroid,
  },
  props: ["newPage"],
  data() {
    return {
      page: 0,
      gameOn: false,
    };
  },
  watch: {
    newPage(newVal) {
      if (newVal !== -1) {
        this.page = newVal;
      }
    },
  },
  methods: {
    toMap() {
      this.$emit("to-map");
    },
    nextPage() {
      if (this.page === 2) {
        this.$emit("next-section");
      } else {
        this.page++;
        this.nextStep();
      }
    },
    nextStep() {
      this.$emit("next-part", this.page);
    },
  },
};
</script>

<style scoped>
.map {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
}

.map-icon {
  height: 4rem;
}

.map-text {
  font-size: 1.1rem;
  position: relative;
  top: -2rem;
  right: 0.1rem;
  width: 8rem;
}
</style>
