<template>
  <div class="type-game-end">
    <div class="background">
        <img
          class="logo"
          src="@/assets/media/astroidType/find-the-astroid-logo.svg"
          alt="logo"
        />
      <p class="title">כל הכבוד!</p>
      <p class="text">הצלחת לזהות אסטרואידים בתבונה! <br> עוד רגע תהפוך לג'דיי</p>
      <button class="button" @click="nextSection">המשך בלומדה!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "type-game-end",
  components: {},
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    nextSection() {
      this.$emit("next-section");
    },
  },
};
</script>

<style scoped>
.title {
  position: relative;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);
  font-family: "migdal";
  color: #fec91a;
  font-size: 4.3rem;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
  width: 30rem;
}

.logo {
  position: relative;
  top: 2rem;
  right: 50%;
  transform: translateX(50%);
  height: 9rem;
}

.text {
  font-size: 2.8rem;
  text-align: center;
  margin-top: -0.05rem;
  position: relative;
  top: -5rem;
  right: 50%;
  transform: translateX(50%);
  width: 30rem;
}

.background {
  position: relative;
  top: 8rem;
  left: -50%;
  transform: translateX(50%);
  width: 32rem;
  height: 50rem;
  padding-top: 4rem;
  background-image: url(@/assets/media/app/clear-div.svg);
  background-size: 100% 100%;
}

.button {
  background-color: #fec91a;
  font-family: "secolar";
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 3px 3px 5px black;
  position: relative;
  right: 50%;
  transform: translateX(50%);
  bottom: 5rem;
}
</style>
