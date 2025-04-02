<template>
  <div class="type-explain">
    <div class="background">
      <p class="closeBtn" @click="close">X</p>
      <p class="title">{{ titleData[astroNum] }}</p>
      <img
        v-if="pic === 0"
        class="astroid"
        :src="pic1Data[astroNum]"
        alt="img1"
      />
      <img
        v-if="pic === 1"
        class="astroid"
        :src="pic2Data[astroNum]"
        alt="img2"
      />
      <img
        @click="changePic"
        class="arrow-left"
        src="/src/assets/media/app/arrow.svg"
        alt="arrow-left"
      />
      <img
        @click="changePic"
        class="arrow-right"
        src="/src/assets/media/app/arrow.svg"
        alt="arrow-right"
      />
      <p class="text">{{ textData[astroNum] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "type-explain",
  components: {},
  props: ["currAstro"],
  data() {
    return {
      pic: 0,
      astroNum: 0,
      titleData: ["אסטרואיד בייבי", "אסטרואיד נער מתבגר", "אסטרואיד בוגר"],
      textData: [
        "אסטרואיד ממש קטן והורס רק שכונות מקומיות",
        "אסטרואיד שהוא די חרא כי הוא בכוונה מנסה להפציץ מקומות שהוא לא אוהב",
        "אסטרואיד ממש גדול שיכול להשמיד את כל כדור הארץ",
      ],
      pic1Data: [
        "src/assets/media/astroidType/baby-astro1.svg",
        "src/assets/media/astroidType/teen-astro1.svg",
        "src/assets/media/astroidType/big-astro1.svg",
      ],
      pic2Data: [
        "src/assets/media/astroidType/baby-astro2.svg",
        "src/assets/media/astroidType/teen-astro2.svg",
        "src/assets/media/astroidType/big-astro2.svg",
      ],
    };
  },
  methods: {
    changePic() {
      if (this.pic === 0) {
        this.pic = 1;
      } else {
        this.pic = 0;
      }
    },
    close() {
      this.$emit("close-explain");
    },
  },
  mounted() {
    switch (this.currAstro) {
      case "baby":
        this.astroNum = 0;
        break;
      case "teen":
        this.astroNum = 1;
        break;
      case "big":
        this.astroNum = 2;
        break;

      default:
        break;
    }
  },
};
</script>

<style scoped>
.title {
  position: relative;
  top: -3rem;
  font-family: "migdal";
  color: #fec91a;
  font-size: 4rem;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
  width: 20rem;
}

.text {
  font-size: 2.3rem;
  text-align: center;
  margin-top: -0.05rem;
  position: relative;
  top: -6rem;
}

.background {
  position: relative;
  top: 8rem;
  left: -50%;
  transform: translateX(50%);
  width: 32rem;
  height: 50rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  background-image: url(src/assets/media/app/clear-div.svg);
  background-size: 100% 100%;
}

.closeBtn {
  position: relative;
  top: -5rem;
  right: -2rem;
}

.astroid {
  height: 20rem;
  position: relative;
  top: -6rem;
}
.arrow-left {
  position: absolute;
  left: 3rem;
  bottom: 23rem;
  rotate: 180deg;
}
.arrow-right {
  position: absolute;
  bottom: 23rem;
  right: 3rem;
}
</style>
