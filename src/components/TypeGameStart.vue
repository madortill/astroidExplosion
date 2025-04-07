<template>
  <div class="type-game-start">
    <div class="flex">
        <img
          class="logo"
          src="@/assets/media/astroidType/find-the-astroid-logo.svg"
          alt="logo"
        />
        <button class="button" @click="nextPage">
            בואו נתחיל!
        </button>
    </div>
    <img
      class="yoda"
      :class="startGame===true ? 'animation' : '' "
      src="@/assets/media/astroidType/yoda-youGotIt.svg"
      alt="yoda"
    />
  </div>
</template>

<script>
export default {
  name: "type-game-start",
  components: {},
  data() {
    return {
      page: 0,
      startGame: false,
    };
  },
  methods: {
    nextPage() {
        this.startGame = true;
        setTimeout(() => {
            this.$emit("next-page");
        }, 3000);
    },
  },
};
</script>

<style scoped>

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 3px 3px 5px black;
}

.logo {
    height: 18rem;
}

.flex {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.yoda {
    height: 17rem;
    position: relative;
    top: 48rem;
    right: 35rem;
}

.animation {
    animation: yodaMove 3s;
}

@keyframes yodaMove {
    0% {
        right: 35rem;
    }
    40% {
        right: 15rem;
    }
    60% {
        right: 15rem;
    }
    100% {
        right: 35rem
    }
}

</style>
