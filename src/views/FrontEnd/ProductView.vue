<template>
  <teleport to="title">｜{{ product.title }}</teleport>
  <VueLoading
    :active="isLoading"
    :z-index="1060"
    :loader="'dots'"
    :color="'#CB4042'"
    :transition="'fade'"
  ></VueLoading>
  <!-- banner -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax py-10"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1685814603836.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=j8tpFoLvA5M4ZqIlMRHPbPpRqTAdXaYLGN6%2Fsbhk%2FJgr2SsQ4JSXjP97NtsMG3Mju3nDWNy6ypJ8A1mMz%2FCvZU0kBnhv6qQ5%2FM9UySvFPLyaFkJmwuimqEvdN4ouNe66WdPzFHR13n8WjjmKos25gzr0cxemZDP0BAFDuSmCXdKGtFSXMLSQ9wW5nPAcJ6hWtNdf4NMXOcrCIYMsFfP%2BySGlwuin5ObkapeK1Sm%2B%2B4Iz4k%2F8tRKGVFef66QVahNO3%2BFXioebcroid65J9jyJjA0UNszFyOa7tmIZOKsxEJg1XVnWKbd%2FL%2FLPGoErP1AyWxechU1z0jxMWmyy3hACjw%3D%3D);
        "
      >
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">DETAIL</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products" class="text-decoration-none link-light hvr-light"
                >PRODUCTS</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">DETAIL</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container">
    <div class="row py-5 py-lg-9">
      <div class="col-1 d-none d-lg-block">
        <ul class="d-flex flex-column list-unstyled gap-3">
          <li
            v-for="(image, index) in images"
            :key="index"
            @click="switchImage(index)"
            class="opacity-75"
            :class="{ 'opacity-100': index === activeIndex }"
          >
            <img :src="image" :alt="product.title" class="img-fluid" />
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <img :src="images[activeIndex]" :alt="product.id" class="img-fluid" />
        <ul class="mobile-list list-unstyled mt-3 d-lg-none">
          <li
            v-for="(image, index) in images"
            :key="index"
            @click="switchImage(index)"
            class="opacity-75"
            :class="{ 'opacity-100': index === activeIndex }"
          >
            <img :src="image" :alt="product.title" class="w-100 img-fluid" />
          </li>
        </ul>
      </div>
      <div class="col-lg-5 d-flex flex-column justify-content-between mt-4 mt-lg-0">
        <div>
          <h3 class="h2">{{ product.title }}</h3>
          <span class="text-muted">{{ product.category }}</span>
          <p class="mt-4 h2 border-bottom pb-4">NT$ {{ $filters.currency(product.price) }}</p>
          <p class="pt-3 lh-lg" v-html="product.description"></p>
        </div>
        <div>
          <div class="d-flex gap-4 mb-4">
            <div class="flex-grow-1 border">
              <div class="d-flex justify-content-between">
                <button
                  type="button"
                  class="border-0 bg-transparent p-2 ps-3"
                  @click="qty--"
                  :disabled="qty === 1"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <input
                  type="number"
                  class="border-0 text-center w-100"
                  min="1"
                  max="20"
                  v-model.number="qty"
                  readonly
                />
                <button
                  type="button"
                  class="border-0 bg-transparent p-2 pe-3"
                  @click="qty++"
                  :disabled="qty === 20"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
            <div class="border d-flex align-items-center cursor-pointer hvr-grow">
              <i
                class="bi bi-heart-fill px-icon"
                v-if="isFavorite(product)"
                @click="toggleFavorite(product)"
              ></i>
              <i class="bi bi-heart px-icon" v-else @click="toggleFavorite(product)"></i>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-danger w-100 rounded-0"
            :disabled="product.id === loadingItem"
            @click="addToCart(product.id, this.qty)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <div class="pb-5 pb-lg-9">
      <h3 class="border-bottom pb-2">曲目</h3>
      <p class="lh-lg mb-0" v-html="product.content"></p>
    </div>
  </div>
  <!-- swiper -->
  <div class="container">
    <div class="pb-5 pb-lg-9">
      <h3 class="border-bottom pb-2">推薦商品</h3>
      <swiper
        :slidesPerView="1"
        :spaceBetween="48"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 24
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }"
        :modules="modules"
        class="h-100"
      >
        <swiper-slide v-for="product in filteredProductList" :key="product.id">
          <router-link
            :to="`/product/${product.id}`"
            class="product-link card border-0 text-decoration-none"
          >
            <div class="position-relative">
              <img :src="product.imageUrl" class="card-img-top img-fluid" :alt="product.title" />
              <div
                class="product-filter position-absolute translate-middle top-50 start-50 d-flex justify-content-end justify-content-lg-center align-items-end align-items-lg-center"
              >
                <div class="d-flex gap-lg-3">
                  <button
                    type="button"
                    class="btn btn-outline-info border-dark bg-light bg-opacity-75 border-icon hvr-grow mb-2 me-2 mb-lg-0 me-lg-0"
                  >
                    <i class="bi bi-heart text-dark"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-info border-dark bg-light bg-opacity-75 border-icon hvr-grow mb-2 me-2 mb-lg-0 me-lg-0"
                    @click.prevent="addToCart(product.id)"
                  >
                    <i class="bi bi-bag-fill text-dark"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body p-0 pt-3 text-center">
              <h4 class="link-dark h5">{{ product.title }}</h4>
              <div>
                <p class="card-text text-muted mb-0">NT$ {{ $filters.currency(product.price) }}</p>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="text-end mt-5">
        <router-link
          to="/products"
          class="link-dark text-decoration-none hvr-light hvr-grow d-inline-block"
        >
          <div class="fs-4">
            <span>回到產品列表</span>
            <i class="bi bi-skip-backward-fill ms-2"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import favoriteStore from '@/stores/favoriteStore'
import { mapState, mapActions } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { Toast } from '@/utils/toast.js'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      product: {},
      images: [],
      productList: [],
      filteredProductList: [],
      modules: [Autoplay],
      productId: '',
      category: '',
      qty: 1,
      activeIndex: 0,
      isLoading: ''
    }
  },
  methods: {
    ...mapActions(favoriteStore, ['toggleFavorite', 'isFavorite', 'removeFavorite']),
    getProduct(id) {
      const url = `${VITE_API}api/${VITE_PATH}/product/${id}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product
          this.images = res.data.product.imagesUrl
          this.category = res.data.product.category
          this.activeIndex = 0
          this.getProductsList(res.data.product.category)
          this.isLoading = false
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    getProductsList(category) {
      const url = `${VITE_API}api/${VITE_PATH}/products/?category=${category}`
      this.$http
        .get(url)
        .then((res) => {
          this.productList = res.data.products
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    switchImage(index) {
      this.activeIndex = index
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapState(cartStore, ['loadingItem'])
  },
  watch: {
    id(newId) {
      this.productId = newId
      if (this.$route.name === 'product') {
        this.getProduct(this.productId)
      }
    },
    productList(newList) {
      this.filteredProductList = newList.filter((product) => product.id !== this.productId)
    }
  },
  mounted() {
    this.productId = this.$route.params.id
    this.getProduct(this.productId)
  }
}
</script>

<style lang="scss">
.mobile-list {
  display: grid;
  grid-template-columns: 16.8% 16.8% 16.8% 16.8% 16.8%;
  grid-column-gap: 4%;
}
</style>