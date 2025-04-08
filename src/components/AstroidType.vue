<template>
  <div class="astroid-type"></div>
  <type-map v-if="page === 0" @next-page="page++"></type-map>
  <type-game v-if="page === 1" @next-section="nextSection" @start-game="gameStart" @end-game="endGame"></type-game>
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
    gameStart() {
      this.$emit("start-game");
    },
    endGame() {
      this.$emit("end-game");
    },
    nextSection() {
      this.$emit("next-section");
    }
  },
};
</script>

<style scoped></style>
