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
    nextSection() {
      this.$emit("next-section");
    },
  },
};
</script>

<style scoped>
.title {
  position: relative;
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
  position: relative;
  top: 24rem;
  right: 50%;
  transform: translateX(50%);
  text-align: center;
  width: 25rem;
  font-size: 2.3rem;
  z-index: 1;
}
.astroid {
  height: 26rem;
  position: relative;
  right: 50%;
  transform: translateX(50%);
  top: 10rem;
  z-index: 1;
}
.astroid-big {
  height: 44rem;
  position: relative;
  right: 50%;
  transform: translateX(50%);
  top: -7rem;
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
    top: 10rem;
  }
  to {
    height: 44rem;
    top: -2rem;
  }
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

.arrow {
  position: relative;
  bottom: 56rem;
  right: 22rem;
}

.arrow-text {
  font-size: 1.8rem;
  position: relative;
  bottom: 67rem;
  right: 20rem;
  width: 11rem;
  rotate: -20deg;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 2px 2px 5px black;
  position: relative;
  right: 50%;
  transform: translateX(50%);
  bottom: 32rem;
}
</style>
