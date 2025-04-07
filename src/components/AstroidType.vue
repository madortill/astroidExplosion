<template>
  <div class="astroid-type"></div>
  <type-map v-if="page === 0" @next-page="page++"></type-map>
  <type-game v-if="page === 1" @next-section="nextSection"></type-game>
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
    nextSection() {
      this.$emit("next-section");
    }
  },
};
</script>

<style scoped></style>
