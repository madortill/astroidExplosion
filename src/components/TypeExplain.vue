<template>
  <div class="type-explain">
    <div class="background">
      <p class="closeBtn">X</p>
      <p class="title">אסטרואיד בייבי</p>
      <img
        v-if="pic === 0"
        class="astroid"
        src="@/assets/media/astroidType/baby-astro1.svg"
        alt="img1"
      />
      <img
        v-if="pic === 1"
        class="astroid"
        src="@/assets/media/astroidType/baby-astro2.svg"
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
      <p class=text>אסטרואיד ממש קטן והורס רק שכונות מקומיות</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "type-explain",
  components: {},
  data() {
    return {
      pic: 0,
    };
  },
  methods: {
    changePic() {
        if (this.pic === 0) {
            this.pic = 1;
        } else {
            this.pic = 0;
        }
    }
  },
};
</script>

<style scoped>
.title {
  position: relative;
  top: -2rem;
  right: 50%;
  transform: translateX(50%);
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
  margin-top: -0.5rem;
  position: relative;
  top: -5rem;
}

.background {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 32rem;
  height: 50rem;
  background-image: url(src/assets/media/app/clear-div.svg);
  background-size: 100% 100%;
}

.closeBtn {
  position: relative;
  top: 2rem;
  right: 3.5rem;
}

.astroid {
  height: 20rem;
  position: relative;
  top: -5rem;
  right: 50%;
  transform: translateX(50%);
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
