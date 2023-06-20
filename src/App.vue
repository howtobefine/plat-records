<template>
  <RouterView />
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      offset: 120,
      duration: 600,
      once: true
    })
  }
}
</script>



<style lang="scss">
@import './assets/all.scss';
</style>
