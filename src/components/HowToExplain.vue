<template>
  <div class="how-to-start">
    <p class="title">איך מפוצצים אסטרואיד ?</p>
    <p class="text">{{ text[page] }}</p>
    <img
      @click="page++"
      v-if="page < 2"
      class="arrow-left"
      src="@/assets/media/app/arrow.svg"
      alt="arrow-left"
    />
    <img
      @click="page--"
      v-if="page > 0"
      class="arrow-right"
      src="@/assets/media/app/arrow.svg"
      alt="arrow-right"
    />
    <button v-if="page === 2" class="button" @click="nextPage">ללמידה!</button>
    <img
      class="fallen-astro"
      src="@/assets/media/howToExplode/fall-astroid.svg"
      alt="astroid-fall"
    />
  </div>
</template>

<script>
export default {
  name: "how-to-start",
  components: {},
  data() {
    return {
      page: 0,
      text: [
        "תחנת השיגור היא האחראית לחישוב קואורדינטות שבהן האסטרואיד נמצא בכל רגע נתון.",
        "תפקידכם הוא לכוון את משגר הפצצות לכיוון האסטרואיד לפי הקורדינאטות שקיבלתם מתחנת השיגור.",
        "עכשיו נלמד איך מכוונים את משגר הפצצות על פי קורדינאטות",
      ],
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
  top: 8rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: #fec91a;
  font-size: 4rem;
  text-align: center;
  z-index: 1;
}

.text {
  position: relative;
  top: 5rem;
  right: 50%;
  transform: translateX(50%);
  text-align: center;
  font-size: 2.3rem;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 3px 3px 5px black;
  position: relative;
  right: 17rem;
  top: 16rem;
}
.fallen-astro {
  height: 16rem;
  position: absolute;
  bottom: 17rem;
  right: -5rem;
}

.arrow-left {
  position: relative;
  right: 21rem;
  top: 5rem;
  rotate: 180deg;
  z-index: 1;
}
.arrow-right {
  position: relative;
  top: 5rem;
  right: 8rem;
  z-index: 1;
}
</style>
