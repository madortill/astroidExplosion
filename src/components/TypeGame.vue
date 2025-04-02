<template>
    <div class="type-game"></div>
    <type-game-start v-if="page===0" @to-map="toMap" @next-page="page++"></type-game-start>
  </template>
  
  <script>
  import TypeGameStart from "@/components/TypeGameStart.vue";
  export default {
    name: "type-game",
    components: {
        TypeGameStart,
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