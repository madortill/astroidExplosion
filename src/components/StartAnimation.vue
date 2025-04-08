<template>
  <div class="animate-iframe-container">
    <iframe
      :src="animateSrc"
      frameborder="0"
      width="100%"
      height="100%"
      title="start animation"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "start-animation",
  data() {
    return {
      // Point to the index.html file of your exported Animate project
      animateSrc: "./animations/explodeAnimation/explodeAnimation.html",
    };
  },
};
</script>

<style scoped>
.animate-iframe-container {
  /* width: 100%; */
  height: 100%; /* Adjust this height as per your needs */
  width: 100%;
  position: absolute;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
