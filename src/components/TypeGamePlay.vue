<template>
  <div class="type-game-play">
    <img
      class="logo"
      src="@/assets/media/astroidType/find-the-astroid-logo.svg"
      alt="logo"
    />
    <img class="astroid-guess" :src="astroidSrc[playCount]" alt="astroid" @click="endGame"/>
    <div class="astro-container">
      <div
        v-for="(astroid, index) in astroids"
        :id="index"
        :key="index"
        class="astroid"
      >
        <img :src="src[index]" alt="astroid" class="astro-img" />
        <p class="astro-text">{{ text[index] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "type-game-play",
  components: {},
  data() {
    return {
      playCount: 0,
      selected: "",
      astroidSrc: [
        "/media/astroidType/teen-astro3.svg",
        "/media/astroidType/baby-astro3.svg",
        "/media/astroidType/big-astro3.svg",
      ],
      astroids: ["baby", "teen", "big"],
      text: ["בייבי", "נער מתבגר", "בוגר"],
      src: [
        "/media/astroidType/baby-toy.svg",
        "/media/astroidType/teen-ear.svg",
        "/media/astroidType/horn.svg",
      ],
    };
  },
  methods: {
    endGame(ev) {
      this.$emit("next-page");
    },
  },
};
</script>

<style scoped>
.logo {
  position: relative;
  top: 2rem;
  right: 50%;
  transform: translateX(50%);
  height: 9rem;
}

.astro-container {
  position: relative;
  top: 42rem;
  display: flex;
  justify-content: space-around;
}

.astroid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.astro-img {
  height: 7rem;
}

.astro-text {
  font-size: 1.8rem;
  margin-top: -0.2rem;
}

.astroid-guess {
  height: 25rem;
  position: absolute;
  top: 17rem;
  right: 50%;
  transform: translateX(50%);
}

.drop-zone-active {
  border: 3px dashed #ffffff;
}
</style>
