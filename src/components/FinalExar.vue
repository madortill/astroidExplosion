<template>
  <div class="final-exar">
    <final-start v-if="page === 0" @next-page="page++"></final-start>
    <final-explain v-if="page === 1" @next-page="page++"></final-explain>
    <final-game v-if="page === 2" @next-page="page++"></final-game>
    <end-page v-if="page === 3" @restart="restart"></end-page>
    <div class="map" @click="toMap" v-if="page < 2">
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
import FinalStart from "@/components/FinalStart.vue";
import FinalExplain from "@/components/FinalExplain.vue";
import FinalGame from "@/components/FinalGame.vue";
import EndPage from "@/components/EndPage.vue";
export default {
  name: "final-exar",
  components: {
    FinalStart,
    FinalExplain,
    FinalGame,
    EndPage
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    nextSection() {
      this.$emit("next-section");
    },
    toMap() {
      this.$emit("to-map");
    },
    restart() {
        this.$emit("restart");
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
}
</style>
