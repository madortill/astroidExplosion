<template>
  <div class="opening">
    <start-page v-if="page === 0" @next-page="page++"></start-page>
    <star-wars-start v-else-if="page === 1" @next-page="toAnimation"></star-wars-start>
    <start-animation v-else-if="page === 2"></start-animation>
    <start-explanation
      v-else-if="page == 3"
      @next-page="nextSection"
    ></start-explanation>
    <load-animation v-else class="load"></load-animation>
  </div>
</template>

<script>
import StartPage from "@/components/StartPage.vue";
import StartAnimation from "@/components/StartAnimation.vue";
import StartExplanation from "@/components/StartExplanation.vue";
import LoadAnimation from "@/components/LoadAnimation.vue";
import StarWarsStart from "@/components/StarWarsStart.vue";
export default {
  name: "opening",
  components: {
    StartPage,
    StartAnimation,
    StartExplanation,
    LoadAnimation,
    StarWarsStart
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    toAnimation() {
      this.page++;
      setTimeout(() => {
        this.page++;
      }, 2900);
    },
    nextSection() {
      this.page++;
      setTimeout(() => {
        this.$emit("next-section");
      }, 2000);
    },
  },
};
</script>

<style scoped>
.load {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
</style>
