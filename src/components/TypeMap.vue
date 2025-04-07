<template>
  <div class="type-map">
    <div v-if="!infoShow">
      <p class="title">סוגי אסטרואידים</p>
      <p class="microcopy">לחצו על האסטרואידים</p>
      <div v-for="(astroid, index) in astroids" :key="index" :id="index" :class="astroid" @click="toAstro">
        <img :src="src[index]" alt="astroid" class="astroid">
        <p class="text">{{ text[index] }}</p>
      </div>
      <button v-if="visitedAll === true" class="button" @click="nextPage">
        לתרגול!
      </button>
    </div>
    <type-explain
      v-if="infoShow"
      :currAstro="chosenAstro"
      @close-explain="infoShow = false"
    ></type-explain>
  </div>
</template>

<script>
import TypeExplain from "@/components/TypeExplain.vue";
export default {
  name: "type-map",
  components: {
    TypeExplain,
  },
  data() {
    return {
      chosenAstro: "",
      infoShow: false,
      visitedAll: false,
      astroids: ["baby", "teen", "big"],
      text: ["אסטרואיד בייבי", "אסטרואיד נער מתבגר", "אסטרואיד בוגר"],
      src: ["/media/astroidType/baby-astro1-glow.svg", "/media/astroidType/teen-astro1-glow.svg", "/media/astroidType/big-astro1-glow.svg"],
      visited: [],
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page");
    },
    toAstro(event) {
      this.chosenAstro = event.currentTarget.id;
      this.infoShow = true;
      if (!this.visited.includes(event.currentTarget.classList)) {
        this.visited.push(event.currentTarget.classList);
        this.src[event.currentTarget.id] = `/media/astroidType/${event.currentTarget.classList}-astro1.svg`;
      }
      if (this.visited.length > 2) {
        this.visitedAll = true;
      }
    },
  },
};
</script>

<style scoped>
.title {
  position: relative;
  top: 4rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: #fec91a;
  font-size: 4rem;
  text-align: center;
}

.text {
  font-size: 1.4rem;
  text-align: center;
  position: relative;
}

.microcopy {
  position: relative;
  top: 3rem;
  right: 19rem;
  font-size: 1.5rem;
  width: 6rem;
  text-align: center;
}

.astroid {
  height: 15rem;
  display: flex;
}

.baby {
  position: relative;
  bottom: 4rem;
  right: 1rem;
  width: 13rem;
}

.teen {
  position: relative;
  bottom: 11rem;
  right: 17rem;
  width: 13rem;
}

.big {
  position: relative;
  bottom: 18rem;
  right: 1rem;
  width: 13rem;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 2.4rem;
  box-shadow: 3px 3px 5px black;
  position: relative;
  right: 18rem;
  bottom: 27rem;
}
</style>
