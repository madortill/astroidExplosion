<template>
  <div class="start-page">
    <p class="title">פיצוץ אסטרואידים</p>
    <img
      v-if="started === false"
      @click="start"
      class="bb8"
      src="/src/assets/media/opening/bb8.svg"
      alt="bb8"
    />
    <first-animation id="animation" v-else></first-animation>
    <p class="microcopy">בואו נמריא!</p>
  </div>
</template>

<script>
import FirstAnimation from "@/components/FirstAnimation.vue";
export default {
  name: "start-page",
  components: {
    FirstAnimation,
  },
  data() {
    return {
      started: false,
    };
  },
  methods: {
    start() {
      this.started = true;
      setTimeout(() => {
        this.$emit("next-page");
      }, 1450);
    },
  },
};
</script>

<style scoped>

.title {
  position: relative;
  top: 13rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: transparent;
  -webkit-text-stroke: 0.1rem #fec91a;
  font-size: 4.5rem;
  text-align: center;
}

.bb8 {
  height: 18rem;
  rotate: 20deg;
  position: relative;
  top: 14rem;
  right: 50%;
  transform: translateX(50%);
}

.microcopy {
  position: absolute;
  top: 50rem;
  right: 9rem;
  font-size: 1.5rem;
  rotate: -30deg;
  color: #fec91a;
}

#animation {
  position: absolute;
  top: 5rem;
  right: 50%;
  transform: translateX(50%);
}
</style>
