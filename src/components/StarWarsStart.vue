<template>
  <div class="star-wars-start">
    <section class="intro">לפני המון שנים בגלקסיה רחוקה רחוקה...</section>

    <p class="logo">פיצוץ <br> אסטרואידים</p>

    <!-- Change the text to your liking -->
    <div id="board">
      <div id="content">
        <p id="title">Episode I</p>
        <p id="subtitle">לומדת פיצוץ אסטרואידים</p>
        <br />
        <!-- And make it cheesy ! -->
        <p>
          בלומדה זו אתם, אסטרונאוטים צעירים ומבטיחים, הולכים ללמוד על הדבר החשוב
          ביותר לכדור הארץ. בסוף לומדה זו אתם תוכלו להציל את כדור הארץ מהאיום
          הגדול ביותר עליו, האסטרואידים. אנחנו בטוחים שתוכלו לעמוד במשימה
          ובשליחות זו. יחד ננצח!
        </p>
      </div>
    </div>
    <button class="button" v-if="buttonShow" @click="nextPage">בואו נתחיל!</button>
  </div>
</template>

<script>
export default {
  name: "star-wars-start",
  components: {},
  data() {
      return {
        buttonShow: false,
    };
},
mounted() {
    setTimeout(() => {
      this.buttonShow = true;
  }, 29000);
},
  methods: {
    nextPage() {
        this.$emit("next-page");
    }
  },
};
</script>

<style scoped>
.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 6rem;
}
body {
  margin: 0;
  background-color: black;
}

.star {
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: white;
}

/* Set the animation, color, size and hide the text */
.intro {
  position: relative;
  top: 25rem;
  right: 1rem;
  z-index: 1;
  animation: intro 3s ease-out 0.5s;
  color: rgb(75, 213, 238);
  font-weight: 400;
  font-size: 3rem;
  opacity: 0;
}

@keyframes intro {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Set the animation & hide the logo */
.logo {
  font-family: "migdal";
  color: transparent;
  -webkit-text-stroke: 0.1rem #fec91a;
  font-size: 5rem;
  text-align: center;
  position: relative;
  top: 20rem;
  right: 0.5rem;
  z-index: 1;
  margin: auto;
  animation: logo 7s ease-out 4s;
  opacity: 0;
}

.logo svg {
  width: inherit;
}

/* Scale the logo down and maintain it centered */
@keyframes logo {
  0% {
    font-size: 5.5rem;
    opacity: 1;
  }
  100% {
    font-size: 1rem;
    opacity: 0;
  }
}

p {
  color: #fec91a;
}

/* Set the font, lean the board, position it */
#board {
  transform: perspective(300px) rotateX(25deg);
  transform-origin: 50% 100%;
  text-align: justify;
  position: absolute;
  margin-left: -9em;
  font-weight: bold;
  overflow: hidden;
  font-size: 4rem;
  height: 50em;
  width: 32rem;
  bottom: 0;
  right: 0.1rem;
}

#board:after {
  position: absolute;
  content: " ";
  bottom: 60%;
  left: 0;
  right: 0;
  top: 0;
}

/* Set the scrolling animation and position it */
#content {
  animation: scroll 85s linear 7s;
  position: absolute;
  top: 100%;
}

#title,
#subtitle {
  text-align: center;
}

@keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -170%;
  }
}
</style>
