<template>
  <FrontNavbar />
  <router-view></router-view>
  <FrontFooter />
  <div class="position-fixed end-0 bottom-0 pe-4 pb-4 hvr-grow z-index-max" v-if="isShow">
    <button type="button" class="btn btn-dark bg-danger border-0" @click="scrollToTop">
      <i class="bi bi-arrow-up-short fs-5"></i>
    </button>
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  data() {
    return {
      isShow: false
    }
  },
  components: {
    FrontNavbar,
    FrontFooter
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      const rootElement = document.documentElement
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
      if (rootElement.scrollTop / scrollTotal > 0.15) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  }
}
</script>