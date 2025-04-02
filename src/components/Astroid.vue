<template>
  <div class="astroid">
    <astroid-explosion
      v-if="page === 0"
      @to-map="toMap"
      @next-section="page++"
    ></astroid-explosion>
    <astroid-type
      v-if="page === 1"
      @to-map="toMap"
      @next-section="page++"
    ></astroid-type>
    <how-to-explode
      v-if="page === 2"
      @to-map="toMap"
      @next-section="nextSection"
    ></how-to-explode>
  </div>
</template>

<script>
import AstroidExplosion from "@/components/AstroidExplosion.vue";
import AstroidType from "@/components/AstroidType.vue";
import HowToExplode from "@/components/HowToExplode.vue";

export default {
  name: "astroid",
  components: {
    AstroidExplosion,
    AstroidType,
    HowToExplode
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
