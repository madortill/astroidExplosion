<template>
  <div class="how-to-explode">
    <how-to-start v-if="page===0" @to-map="toMap" @next-page="page++"></how-to-start>
    <how-to-explain v-if="page===1" @to-map="toMap" @next-page="page++"></how-to-explain>
  </div>
</template>

<script>
import HowToStart from "@/components/HowToStart.vue";
import HowToExplain from "@/components/HowToExplain.vue";
export default {
  name: "how-to-explode",
  components: {
    HowToStart,
    HowToExplain
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    toMap() {
      this.$emit("to-map");
    },
  },
};
</script>

<style scoped></style>
