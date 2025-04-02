<template>
  <div class="type-game-play">
    <img
      class="logo"
      src="@/assets/media/astroidType/find-the-astroid-logo.svg"
      alt="logo"
    />
    <img
      class="astroid-guess"
      :src="astroid[playCount]"
      alt="astroid"
      draggable="true"
      @ondragstart="dragstartHandler"
    />
    <div class="astro-container">
      <div
        class="astroid baby"
        @ondrop="dropHandler"
        @ondragover="dragoverHandler"
      >
        <img
          class="astro-img"
          src="@/assets/media/astroidType/baby-toy.svg"
          alt="toy"
        />
        <p class="astro-text">בייבי</p>
      </div>
      <div class="astroid teen">
        <img
          class="astro-img"
          src="@/assets/media/astroidType/teen-ear.svg"
          alt="ear"
        />
        <p class="astro-text">נער מתבגר</p>
      </div>
      <div class="astroid big">
        <img
          class="astro-img"
          src="@/assets/media/astroidType/horn.svg"
          alt="horn"
        />
        <p class="astro-text">בוגר</p>
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
      astroid: [
        "src/assets/media/astroidType/teen-astro3.svg",
        "src/assets/media/astroidType/baby-astro3.svg",
        "src/assets/media/astroidType/big-astro3.svg",
      ],
    };
  },
  methods: {
    dragstartHandler(event) {
      console.log("here");
      event.dataTransfer.setData("text", event.target.id);
    },

    dragoverHandler(event) {
      console.log("here1");
      event.preventDefault();
    },

    dropHandler(event) {
      console.log("here2");
      event.preventDefault();
      const data = event.dataTransfer.getData("text");
    },
    endGame() {
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
  top: 12rem;
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
  position: relative;
  top: 6rem;
  right: 50%;
  transform: translateX(50%);
}
</style>
