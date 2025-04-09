<template>
  <div class="final-game">
    <div class="explodeCount">
      <img
        class="astroid"
        src="@/assets/media/finalExar/astroid.svg"
        alt="astroid"
        @click="nextPage"
      />
      <p class="explodeCountText">{{ `3 / ${winCount}` }}</p>
    </div>
    <div class="yoda-container">
      <div class="bubble1" v-if="gameOn">{{ `(${num1},${num2})` }}</div>
      <div class="bubble2" v-else>{{ bubbleText }}</div>
      <img class="yoda" src="@/assets/media/app/yoda.svg" alt="yoda" />
    </div>
  </div>
</template>

<script>
export default {
  name: "final-game",
  components: {},
  data() {
    return {
      winCount: 0,
      num1: 0,
      num2: 0,
      gameOn: true,
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page");
    },
  },
};
</script>

<style scoped>
.explodeCount {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 2rem;
}

.astroid {
  height: 5rem;
  margin-left: 1rem;
}

.yoda {
  height: 9rem;
}

.yoda-container {
    position: relative;
    top: 42rem;
    right: 21rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 15rem;
}

.bubble1 {
    background-image: url(/src/assets/media/finalExar/speech-bubble-small.svg);
    background-size: 100% 100%;
    font-size: 1.7rem;
    text-align: center;
    width: 10rem;
    height: 6rem;
    padding-top: 1rem;
}

</style>
