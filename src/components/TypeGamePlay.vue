<template>
  <div class="type-game-play">
    <img
      class="logo"
      src="@/assets/media/astroidType/find-the-astroid-logo.svg"
      alt="logo"
    />
    <p class="clock" v-if="showAstro">{{ `0:0${time}` }}</p>
    <img
      class="astroid-guess"
      :src="astroidSrc[playCount]"
      alt="astroid"
      v-show="showAstro"
    />
    <img
      class="yoda-animation yoda"
      :src="yoda"
      alt="yoda"
      v-show="!showAstro"
      @animationend="nextStep"
    />
    <div class="astro-container">
      <div
        v-for="(astroid, index) in astroids"
        :key="index"
        class="astroid"
        @click="checkAns"
      >
        <img :src="src[index]" alt="astroid" class="astro-img" :id="index" />
        <p class="astro-text" :id="index">{{ text[index] }}</p>
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
      time: 3,
      showAstro: true,
      playCount: 0,
      selected: "",
      yoda: "",
      astroidSrc: [
        "./media/astroidType/teen-astro3.svg",
        "./media/astroidType/baby-astro3.svg",
        "./media/astroidType/big-astro3.svg",
      ],
      astroidOrder: ["1", "0", "2"],
      astroids: ["baby", "teen", "big"],
      text: ["בייבי", "נער מתבגר", "בוגר"],
      src: [
        "./media/astroidType/baby-toy.svg",
        "./media/astroidType/teen-ear.svg",
        "./media/astroidType/horn.svg",
      ],
    };
  },
  methods: {
    checkAns(event) {
      this.showAstro = false;
      if (event == undefined || this.astroidOrder[this.playCount] !== event.target.id) {
        this.yoda = "./media/astroidType/yoda-wrong.svg";
      } else {
        this.playCount++;
        this.yoda = "./media/astroidType/yoda-right.svg";
      }
    },
    nextStep() {
      if (this.playCount === 3) {
        this.endGame();
      } else {
        this.showAstro = true;
        this.time = 3;
      }
    },
    endGame() {
      this.$emit("next-page");
    },
  },
  computed: {
    time() {
      setTimeout(() => {
        if (this.time !== 0) {
          this.time--;
        } else {
          this.checkAns();
        }
      }, 1000);
      return this.time;
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

.yoda {
  position: absolute;
  top: 20rem;
  height: 22rem;
  left: -22rem;
}

.astroid-guess {
  height: 25rem;
  position: absolute;
  top: 19rem;
  right: 50%;
  transform: translateX(50%);
}

.drop-zone-active {
  border: 3px dashed #ffffff;
}

.yoda-animation {
  animation: yodaMove 3.5s;
}

@keyframes yodaMove {
  0% {
    left: -22rem;
  }
  40% {
    left: 6rem;
  }
  60% {
    left: 6rem;
  }
  100% {
    left: -22rem;
  }
}

.clock {
  position: absolute;
  top: 10rem;
  left: 4rem;
}
</style>
