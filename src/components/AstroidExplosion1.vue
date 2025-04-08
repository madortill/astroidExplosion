<template>
  <div class="astroid-explosion1">
    <astroid-explosion-explain v-if="page===0" @next-page="nextPage"></astroid-explosion-explain>
    <what-is-astroid v-if="page===1" @next-section="nextPage"></what-is-astroid>
  </div>
</template>

<script>
import AstroidExplosionExplain from "@/components/AstroidExplosionExplain.vue";
import WhatIsAstroid from "@/components/WhatIsAstroid.vue";
export default {
  name: "astroid-explosion1",
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
    nextPage() {
      if (this.page === 0) {
        this.$emit("next-step")
        this.page++;
      } else {
        this.$emit("next-section");
      }
    }
  },
};
</script>

<style scoped></style>
