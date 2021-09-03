<template>
    <main id="main-content">
    <!--   left-side   -->
    <LeftContent />
    <!--   right-side    -->
    <RightContent />
  </main>
</template>

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