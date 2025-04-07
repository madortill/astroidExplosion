<template>
  <div class="how-to-start">
      <p class="title">איך מפוצצים אסטרואיד ?</p>
      <button class="button" @click="nextPage">נשמע פיצוץ!</button>
      <img class="astroid" src="@/assets/media/howToExplode/astroid.svg" alt="astroid">
    <img class="fallen-astro" src="@/assets/media/howToExplode/fall-astroid.svg" alt="astroid-fall">
  </div>
</template>

<script>
export default {
  name: "how-to-start",
  components: {},
  data() {
    return {};
  },
  methods: {
    nextPage() {
        this.$emit("next-page");
    }
  },
};
</script>

<style scoped>
.title {
  position: relative;
  top: 17rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: #fec91a;
  font-size: 4.2rem;
  text-align: center;
  z-index: 1;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 3px 3px 5px black;
  position: relative;
  right: 50%;
  transform: translateX(50%);
  top: 7rem;
}

.astroid {
    height: 12rem;
    position: relative;
    bottom: 3rem;
    right: 15rem;
}

.fallen-astro {
    height: 16rem;
    position: relative;
    top: 3rem;
    left: 5rem;
}
</style>
