<template>
  <div class="astroid-explosion">
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
    v-if="page > 0"
    @click="nextPage"
    class="astroid"
    :class="page === 2 ? 'animation' : ''"
    :src="astroidSrc"
    alt="astroid"
    />
    <p v-if="page===1" class="microcopy">לחצו עליי</p>
  </div>
</template>

<script>
export default {
  name: "astroid-explosion",
  components: {},
  data() {
    return {
      astroidSrc: './media/astroidExplostion/astroid-glow.svg',
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
      this.astroidSrc = './media/astroidExplostion/astroid.svg';
      setTimeout(() => {
        this.$emit("next-section");
      }, 2000);
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
}
.arrow-left {
  position: relative;
  right: 25rem;
  top: 4rem;
  rotate: 180deg;
}
.arrow-right {
  position: relative;
  bottom: 4rem;
  right: 5rem;
}

.text {
  position: relative;
  top: 5rem;
  right: 50%;
  transform: translateX(50%);
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
  position: relative;
  right: 50%;
  transform: translateX(50%);
  top: 4rem;
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
    top: 22rem;
  }
}

</style>
