<template>
    <div class="type-game"></div>

  </template>
  
  <script>

  export default {
    name: "type-game",
    components: {
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
        
      }
    },
  };
  </script>
  
  <style scoped></style>