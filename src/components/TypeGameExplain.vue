<template>
  <div class="type-game-explain">
    <div class="background">
      <p class="title">הוראות</p>
      <img
        class="logo-toy"
        src="@/assets/media/astroidType/baby-toy.svg"
        alt="toy"
      />
      <img
        class="logo-horn"
        src="@/assets/media/astroidType/big-horn.svg"
        alt="horn"
      />
      <p class="text">גרור את האסטרואיד לסל הנכון על פי סוגו ומאפייניו</p>
      <div class="astroid baby">
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
          class="astro-img big-img"
          src="@/assets/media/astroidType/horn.svg"
          alt="horn"
        />
        <p class="astro-text">בוגר</p>
      </div>
      <button class="button" @click="nextPage">למשחק!</button>
    </div>
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
  name: "type-game-explain",
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
    },
  },
};
</script>

<style scoped>
.title {
  position: relative;
  top: 1rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: #fec91a;
  font-size: 4.3rem;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
  width: 20rem;
}

.logo-horn {
  position: relative;
  bottom: 11rem;
  right: 2rem;
  height: 5rem;
}

.logo-toy {
  position: relative;
  bottom: 10rem;
  right: 24rem;
  height: 5.5rem;
}

.text {
  font-size: 2.8rem;
  text-align: center;
  margin-top: -0.05rem;
  position: relative;
  top: -7rem;
  right: 50%;
  transform: translateX(50%);
  width: 30rem;
}

.background {
  position: relative;
  top: 8rem;
  left: -50%;
  transform: translateX(50%);
  width: 34rem;
  height: 50rem;
  padding-top: 4rem;
  background-image: url(src/assets/media/app/clear-div.svg);
  background-size: 100% 100%;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 3px 3px 5px black;
  position: relative;
  right: 50%;
  transform: translateX(50%);
  bottom: 26rem;
}

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

.astroid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.baby {
  position: relative;
  bottom: 9rem;
  left: 9rem;
}

.big {
  position: relative;
  bottom: 33.4rem;
  right: 9rem;
}

.teen {
  position: relative;
  bottom: 15rem;
  left: 50%;
  transform: translateX(-50%);
}

.astro-img {
  height: 8rem;
}

.big-img {
  height: 7rem;
}

.astro-text {
  font-size: 2rem;
  margin-top: -0.2rem;
}
</style>
