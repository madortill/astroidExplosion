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
      <p class="text">לחץ על סוג האסטרואיד הנכון על פי מאפייניו</p>
      <div v-for="(astroid, index) in astroids" :key="index" :class="astroid" class="astroid">
        <img :src="src[index]" alt="astroid" class="astro-img">
        <p class="astro-text">{{ text[index] }}</p>
      </div>
      <button class="button" @click="nextPage">למשחק!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "type-game-explain",
  components: {},
  data() {
    return {
      astroids: ["baby", "teen", "big"],
      text: ["בייבי", "נער מתבגר", "בוגר"],
      src: ["/media/astroidType/baby-toy.svg", "/media/astroidType/teen-ear.svg", "/media/astroidType/horn.svg"],
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
  bottom: 27rem;
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
