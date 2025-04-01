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
  </div>
</template>

<script>
import AstroidExplosion from "@/components/AstroidExplosion.vue";
import AstroidType from "@/components/AstroidType.vue";

export default {
  name: "astroid",
  components: {
    AstroidExplosion,
    AstroidType,
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

<style scoped>
.astroid {
  height: 100%;
  width: 100%;
}
</style>
