<template>
  <div class="type-game-start">
    <img class="logo" src="@/assets/media/astroidType/find-the-astroid-logo.svg" alt="logo">
    <img class="yoda" src="@/assets/media/astroidType/yoda-youGotIt.svg" alt="yoda">
    <button class="button" @click="nextPage">
    <div class="map" @click="toMap">
      <img
        class="map-icon"
        src="/src/assets/media/app/map-lightSaber.svg"
        alt="map-icon"
      />
      <p class="map-text">מפת הלומדה</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "type-game-start",
  components: {},
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    toMap() {
      this.$emit("to-map");
    },
    nextPage() {
        this.$emit("next-page");
    }
  },
};
</script>

<style scoped>
.map {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
}

.map-icon {
  height: 4rem;
}

.map-text {
  font-size: 1.1rem;
  position: relative;
  bottom: 2rem;
  width: 8rem;
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
  bottom: 18rem;
}
</style>
