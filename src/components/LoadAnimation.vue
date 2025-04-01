<template>
  <div class="animate-iframe-container">
    <iframe
      :src="animateSrc"
      frameborder="0"
      width="100%"
      height="100%"
      title="load animation"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "load-animation",
  data() {
    return {
      // Point to the index.html file of your exported Animate project
      animateSrc: "animations/אנימציית טעינה/אנימציית טעינה 1.html",
    };
  },
};
</script>

<style scoped>
.animate-iframe-container {
  height: 150%;
  width: 150%;
  position: relative;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
