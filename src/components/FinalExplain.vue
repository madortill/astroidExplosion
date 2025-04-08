<template>
  <div class="final-explain">
    <div class="background">
      <p class="title">הוראות</p>
      <p class="text">כוונו את המשגר על ידי לחיצה על המשבצת בעלת הקורדינאטות הנכונות כפי שלמדתם על מנת לפגוע באסטרואיד ולהשמיד אותו</p>
      <button class="button" @click="nextPage">אני מוכן!</button>
      <img class="yoda" src="@/assets/media/app/yoda.svg" alt="yoda" />
    </div>
  </div>
</template>

<script>
export default {
  name: "final-explain",
  components: {},
  data() {
    return {
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
  top: -1rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: #fec91a;
  font-size: 4.5rem;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
  width: 20rem;
}

.text {
  font-size: 2.6rem;
  text-align: center;
  margin-top: -0.05rem;
  position: relative;
  top: -4rem;
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
  bottom: 13rem;
}

.yoda {
  height: 11rem;
  position: relative;
  right: 10rem;
}
</style>
