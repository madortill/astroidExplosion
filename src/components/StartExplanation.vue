<template>
    <div class="start-explanation">
        <div class="bubble"> 
            <p>{{ text }}</p>
        </div>
        <img class="yoda" src="/src/assets/media/app/yoda.svg" alt="yoda">
    </div>
</template>

<script>
export default {
    name: "start-explanation",
    components: {
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .bubble {
        height: 23rem;
        width: 23rem;
        position: absolute;
        background-image: url(/src/assets/media/opening/speech-bubble-open.svg);
        background-size: 100% 100%;
        right: 50%;
        top: 1rem;
        transform: translateX(50%);
    }

    .yoda {
        height: 18rem;
        position: absolute;
        right: 50%;
        bottom: 1rem;
        transform: translateX(50%);
    }
</style>