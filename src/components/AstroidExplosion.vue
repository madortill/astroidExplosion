<template>
  <div class="astroid-explosion">
    <astroid-explosion-explain v-if="page===0" @next-page="page++" @to-map="toMap"></astroid-explosion-explain>
    <what-is-astroid v-if="page===1" @next-section="nextSection" @to-map="toMap"></what-is-astroid>
  </div>
</template>

<script>
import AstroidExplosionExplain from "@/components/AstroidExplosionExplain.vue";
import WhatIsAstroid from "@/components/WhatIsAstroid.vue";
export default {
  name: "astroid-explosion",
  components: {
    AstroidExplosionExplain,
    WhatIsAstroid
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
