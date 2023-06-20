<template>
  <teleport to="title">｜唱片專區</teleport>
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
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">PRODUCTS</h2>
        <nav aria-label="breadcrumb$">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">PRODUCTS</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- title -->
  <div class="container">
    <div class="row pt-5 pb-4 pb-lg-5 pt-lg-9">
      <!-- mobile -->
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle d-md-none"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          產品類別
        </button>
        <ul class="dropdown-menu pt-0" aria-labelledby="dropdownMenuButton">
          <li>
            <router-link
              class="dropdown-item"
              :class="{ active: title === '所有品項' }"
              to="products"
              @click="getAllProducts()"
              >所有品項</router-link
            >
          </li>
          <li><hr class="dropdown-divider my-0" /></li>
          <li>
            <router-link
              class="dropdown-item"
              :class="{ active: title === '台灣獨立' }"
              :to="{ path: 'products', query: { category: '台灣獨立' } }"
              @click="getCategory('台灣獨立')"
              >台灣獨立</router-link
            >
          </li>
          <li>
            <router-link
              class="dropdown-item"
              :class="{ active: title === '日本流行' }"
              :to="{ path: 'products', query: { category: '日本流行' } }"
              @click="getCategory('日本流行')"
              >日本流行</router-link
            >
          </li>
          <li>
            <router-link
              class="dropdown-item"
              :class="{ active: title === '迷幻搖滾' }"
              :to="{ path: 'products', query: { category: '迷幻搖滾' } }"
              @click="getCategory('迷幻搖滾')"
              >迷幻搖滾</router-link
            >
          </li>
          <li>
            <router-link
              class="dropdown-item"
              :class="{ active: title === '另類搖滾' }"
              :to="{ path: 'products', query: { category: '另類搖滾' } }"
              @click="getCategory('另類搖滾')"
              >另類搖滾</router-link
            >
          </li>
          <li>
            <router-link
              class="dropdown-item"
              :class="{ active: title === '瞪鞋搖滾' }"
              :to="{ path: 'products', query: { category: '瞪鞋搖滾' } }"
              @click="getCategory('瞪鞋搖滾')"
              >瞪鞋搖滾</router-link
            >
          </li>
          <li>
            <router-link
              class="dropdown-item"
              :class="{ active: title === '實驗音樂' }"
              :to="{ path: 'products', query: { category: '實驗音樂' } }"
              @click="getCategory('實驗音樂')"
              >實驗音樂</router-link
            >
          </li>
        </ul>
      </div>
      <!-- desktop -->
      <ul
        class="nav justify-content-center gap-lg-4 border-top border-bottom border-dark d-none d-md-flex"
      >
        <li class="nav-item">
          <router-link
            to="products"
            class="nav-link link-dark hvr-light text-decoration-none p-md-3"
            @click="getAllProducts()"
            :class="{ 'text-muted': title === '所有品項' }"
            >所有品項</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ path: 'products', query: { category: '台灣獨立' } }"
            class="nav-link link-dark hvr-light text-decoration-none p-md-3"
            :class="{ 'text-muted': title === '台灣獨立' }"
            @click="getCategory('台灣獨立')"
            >台灣獨立</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ path: 'products', query: { category: '日本流行' } }"
            class="nav-link link-dark hvr-light text-decoration-none p-md-3"
            :class="{ 'text-muted': title === '日本流行' }"
            @click="getCategory('日本流行')"
            >日本流行</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ path: 'products', query: { category: '迷幻搖滾' } }"
            class="nav-link link-dark hvr-light text-decoration-none p-md-3"
            :class="{ 'text-muted': title === '迷幻搖滾' }"
            @click="getCategory('迷幻搖滾')"
            >迷幻搖滾</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ path: 'products', query: { category: '另類搖滾' } }"
            class="nav-link link-dark hvr-light text-decoration-none p-md-3"
            :class="{ 'text-muted': title === '另類搖滾' }"
            @click="getCategory('另類搖滾')"
            >另類搖滾</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ path: 'products', query: { category: '瞪鞋搖滾' } }"
            class="nav-link link-dark hvr-light text-decoration-none p-md-3"
            :class="{ 'text-muted': title === '瞪鞋搖滾' }"
            @click="getCategory('瞪鞋搖滾')"
            >瞪鞋搖滾</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ path: 'products', query: { category: '實驗音樂' } }"
            class="nav-link link-dark hvr-light text-decoration-none p-md-3"
            :class="{ 'text-muted': title === '實驗音樂' }"
            @click="getCategory('實驗音樂')"
            >實驗音樂</router-link
          >
        </li>
      </ul>
      <div class="d-flex mt-4 mb-5">
        <router-link
          to="/products"
          class="nav-link hvr-light text-decoration-none"
          @click="getAllProducts()"
          >產品首頁</router-link
        >
        <div v-if="this.title !== '所有品項'">
          <span class="mx-3">›</span><span>{{ title }}</span>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="mb-0 fw-bold">{{ title }}</h3>
        <div>
          <select class="form-select" v-model="sortedItem" aria-label="Products select">
            <option selected>排序</option>
            <option value="價錢低到高">價錢低到高</option>
            <option value="價錢高到低">價錢高到低</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container">
    <div class="row gy-5 pb-5 pb-lg-9">
      <div class="col-6 col-md-4 col-lg-2" v-for="product in sortedProducts" :key="product.id">
        <router-link
          :to="`product/${product.id}`"
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
                  class="btn btn-outline-info border-dark bg-light bg-opacity-75 border-icon hvr-grow mb-2 me-2 mb-lg-0 me-lg-0 p-0"
                >
                  <i
                    class="bi bi-heart-fill text-dark px-icon"
                    v-if="isFavorite(product)"
                    @click.prevent="toggleFavorite(product)"
                  ></i>
                  <i
                    class="bi bi-heart text-dark px-icon"
                    v-else
                    @click.prevent="toggleFavorite(product)"
                  ></i>
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
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import favoriteStore from '@/stores/favoriteStore.js'
import { mapState, mapActions } from 'pinia'
import { Toast } from '@/utils/toast.js'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      products: [],
      title: '',
      sortedItem: '排序',
      category: this.$route.query.category,
      isLoading: ''
    }
  },
  components: {},
  methods: {
    getAllProducts() {
      const url = `${VITE_API}api/${VITE_PATH}/products/all`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products
          this.title = '所有品項'
          this.isLoading = false
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    getCategory(category) {
      const url = `${VITE_API}api/${VITE_PATH}/products/?category=${category}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.title = res.data.products[0].category
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(favoriteStore, ['removeFavorite', 'toggleFavorite', 'isFavorite'])
  },
  computed: {
    sortedProducts() {
      const productsCopy = [...this.products]
      if (this.sortedItem === '價錢低到高') {
        return productsCopy.sort((a, b) => a.price - b.price)
      } else if (this.sortedItem === '價錢高到低') {
        return productsCopy.sort((a, b) => b.price - a.price)
      } else {
        return productsCopy
      }
    },
    ...mapState(favoriteStore, ['myFavoriteList']),
    ...mapState(cartStore, ['loadingItem'])
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
    this.category ? this.getCategory(this.category) : this.getAllProducts()
  }
}
</script>