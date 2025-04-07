<template>
  <div class="how-to-coordinates">
    <div class="container-map">
      <div class="arrow-container">
        <p class="text-arrow">משבצת קורדינאטות (1,2)</p>
        <img
          class="arrow"
          src="@/assets/media/howToExplode/arrow-yellow.svg"
          alt="arrow"
        />
      </div>
      <img
        class="map"
        src="@/assets/media/howToExplode/coordinateds-map.svg"
        alt="map"
      />
    </div>
    <div class="container-explanation">
      <div class="bubble">
        <p class="text">{{ text[page] }}</p>
        <img
          @click="page++"
          v-if="page < 4"
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
      </div>
      <img class="yoda" src="@/assets/media/app/yoda.svg" alt="yoda" />
    </div>
    <button v-if="page === 4" class="button" @click="nextSection">לתרגול!</button>
  </div>
</template>

<script>
export default {
  name: "how-to-coordinates",
  components: {},
  data() {
    return {
      page: 0,
      text: [
        "את משגר הפצצות אנחנו נכוון על פי הקורדינאטות שניתנות לנו מהחללית",
        "את הקורדינאטות אנחנו נמצא על פי רשת הקורדינאטות אותה נראה מהמשגר",
        "נכוון את המשגר למשבצת שהקורדינאטות שלה נמצאות בפינה השמאלית התחתונה שלה",
        "אני ממליץ לכם לכוון את המשגר למרכז המשבצת על מנת להיות מדויקים",
        "כדי לפגוע באסטרואיד כל פעם חשוב להקשיב לכוח ולזכור שהוא תמיד אתכם",
      ],
    };
  },
  methods: {
    nextSection() {
      this.$emit("next-section");
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 2rem;
  text-align: center;
  align-self: flex-start;
  position: relative;
  top: 1rem;
  width: 27rem;
  right: 0.6rem;
}
.arrow-left {
  position: relative;
  right: 24rem;
  bottom: 1rem;
  rotate: 180deg;
}
.arrow-right {
  position: relative;
  bottom: 0.5rem;
  right: 2rem;
}
.bubble {
  height: 20rem;
  width: 28rem;
  position: relative;
  background-image: url(/src/assets/media/howToExplode/speech-bubble-howTo.svg);
  background-size: 100% 100%;
  right: 1rem;
  top: 0rem;
}

.yoda {
  height: 11rem;
  position: relative;
  right: 22rem;
}

.container-explanation {
  position: relative;
  top: 6rem;
}
.map {
  width: 30rem;
}

.container-map {
  position: relative;
  top: 7rem;
  right: 1rem;
  width: 35rem;
}

.text-arrow {
  font-size: 1.5rem;
  color: #fec91a;
  margin-bottom: -0.1rem;
}

.arrow {
  height: 6rem;
}

.arrow-container {
  width: 17rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: -5rem;
  right: 8.5rem;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 3px px 5px black;
  position: relative;
  right: 8rem;
  bottom: 7rem;
}
</style>
