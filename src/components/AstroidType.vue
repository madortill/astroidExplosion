<template>
  <div class="astroid-type"></div>
  <type-map v-if="page===0" @to-map="toMap"></type-map>
</template>

<script>
import TypeMap from "@/components/TypeMap.vue";
export default {
  name: "astroid-type",
  components: {
    TypeMap
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
