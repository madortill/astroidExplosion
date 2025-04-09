<template>
  <div class="end-page">
    <p class="title">הכוח איתך!</p>
    <p class="text">סיימתם ללמוד על פיצוץ אסטרואידים ועכשיו גם אתם יכולים להציל את הגלקסיה</p>
    <button class="button" @click="restart">בא לי ללמוד מחדש!</button>
    <img class="lightSaber" src="@/assets/media/finalExar/lightSaber.svg" alt="lightSaber">
    <div class="bubble">אני מעניק לכם את חרב האור שלכם כי הפכתם לג’דיי אמיתי</div>
    <img class="yoda" src="@/assets/media/app/yoda.svg" alt="yoda">
  </div>
</template>

<script>
export default {
name: "end-page",
components: {},
data() {

},
methods: {
    restart() {
        this.$emit("restart");
    }
},
}
</script>

<style scoped>
.end-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.title {
  position: relative;
  top: 5rem;
  font-family: "migdal";
  color: #fec91a;
  font-size: 4.2rem;
  text-align: center;
  z-index: 1;
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
  top: 1rem;
}

.text {
  font-size: 2.6rem;
  text-align: center;
  margin-top: -0.05rem;
  position: relative;
  top: 2rem;
  width: 30rem;
}

.bubble {
    background-image: url(/src/assets/media/finalExar/speech-bubble.svg);
    background-size: 100% 100%;
    font-size: 1.7rem;
    text-align: center;
    width: 18rem;
    height: 12rem;
    padding-top: 2rem;
    top: 3.5rem;
    position: relative;
}

.lightSaber {
    width: 23rem;
    position: relative;
    top: 3rem;
}

.yoda {
    position: relative;
    width: 18rem;
    top: 1rem;
}
</style>

