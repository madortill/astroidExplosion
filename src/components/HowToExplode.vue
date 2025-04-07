<template>
  <div class="how-to-explode">
    <how-to-start v-if="page===0" @next-page="page++"></how-to-start>
    <how-to-explain v-if="page===1" @next-page="page++"></how-to-explain>
    <how-to-coordinates v-if="page===2" @next-section="nextSection"></how-to-coordinates>
  </div>
</template>

<script>
import HowToStart from "@/components/HowToStart.vue";
import HowToExplain from "@/components/HowToExplain.vue";
import HowToCoordinates from "@/components/HowToCoordinates.vue";
export default {
  name: "how-to-explode",
  components: {
    HowToStart,
    HowToExplain,
    HowToCoordinates
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    nextSection() {
      this.$emit("next-section");
    }
  },
};
</script>

<style scoped></style>
