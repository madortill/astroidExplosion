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
    <div class="board">
      <div class="board-square-grid" @click="checkSquare">
        <div v-for="i in 36" :key="i" class="square" :id="i - 1"></div>
      </div>
    </div>
    <div :class="gameOn === true ? 'yoda-container' : 'yoda-container2'">
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
      didWin: false,
      gameOn: true,
      bubbleText: "כל הכבוד! השמדתם את האסטרואיד",
    };
  },
  mounted() {
    this.winCount = 0;
    this.startTurn();
  },
  methods: {
    startTurn() {
      this.num1 = Math.floor(Math.random() * 5);
      this.num2 = Math.floor(Math.random() * 5);
      this.gameOn = true;
    },
    checkSquare(event) {
      if (this.gameOn) {
        this.gameOn = false;
        let correctCorr;
        correctCorr = this.num1 * 6 + this.num2;
        if (event.target.id == correctCorr) {
          this.gameWin(event);
        } else {
          this.gameLose(event);
        }
        setTimeout(() => {
          this.startTurn();
          document
            .getElementById(event.target.id)
            .classList.remove("winAnimation");
          document
            .getElementById(event.target.id)
            .classList.remove("loseAnimation");
        }, 2500);
      }
    },
    gameWin(event) {
      this.bubbleText = "כל הכבוד! השמדתם את האסטרואיד";
      document.getElementById(event.target.id).classList.add("winAnimation");
      this.winCount++;
      if (this.winCount > 2) {
        setTimeout(() => {
          this.nextPage();
        }, 2500);
      }
    },
    gameLose(event) {
      document.getElementById(event.target.id).classList.add("loseAnimation");
      this.bubbleText = "לא נורא! אולי תצליחו בפעם הבאה";
    },
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
  top: 17rem;
  right: 17.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 15rem;
}

.yoda-container2 {
  position: relative;
  top: 10rem;
  right: 10rem;
  width: 20rem;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
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

.bubble2 {
  font-size: 2rem;
  background-image: url(/src/assets/media/finalExar/speech-bubble-l.svg);
  background-size: 100% 100%;
  height: 12rem;
  width: 18rem;
  text-align: center;
  padding-top: 2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}

.board-square-grid {
  display: grid;
  direction: ltr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0rem;
  width: 25rem;
  position: relative;
  top: 3rem;
  right: 2rem;
}
.square {
  height: 3.5rem;
  width: 4rem;
  border: 1px solid white;
  margin: 0rem;
}

.number-row {
  display: flex;
  gap: 2rem;
  flex-direction: row-reverse;
}
.number-col {
  display: flex;
  flex-direction: column;
}

.board {
  height: 25rem;
  width: 30rem;
  background-image: url(/src/assets/media/finalExar/coordinateds-map-num.svg);
  background-size: 100% 100%;
  position: relative;
  top: 8rem;
}

.winAnimation {
  animation: win 0.5s infinite;
}

.loseAnimation {
  animation: lose 0.5s infinite;
}

@keyframes win {
  0% {
    background-color: lawngreen;
  }
  50% {
    background-color: black;
  }
  100% {
    background-color: lawngreen;
  }
}

@keyframes lose {
  0% {
    background-color: black;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: black;
  }
}
</style>
