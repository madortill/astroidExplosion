<template>
    <div class="opening">
        <start-page v-if="page===1" @next-page="toAnimation"></start-page>
        <start-animation v-else-if="page===2"></start-animation>
        <start-explanation v-else></start-explanation>
    </div>
</template>

<script>
import StartPage from "@/components/StartPage.vue"
import StartAnimation from "@/components/StartAnimation.vue"
import StartExplanation from "@/components/StartExplanation.vue"
export default {
    name: "opening",
    components: {
        StartPage,
        StartAnimation,
        StartExplanation,
    },
    data() {
        return {
            page: 3,
        }
    },
    methods: {
        toAnimation() {
            this.page++;
            setTimeout(() => {
                this.page++;
            }, 2900);
        }
    }
}
</script>

<style scoped>
    .opening {
       height: 100%;
       width: 100%;
    }
</style>