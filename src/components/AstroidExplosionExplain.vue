<template>
  <div class="astroid-explosion-explain">
    <p v-if="page<2" class="title">פיצוץ אסטרואידים</p>
    <p v-if="page<2" class="text">{{ text[page] }}</p>
    <img
    @click="page++"
    v-if="page === 0"
    class="arrow-left"
    src="@/assets/media/app/arrow.svg"
    alt="arrow-left"
    />
    <img
    @click="page--"
    v-else-if="page === 1"
    class="arrow-right"
    src="@/assets/media/app/arrow.svg"
    alt="arrow-right"
    />
    <img v-if="page<2" class="yoda" src="/src/assets/media/app/yoda.svg" alt="yoda" />
    <img
    v-if="page === 1"
    @click="nextPage"
    class="astroid"
    src="/src/assets/media/astroidExplostion/astroid-glow.svg"
    alt="astroid"
    />
    <img
    v-if="page === 2"
    @click="nextPage"
    class="astroid animation"
    src="/src/assets/media/astroidExplostion/astroid.svg"
    alt="astroid"
    />
    <p v-if="page===1" class="microcopy">לחצו עליי</p>
    <div class="map" @click="toMap">
      <img class="map-icon" src="/src/assets/media/app/map-lightSaber.svg" alt="map-icon">
      <p class="map-text">מפת הלומדה</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "astroid-explosion-explain",
  components: {},
  data() {
    return {
      text: [
        "שיעור פיצוץ אסטרואיד ידוע בחשיבותו בגלל הסכנה היומיומית הנשקפת לכדור הארץ בלעדיו.",
        "עשרות אלפי אסטרואידים נעים ברגע זה לכיוון הכוכב שלנו, ועליכן לדעת כיצד למנוע מהם להגיע אליו.",
      ],
      page: 0,
    };
  },
  methods: {
    nextPage() {
      this.page++;
      setTimeout(() => {
        this.$emit("next-page");
      }, 2000);
    },
    toMap() {
      this.$emit("to-map");
    }
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  top: 8rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: #fec91a;
  font-size: 4rem;
  text-align: center;
}
.arrow-left {
  position: absolute;
  left: 5rem;
  top: 34rem;
  rotate: 180deg;
}
.arrow-right {
  position: absolute;
  top: 34rem;
  right: 5rem;
}

.text {
  position: absolute;
  top: 18rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 28rem;
  font-size: 2.3rem;
}
.yoda {
  height: 12rem;
  position: absolute;
  left: 0.7rem;
  bottom: 0.7rem;
}

.astroid {
  height: 12rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 35rem;
}

.microcopy {
  position: absolute;
  top: 45rem;
  right: 8rem;
  font-size: 1.5rem;
  rotate: -22deg;
}

.animation {
  animation: astroid-grow 2s forwards;
}

@keyframes astroid-grow {
  from {
    height: 12rem;
    top: 35rem;
  } 
  to {
    height: 26rem;
    top: 23rem;
  }
}

.map {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.map-icon {
  height: 4rem;
}

.map-text {
  font-size: 1.1rem;
  position: absolute;
  top: 3rem;
  right: 0.1rem;
  width: 8rem;
}
</style>
