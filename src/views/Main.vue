<template>
    <main id="main-content" class="d-flex flex-row justify-content-around">
    <!--   left-side   -->
    <LeftContent />
    <!--   right-side    -->
    <RightContent />
  </main>
</template>

<style>
#main-content {
  width: 90%;
  height: 100%;
  margin: auto auto;
}
</style>

<script>
import LeftContent from '../components/LeftContent.vue'
import RightContent from '../components/RightContent.vue'

export default {
    name: 'Main',
    components: {
        LeftContent,
        RightContent,
    },
}
</script>