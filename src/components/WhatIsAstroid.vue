<template>
  <div class="what-is-astroid">
    <p v-if="page === 0" class="title">מהו אסטרואיד?</p>
    <p v-if="page > 0" class="text">{{ text[page - 1] }}</p>
    <img
      @click="page++"
      v-if="page === 1"
      class="arrow-left"
      src="@/assets/media/app/arrow.svg"
      alt="arrow-left"
    />
    <img
      @click="page--"
      v-else-if="page === 2"
      class="arrow-right"
      src="@/assets/media/app/arrow.svg"
      alt="arrow-right"
    />
    <img
      v-if="page === 0"
      @click="nextPage"
      class="astroid"
      :class="animation === true ? 'aniamtion' : ''"
      src="@/assets/media/astroidExplostion/astroid.svg"
      alt="astroid"
    />
    <img
      v-if="page > 0"
      @click="page++"
      class="astroid-big"
      src="@/assets/media/astroidExplostion/astroid-blank.svg"
      alt="astroid"
    />
    <p v-if="page === 0" class="microcopy">לחצו עליי</p>
    <img
      class="arrow"
      v-if="page === 2"
      src="@/assets/media/astroidExplostion/arrow-small.svg"
      alt="arrow"
    />
    <p v-if="page === 2" class="arrow-text">בליטה מכוערת</p>
    <button v-if="page === 2" class="button" @click="nextSection">
      הבנתי!
    </button>
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
  name: "what-is-astroid",
  components: {},
  data() {
    return {
      text: [
        "אסטרואיד הוא יצור מרושע שמטרתו להשמיד את כדור הארץ ואנחנו בברוגז איתו, ממש.",
        "הוא נראה כמו כדור עגול כזה אבל לא חלק כי יש לו בליטות ממש מכוערות שנראות כמו חצ'קונים.",
      ],
      page: 0,
      animation: false,
    };
  },
  methods: {
    nextPage() {
      this.animation = true;
      setTimeout(() => {
        this.page++;
      }, 2000);
    },
    toMap() {
      this.$emit("to-map");
    },
    nextSection() {
      this.$emit("next-section");
    },
  },
};
</script>

<style scoped>
.what-is-astroid {
  height: 100%;
  width: 100%;
}
.title {
  position: absolute;
  top: 9rem;
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
  top: 40rem;
  rotate: 180deg;
  z-index: 1;
}
.arrow-right {
  position: absolute;
  top: 40rem;
  right: 5rem;
  z-index: 1;
}

.text {
  position: absolute;
  top: 24rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 25rem;
  font-size: 2.3rem;
  z-index: 1;
}
.astroid {
  height: 26rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 23rem;
  z-index: 1;
}
.astroid-big {
  height: 44rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 11rem;
}

.microcopy {
  position: absolute;
  top: 45rem;
  right: 4rem;
  font-size: 2rem;
  rotate: -22deg;
}

.aniamtion {
  animation: astroid-grow 2s forwards;
}

@keyframes astroid-grow {
  from {
    height: 26rem;
    top: 23rem;
  }
  to {
    height: 44rem;
    top: 11rem;
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

.arrow {
  position: absolute;
  top: 6.4rem;
  left: 6rem;
}

.arrow-text {
  font-size: 1.8rem;
  position: absolute;
  top: 2.3rem;
  left: 0.2rem;
  width: 11rem;
  rotate: -20deg;
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
  bottom: 7rem;
}
</style>
