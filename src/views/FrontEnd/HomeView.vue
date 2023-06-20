<template>
  <teleport to="title">｜首頁</teleport>
  <VueLoading
    :active="isLoading"
    :z-index="1060"
    :loader="'dots'"
    :color="'#CB4042'"
    :transition="'fade'"
  ></VueLoading>
  <!-- banner -->
  <div class="container-fluid">
    <div class="row position-relative">
      <swiper
        :slidesPerView="1"
        :centeredSlides="true"
        :effect="'fade'"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false
        }"
        :loop="true"
        :modules="modules"
        :pagination="{ clickable: true }"
        class="brightness-filter"
      >
        <swiper-slide>
          <img
            src="@/assets/image/banner1.jpg"
            alt="banner"
            class="d-block w-100 h-100 img-cover"
          />
          <div
            class="caption position-absolute top-50 end-0 translate-middle text-center text-md-end"
          >
            <h2 class="display-2 text-light fw-normal text-shadow">
              找「盤」？<br />
              來「盤」！
            </h2>
            <router-link
              to="products"
              class="btn btn-danger text-light rounded-pill fs-5 px-5 mt-3 hvr-grow font-space"
              >找盤去</router-link
            >
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="@/assets/image/banner2.jpg"
            alt="banner"
            class="d-block w-100 h-100 img-cover"
          />
          <div
            class="caption position-absolute top-50 end-0 translate-middle text-center text-md-end mx-n8"
          >
            <h2 class="display-2 text-light fw-normal text-shadow">
              盤不盤？<br />
              「盤」說了算！
            </h2>
            <router-link
              to="products"
              class="btn btn-danger text-light rounded-pill fs-5 px-5 mt-3 hvr-grow font-space"
              >找盤去</router-link
            >
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="@/assets/image/banner3.jpg"
            alt="banner"
            class="d-block w-100 h-100 img-cover"
          />
          <div
            class="caption position-absolute top-50 end-0 translate-middle text-center text-md-end mx-n5"
          >
            <h2 class="display-2 text-light fw-normal text-shadow">
              不管甚麼盤<br />
              「盤」都有！
            </h2>
            <router-link
              to="products"
              class="btn btn-danger text-light rounded-pill fs-5 px-5 mt-3 hvr-grow font-space"
              >找盤去</router-link
            >
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- articles -->
  <div class="container">
    <div data-aos="fade-up" class="row py-5 py-lg-9 px-4 g-4 g-lg-3">
      <h3 class="title-border-dark position-relative text-center pb-5 mb-0">話題內容</h3>
      <div class="col-md-6 col-lg-3" v-for="article in randomArticles" :key="article.id">
        <router-link :to="`article/${article.id}`" class="card border-0 text-decoration-none">
          <img :src="article.imageUrl" class="card-img-top" :alt="article.title" />
          <div class="card-body p-0 pt-3">
            <h4 class="mb-3 link-dark font-space fs-5 fw-bold">{{ article.title }}</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted text-truncate fw-lighter mb-0">
                {{ article.description }}
              </p>
            </div>
          </div>
          <div class="card-footer bg-transparent border-0 p-0 pt-2">
            <button type="button" class="btn btn-sm btn-outline-dark rounded-pill me-2">
              <i class="bi bi-bookmark-fill me-1"></i><span>{{ article.tag[0] }}</span>
            </button>
            <button type="button" class="btn btn-sm btn-outline-dark rounded-pill">
              <i class="bi bi-pencil-fill me-1"></i><span>{{ article.author }}</span>
            </button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- category -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1685400148732.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WpcWaGEGwtaS9zO6CyWlwrvsOyQIzQmfuR9nARn8u5KNnzAb7Irf5mPgti7eBslULBk%2FLj%2BLqU%2Bp56Yu31lVOadb%2F%2BczL2doSRKYP01SJpg38yMT0JTpfe4rQgoerAZTwVTWUbFlxUDQhScDyh5jZa9JFe5hS2vTGNiEzH56bQcldZp6oCVLxjaZoA6T6GQZWoX1Iy27fR%2FVMNN3JF8fORmJnHicNBj%2Biq6JcHSP26fTHAyLqPm9nyCIjlQc1lS1a%2Fv0UXnBrrjUael4nyVdTmBMfiSFbQcipsUVFPV2iQofhWg7ejifB3nmx8%2F3TwqdGZBxvcQk2aaHuckTvx7n9A%3D%3D);
        "
      >
        <h3
          class="title-border-light text-light position-relative text-center pb-5 mb-0 pt-5 pt-lg-9"
        >
          分類推薦
        </h3>
        <div data-aos="zoom-in" class="container overflow-hidden">
          <div class="row g-4 pb-5 pb-lg-9">
            <div class="col-6 col-md-4 col-lg-2 pt-3">
              <router-link
                :to="{ path: 'products', query: { category: '實驗音樂' } }"
                class="category-link card border-0 rounded-circle"
              >
                <img
                  src="@/assets/image/category1.jpg"
                  class="category-img img-fluid rounded-0 rounded-circle"
                  alt="實驗音樂"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center p-0">
                  <h4 class="card-title mb-0 text-light text-shadow font-space">實驗音樂</h4>
                </div>
              </router-link>
            </div>
            <div class="col-6 col-md-4 col-lg-2 pt-3">
              <router-link
                :to="{ path: 'products', query: { category: '迷幻搖滾' } }"
                class="category-link card border-0 rounded-circle"
              >
                <img
                  src="@/assets/image/category2.jpg"
                  class="category-img img-fluid rounded-0 rounded-circle"
                  alt="迷幻搖滾"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center p-0">
                  <h4 class="card-title mb-0 text-light text-shadow font-space">迷幻搖滾</h4>
                </div>
              </router-link>
            </div>
            <div class="col-6 col-md-4 col-lg-2 pt-3">
              <router-link
                :to="{ path: 'products', query: { category: '日本流行' } }"
                class="category-link card border-0 rounded-circle"
              >
                <img
                  src="@/assets/image/category3.jpg"
                  class="category-img img-fluid rounded-0 rounded-circle"
                  alt="日本流行"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center p-0">
                  <h4 class="card-title mb-0 text-light text-shadow font-space">日本流行</h4>
                </div>
              </router-link>
            </div>
            <div class="col-6 col-md-4 col-lg-2 pt-3">
              <router-link
                :to="{ path: 'products', query: { category: '瞪鞋搖滾' } }"
                class="category-link card border-0 rounded-circle"
              >
                <img
                  src="@/assets/image/category4.jpg"
                  class="category-img img-fluid rounded-0 rounded-circle"
                  alt="瞪鞋搖滾"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center p-0">
                  <h4 class="card-title mb-0 text-light text-shadow font-space">瞪鞋搖滾</h4>
                </div>
              </router-link>
            </div>
            <div class="col-6 col-md-4 col-lg-2 pt-3">
              <router-link
                :to="{ path: 'products', query: { category: '另類搖滾' } }"
                class="category-link card border-0 rounded-circle"
              >
                <img
                  src="@/assets/image/category5.jpg"
                  class="category-img img-fluid rounded-0 rounded-circle"
                  alt="另類搖滾"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center p-0">
                  <h4 class="card-title mb-0 text-light text-shadow font-space">另類搖滾</h4>
                </div>
              </router-link>
            </div>
            <div class="col-6 col-md-4 col-lg-2 pt-3">
              <router-link
                :to="{ path: 'products', query: { category: '台灣獨立' } }"
                class="category-link card border-0 rounded-circle"
              >
                <img
                  src="@/assets/image/category6.jpg"
                  class="category-img img-fluid rounded-0 rounded-circle"
                  alt="台灣獨立"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center p-0">
                  <h4 class="card-title mb-0 text-light text-shadow font-space">台灣獨立</h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- products -->
  <div class="container">
    <div class="row py-5 py-lg-9 px-4 g-4 g-lg-3">
      <h3 class="title-border-dark position-relative text-center pb-5 mb-0">精選盤</h3>
      <div class="col-md-6 col-lg-3" v-for="product in randomProducts" :key="product.id">
        <router-link
          :to="`product/${product.id}`"
          class="product-link card border-0 text-decoration-none"
        >
          <div class="position-relative">
            <img :src="product.imageUrl" :alt="product.title" class="img-fluid" />
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
            <h4 class="link-dark h5 fw-bold">{{ product.title }}</h4>
            <div>
              <p class="card-text text-muted mb-0">NT$ {{ $filters.currency(product.price) }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- featured -->
  <div class="container-fluid bg-secondary overflow-hidden">
    <div class="container">
      <h3 class="title-border-dark position-relative text-center pb-5 mt-9 mb-0">本月推薦</h3>
      <div
        data-aos="fade-right"
        class="row mt-3 mb-6"
        v-for="product in featuredProducts"
        :key="product.id"
      >
        <div class="col-md-6">
          <router-link :to="`/product/${product.id}`" class="product-link">
            <div class="position-relative">
              <img :src="product.imageUrl" :alt="product.title" class="img-fluid" />
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
          </router-link>
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="my-4 mb-lg-6 fw-bold">{{ product.title }}</h4>
          <p class="text-muted fw-lighter lh-lg" v-html="product.description"></p>
        </div>
      </div>
    </div>
  </div>
  <!-- parallax -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax py-8 py-lg-10"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1685412509804.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a0q6W8dYSGley4QLwQPlCkrFbRoJn3lfZ833UAMySb9ZBxV9Aos3td5Uk5g1q6aAobKl%2B8yRsqRaWR0R3knYJGztch6rBl3501CFC7fie2ZdHtFBK9TdzkW2x6UMzmoG0glvDgnJua5jnyBOmvsB4NhkJDCY6m2WySOuaC%2BDZYj3qpqEZFAigAnHf2Uf2e7moPFvd1cohfiTAsQX2PXluDBAJvP6fVOJAdES%2BZ%2FwqwRf7RUt2N2nkqhx3ptUvbCMPxw7XPbxd5QI0j3Rp%2FPxAEWP5jz8zxb%2BdPCLl38gNiu22RcG5a5Pxj%2Fh9%2B0irO0mFP9XOQt680CxQicjOpOaTw%3D%3D);
        "
      ></div>
    </div>
  </div>
</template>


<script>
const { VITE_API, VITE_PATH } = import.meta.env
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import cartStore from '@/stores/cartStore.js'
import favoriteStore from '@/stores/favoriteStore.js'
import { mapState, mapActions } from 'pinia'
import { Toast } from '@/utils/toast.js'
export default {
  data() {
    return {
      title: '',
      products: [],
      randomProducts: [],
      featuredProducts: [],
      articles: [],
      randomArticles: [],
      isLoading: '',
      modules: [EffectFade, Autoplay, Pagination]
    }
  },
  methods: {
    getAllProducts() {
      const url = `${VITE_API}api/${VITE_PATH}/products/all`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products
          this.getRandomProducts()
          this.getFeaturedProducts()
          this.isLoading = false
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    getRandomProducts() {
      const productsCopy = [...this.products]

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * productsCopy.length)
        const randomProduct = productsCopy.splice(randomIndex, 1)[0]
        this.randomProducts.push(randomProduct)
      }
    },
    getFeaturedProducts() {
      const productsCopy = [...this.products] // 複製原始的 products 陣列

      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * productsCopy.length) // 隨機取得索引值
        const randomProduct = productsCopy.splice(randomIndex, 1)[0] // 從複製的陣列中刪除並取得隨機物件
        this.featuredProducts.push(randomProduct) // 將隨機物件加入到 randomProducts 陣列
      }
    },
    getArticles() {
      const url = `${VITE_API}api/${VITE_PATH}/articles`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles
          this.getRandomArticles()
          this.isLoading = false
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    getRandomArticles() {
      const articlesCopy = [...this.articles]

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * articlesCopy.length)
        const randomArticle = articlesCopy.splice(randomIndex, 1)[0]
        this.randomArticles.push(randomArticle)
      }
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(favoriteStore, ['toggleFavorite', 'isFavorite', 'removeFavorite'])
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    ...mapState(cartStore, ['loadingItem']),
    ...mapState(favoriteStore, ['myFavoriteList'])
  },
  watch: {
    myFavoriteList: {
      handler() {
        localStorage.setItem('myFavoriteList', JSON.stringify('myFavoriteList'))
      }
    },
    deep: true
  },
  mounted() {
    this.getAllProducts()
    this.getArticles()
  }
}
</script>

<style lang="scss">
</style>
