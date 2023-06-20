<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{ colornav: isColor }">
    <div class="container">
      <router-link to="/" class="navbar-brand iconFont fs-3 d-none d-lg-block"
        ><h1 class="h3 mb-0">Plat Records</h1></router-link
      >
      <div>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon hvr-light"><i class="bi bi-filter-left fs-1"></i></span>
        </button>
        <div
          class="offcanvas offcanvas-start bg-dark"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <router-link to="/" class="text-decoration-none" @click="closeNavbar"
              ><h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">
                Plat Records
              </h5></router-link
            >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 gap-5 gap-lg-2 me-lg-4">
              <li class="nav-item">
                <router-link
                  to="/about"
                  class="nav-link link-light px-lg-3 hvr-grow"
                  @click="closeNavbar"
                  ><span class="me-3 d-lg-none">—</span>關於我們</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ path: '/products' }"
                  class="nav-link link-light px-lg-3 hvr-grow"
                  @click="closeNavbar"
                  ><span class="me-3 d-lg-none">—</span>唱片專區</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/articles"
                  class="nav-link link-light px-lg-3 hvr-grow"
                  @click="closeNavbar"
                  ><span class="me-3 d-lg-none">—</span>文章列表</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <router-link to="/favorite" class="nav-link link-light px-2 me-2 hvr-shrink hvr-light"
            ><i class="bi bi-heart-fill fs-5"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
              v-if="myFavoriteList.length > 0"
            >
              {{ myFavoriteList.length }}
            </span>
          </router-link>
        </div>

        <router-link
          to="/cart"
          class="position-relative nav-link link-light px-2 hvr-shrink hvr-light"
          ><i class="bi bi-bag-fill fs-5"></i
          ><span
            class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
            v-if="cart.carts?.length > 0"
          >
            {{ cart.carts?.length }}
          </span></router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { Offcanvas } from 'bootstrap'
import cartStore from '@/stores/cartStore.js'
import favoriteStore from '@/stores/favoriteStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      isColor: false,
      offCanvas: ''
    }
  },
  methods: {
    handleScroll() {
      this.isColor = window.scrollY > 70
    },
    closeNavbar() {
      this.offCanvas.hide()
    },
    ...mapActions(cartStore, ['getCarts']),
    ...mapActions(favoriteStore, ['toggleFavorite', 'removeFavorite', 'isFavorite'])
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(favoriteStore, ['myFavoriteList'])
  },
  watch: {
    // 因為是陣列，所以用深層監聽
    myFavoriteList: {
      handler() {
        // localStorage只接受字串
        localStorage.setItem('myFavoriteList', JSON.stringify(this.myFavoriteList))
      },
      deep: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.offCanvas = new Offcanvas('#offcanvasNavbar')
    this.getCarts()
  }
}
</script>

<style lang="scss">
.colornav {
  transition: all 0.3s;
  background: #1c1c1c;
}
.dropdown-toggle::before {
  display: none !important;
}
</style>