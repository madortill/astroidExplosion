<template>
  <div class="astroid">
    <astroid-explosion
      v-if="page === 0"
      @next-section="page++"
    ></astroid-explosion>
    <astroid-type
      v-if="page === 1"
      @next-section="page++"
      @start-game="gameOn = true"
      @end-game="gameOn = false"
    ></astroid-type>
    <how-to-explode
      v-if="page === 2"
      @next-section="nextSection"
    ></how-to-explode>
    <div class="map" @click="toMap" v-if="!gameOn">
      <img class="map-icon" src="/src/assets/media/app/map-lightSaber.svg" alt="map-icon">
      <p class="map-text">מפת הלומדה</p>
    </div>
  </div>
</template>

<script>
import AstroidExplosion from "@/components/AstroidExplosion.vue";
import AstroidType from "@/components/AstroidType.vue";
import HowToExplode from "@/components/HowToExplode.vue";

export default {
  name: "astroid",
  components: {
    AstroidExplosion,
    AstroidType,
    HowToExplode
  },
  data() {
    return {
      page: 0,
      gameOn: false
    };
  },
  methods: {
    toMap() {
      this.$emit("to-map");
    },
    nextSection() {
      this.$emit("next-section");
    }
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
}</style>
