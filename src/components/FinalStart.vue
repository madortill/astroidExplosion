<template>
  <div class="final-start">
    <p class="title">תרגול מסכם</p>
    <button class="button" @click="nextPage">יהיה טיל!</button>
    <img
      class="fallen-astro"
      src="@/assets/media/finalExar/fallen-astro.svg"
      alt="astroid-fall"
    />
    <img
      class="cannon"
      src="@/assets/media/finalExar/cannon.svg"
      alt="cannon"
    />
  </div>
</template>

<script>
export default {
  name: "final-start",
  components: {},
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page");
    },
    toMap() {},
  },
};
</script>

<style scoped>
.title {
  position: relative;
  top: 16rem;
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
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 30rem;
}

.fallen-astro {
  height: 18rem;
  position: relative;
  top: 15rem;
  right: 18rem;
}

.cannon {
  height: 10rem;
  position: relative;
  top: 22rem;
  right: 1rem;
}
</style>
