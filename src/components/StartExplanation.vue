<template>
    <div class="start-explanation">
        <div class="bubble"> 
            <p class="text">{{ text[page] }}</p>
            <img @click="page++" v-if="page==0" class="arrow-left" src="/src/assets/media/app/arrow.svg" alt="arrow-left">
            <button class="button">בואו נצא למסע!</button>
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
            text: [
            `היי אני יודה!  אתם יכולים להודות לי שהצלתי אתכם מהאסטרואיד, תודה רבה!`,
            "שמעתי שגם אתם רוצים ללמוד לפוצץ אסטרואידים. הצטרפו אליי למסע ובסופו תהפכו לג’דיי אמיתי!"
            ],
            page: 0,
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
        top: 7rem;
        transform: translateX(50%);
    }

    .yoda {
        height: 20rem;
        position: absolute;
        right: 50%;
        bottom: 1rem;
        transform: translateX(50%);
    }

    .arrow-left {
        position: absolute;
        left: 5rem;
        bottom: 7rem;
        rotate: 180deg;
    }

    .text {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        width: 20rem;
        font-size: 1.8rem;
    }

    .button {
        background-color: #FEC91A;
        font-family: "secolar";
        border: none;
        border-radius: 0.1rem;
    }
</style>