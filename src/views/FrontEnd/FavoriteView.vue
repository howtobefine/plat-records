<template>
  <teleport to="title">｜收藏列表</teleport>
  <!-- banner -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax py-10"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1687124534091.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BJLc1KkDxu0A2qTVebnZzbtclal6UCMpFgHRxfzD0NuEQNWCuMPpzwNYPuk6rmNpY765ueR%2B2GHjjPAefXryG%2FY5kRjiJdwFbK2b8F42kylGcWkZKlcKikGf2u5I4jaHrAXCsLamcHBMXTYC0xtGDYlZF43IJKMOkmceMFJepNOo7z7TIngHbGMPmAPQOiryNVP9gbIf%2FibuvzNIPPuwUOwtW914%2BYljBbvCg6y28JukYE%2FxBkIfEftLMB6KGYhVVsJwEOGIZlnaNohUabWdFgOGVCaJHzsZMYJ5r2GfryHrKBkkPycDS%2FngctQlTNwr0equcJZMjpV%2B5Dl9H%2B3r1g%3D%3D);
        "
      >
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">FAVORITE</h2>
        <nav aria-label="breadcrumb$">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">FAVORITE</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container" v-if="myFavoriteList.length > 0">
    <div class="row py-5 py-lg-9 gy-4">
      <h3 class="mb-4 fw-bold">收藏列表</h3>
      <div
        class="col-6 col-md-4 col-lg-3"
        v-for="(favoriteItem, index) in myFavoriteList"
        :key="favoriteItem.id"
      >
        <router-link
          :to="`product/${favoriteItem.id}`"
          class="product-link card border-0 text-decoration-none"
        >
          <div class="position-relative">
            <img
              :src="favoriteItem.imageUrl"
              class="card-img-top img-fluid"
              :alt="favoriteItem.title"
            />
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
                    @click.prevent="removeFavorite(index)"
                  ></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-info border-dark bg-light bg-opacity-75 border-icon hvr-grow mb-2 me-2 mb-lg-0 me-lg-0"
                  @click.prevent="addToCart(favoriteItem.id)"
                >
                  <i class="bi bi-bag-fill text-dark"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="card-body p-0 pt-3 text-center">
            <h4 class="link-dark h5">{{ favoriteItem.title }}</h4>
            <div>
              <p class="card-text text-muted mb-0">
                NT$ {{ $filters.currency(favoriteItem.price) }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="text-end mt-5">
        <router-link
          to="/products"
          class="link-dark text-decoration-none hvr-light hvr-grow d-inline-block"
        >
          <div class="fs-4">
            <span>查看更多產品</span>
            <i class="bi bi-skip-backward-fill ms-2"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="text-center py-5 py-lg-9">
      <h4 class="fw-bold mb-5">目前收藏列表是空的喔！</h4>
      <router-link to="/products" class="btn btn-outline-danger rounded-pill px-5"
        >來去逛逛吧<i class="bi bi-skip-backward-fill ms-2"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import favoriteStore from '@/stores/favoriteStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(favoriteStore, ['removeFavorite'])
  },
  computed: {
    ...mapState(favoriteStore, ['myFavoriteList'])
  },
  watch: {
    myFavoriteList: {
      handler() {
        // localStorage只接受字串
        localStorage.setItem('myFavoriteList', JSON.stringify(this.myFavoriteList))
      },
      deep: true
    }
  },
  mounted() {}
}
</script>