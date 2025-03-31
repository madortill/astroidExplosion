<template>
    <div class="start-page">
        <p class="title">פיצוץ אסטרואידים</p>
        <img v-if="started === false" @click="start" class="bb8" src="/src/assets/media/opening/bb8.svg" alt="bb8">
        <first-animation id="animation" v-else></first-animation>
        <p class="microcopy">!בואו נמריא</p>
    </div>
</template>

<script>
import FirstAnimation from '@/components/FirstAnimation.vue';
export default {
    name: "start-page",
    components: {
        FirstAnimation,
    },
    data() {
        return {
            started: false,
        }
    },
    methods: {
        start() {
            this.started = true;
            setTimeout(() => {
                this.$emit("next-page");
            }, 1450);
        }
    }
}
</script>

<style scoped>
    .start-page {
        height: 100%;
        width: 100%;
    }

    .title {
        position: absolute;
        top: 10rem;
        right: 50%;
        transform: translateX(50%);
        font-family: "migdal";
        color: transparent;
        -webkit-text-stroke: 0.1rem #FEC91A;
        font-size: 3.5rem;
        text-align: center;
    }

    .bb8 {
        height: 15rem;
        rotate: 20deg;
        position: absolute;
        top: 25rem;
        right: 50%;
        transform: translateX(50%);
    }

    .microcopy {
        position: absolute;
        top: 39.5rem;
        right: 6.5rem;
        font-size: 1.2rem;
        rotate: -30deg;
        color: #FEC91A;
    }

    #animation {
        position: absolute;
        top: -10rem;
        right: 50%;
        transform: translateX(50%);
    }
</style>