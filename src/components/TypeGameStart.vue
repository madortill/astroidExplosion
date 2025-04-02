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
      startGame: false,
    };
  },
  methods: {
    toMap() {
      this.$emit("to-map");
    },
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
    top: 51rem;
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
