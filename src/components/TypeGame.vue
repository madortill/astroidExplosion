<template>
    <div class="type-game"></div>
    <type-game-start v-if="page===0" @to-map="toMap" @next-page="page++"></type-game-start>
    <type-game-explain v-if="page===1" @to-map="toMap" @next-page="page++"></type-game-explain>
    <type-game-play v-if="page===2" @next-page="page++"></type-game-play>
    <type-game-end v-if="page===3" @to-map="toMap" @next-section="nextSection"></type-game-end>
  </template>
  
  <script>
  import TypeGameStart from "@/components/TypeGameStart.vue";
  import TypeGameExplain from "@/components/TypeGameExplain.vue";
  import TypeGameEnd from "@/components/TypeGameEnd.vue";
  import TypeGamePlay from "@/components/TypeGamePlay.vue";
  export default {
    name: "type-game",
    components: {
        TypeGameStart,
        TypeGameExplain,
        TypeGameEnd,
        TypeGamePlay
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