<template>
  <div class="start-explanation">
    <div class="bubble">
      <p class="text">{{ text[page] }}</p>
      <img
        @click="page++"
        v-if="page === 0"
        class="arrow-left"
        src="/src/assets/media/app/arrow.svg"
        alt="arrow-left"
      />
      <img
        @click="page--"
        v-else-if="page === 1"
        class="arrow-right"
        src="/src/assets/media/app/arrow.svg"
        alt="arrow-right"
      />
      <button v-if="page === 1" class="button" @click="nextPage">
        בואו נצא למסע!
      </button>
    </div>
    <img class="yoda" src="/src/assets/media/app/yoda.svg" alt="yoda" />
  </div>
</template>

<script>
export default {
  name: "start-explanation",
  components: {},
  data() {
    return {
      text: [
        `היי אני יודה!  אתם יכולים להודות לי שהצלתי אתכם מהאסטרואיד, תודה רבה!`,
        "שמעתי שגם אתם רוצים ללמוד לפוצץ אסטרואידים. הצטרפו אליי למסע ובסופו תהפכו לג’דיי אמיתי!",
      ],
      page: 0,
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
.bubble {
  height: 30rem;
  width: 30rem;
  position: relative;
  background-image: url(/src/assets/media/opening/speech-bubble-open.svg);
  background-size: 100% 100%;
  right: 50%;
  top: 8rem;
  transform: translateX(50%);
}

.yoda {
  height: 25rem;
  position: relative;
  right: 50%;
  top: 10rem;
  transform: translateX(50%);
}

.arrow-left {
  position: relative;
  right: 25rem;
  top: 5rem;
  rotate: 180deg;
}
.arrow-right {
  position: relative;
  right: 4rem;
  top: 1rem;
}

.text {
  position: relative;
  top: 2rem;
  right: 50%;
  transform: translateX(50%);
  text-align: center;
  width: 25rem;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 9rem;
}
</style>
