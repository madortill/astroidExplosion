<template>
  <div class="astroid-type"></div>
  <type-map v-if="page === 0" @to-map="toMap" @next-page="page++"></type-map>
  <type-game v-if="page === 1" @to-map="toMap" @next-section="nextSection"></type-game>
</template>

<script>
import TypeMap from "@/components/TypeMap.vue";
import TypeGame from "@/components/TypeGame.vue";
export default {
  name: "astroid-type",
  components: {
    TypeMap,
    TypeGame,
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
    nextSection() {
      this.$emit("next-section");
    }
  },
};
</script>

<style scoped></style>
