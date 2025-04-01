<template>
  <div class="type-map">
    <div v-if="!infoShow">
        <p class="title">סוגי אסטרואידים</p>
        <p class="microcopy">לחצו על האסטרואידים</p>
        <div id="baby" class="baby" @click="toAstro">
          <img class="astroid" :src="baby" alt="baby-astroid" />
          <p class="text">אסטרואיד בייבי</p>
        </div>
        <div id="teen" class="teen" @click="toAstro">
          <img class="astroid" :src="teen" alt="teen-astroid" />
          <p class="text">אסטרואיד נער מתבגר</p>
        </div>
        <div id="big" class="big" @click="toAstro">
          <img class="astroid" :src="big" alt="big-astroid" />
          <p class="text">אסטרואיד בוגר</p>
        </div>
        <button v-if="visitedAll===true" class="button" @click="nextSection">לתרגול!</button>
    </div>
    <div class="map" @click="toMap">
      <img
        class="map-icon"
        src="/src/assets/media/app/map-lightSaber.svg"
        alt="map-icon"
      />
      <p class="map-text">מפת הלומדה</p>
    </div>
    <type-explain v-if="infoShow" :currAstro="chosenAstro"></type-explain>
  </div>
</template>

<script>
import TypeExplain from "@/components/TypeExplain.vue";
export default {
  name: "type-map",
  components: {
    TypeExplain
  },
  data() {
    return {
      chosenAstro: "",
      infoShow: false,
      visitedAll: false,
      baby: "src/assets/media/astroidType/baby-astro1-glow.svg",
      teen: "src/assets/media/astroidType/teen-astro1-glow.svg",
      big: "src/assets/media/astroidType/big-astro1-glow.svg",
      visited: [],
    };
  },
  methods: {
    toMap() {
      this.$emit("to-map");
    },
    nextSection() {
        this.$emit("next-section");
    },
    toAstro(event) {
      this.chosenAstro = event.currentTarget.id;
      this.infoShow = true;
      if (!this.visited.includes(event.currentTarget.id)) {
        this.visited.push(event.currentTarget.id);
        switch (event.currentTarget.id) {
          case "baby":
            this.baby = "src/assets/media/astroidType/baby-astro1.svg";
            break;
          case "teen":
            this.teen = "src/assets/media/astroidType/teen-astro1.svg";
            break;
          case "big":
            this.big = "src/assets/media/astroidType/big-astro1.svg";
            break;
          default:
            break;
        }
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
  position: absolute;
  top: 7rem;
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
  margin-top: -0.5rem;
}

.microcopy {
  position: absolute;
  top: 22rem;
  left: 6rem;
  font-size: 1.5rem;
  width: 6rem;
  text-align: center;
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

.astroid {
  height: 15rem;
}

.baby {
  position: absolute;
  top: 22rem;
  right: 1rem;
}

.teen {
  position: absolute;
  top: 36rem;
  left: 1rem;
}

.big {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 2.4rem;
  box-shadow: 3px 3px 5px black;
  position: absolute;
  left: 4rem;
  bottom: 7rem;
}
</style>
