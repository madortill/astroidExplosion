<template>
  <div class="map-dir">
    <p class="title">מפת הנושאים</p>
    <p class="microcopy">לחצו על הנושא אליו תרצו לחזור</p>
    <div
      v-for="(star, index) in stars"
      :key="index"
      :class="star"
      class="star-container"
      @click="checkStar"
    >
      <img :src="`./media/map/star${index}.svg`" alt="star" class="star" :id="index" :class="currStep >= index ? 'glow' : ''"/>
      <p class="text" :id="index">{{ text[index] }}</p>
    </div>
    <button class="button" @click="closeMap">חזרה ללומדה!</button>
    <div class="bubble" :style="{ top: topPosition[currStar] + 'rem', right: rightPosition[currStar] + 'rem' }" v-if="wrongStar">לפה עוד לא הגעתם</div>
  </div>
</template>

<script>
export default {
  name: "map-dir",
  components: {},
  props: ["currStep"],
  data() {
    return {
      stars: ["explode", "whatIs", "type", "howTo"],
      text: [
        "פיצוץ אסטרואידים",
        "מהו אסטרואיד",
        "סוגי אסטרואידים",
        "איך מפוצצים אסטרואיד",
      ],
      currStar: 0,
      wrongStar: false,
      topPosition: [11, 18, 32, 40],
      rightPosition: [4, 18, 2, 18], 
    };
  },
  methods: {
    checkStar(event) {
        if (this.currStep < event.target.id) {
            this.currStar = event.target.id;
            this.wrongStar = true;
            setTimeout(() => {
                this.wrongStar = false;
            }, 1500);
        } else {
            this.$emit("to-page", event.target.id);
            this.closeMap();
        }
    },
    closeMap() {
        this.$emit("close-map");
    }
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
  font-size: 1.5rem;
  text-align: center;
  position: relative;
}

.microcopy {
  position: relative;
  top: 1rem;
  right: 17rem;
  font-size: 1.5rem;
  width: 10rem;
  text-align: center;
}

.star {
  height: 11rem;
  display: flex;
  align-items: center;
}

.explode {
  bottom: 0rem;
  right: 2rem;
}

.whatIs {
  bottom: 9rem;
  right: 17rem;
}

.howTo {
  bottom: 19rem;
  right: 17rem;
}

.type {
  bottom: 11rem;
  right: 1rem;
}

.glow {
    border-radius: 6rem; 
    box-shadow: 0.2rem 0.2rem 1.5rem 0.2rem rgb(255, 255, 255);
}


.star-container {
  position: relative;
  width: 13rem;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 3px 3px 5px black;
  position: relative;
  right: 3rem;
  bottom: 27rem;
}

.bubble {
    background-image: url(/src/assets/media/map/speech-bubble.svg);
    height: 7rem;
    width: 9rem;
    position: absolute;
    background-size: 100% 100%;
    top: 10rem;
    font-size: 1.4rem;
    text-align: center;
    padding-top: 2rem;
}
</style>
