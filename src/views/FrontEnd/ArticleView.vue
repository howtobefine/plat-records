<template>
  <teleport to="title">｜{{ article.title }}</teleport>
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
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1686661983477.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ij8nOkHY61HplrU4oLc3domY%2FtrM4%2F%2FxNjAJtktJEJ1eLeSc9gNheSCcXXi3Nsa5p4AZm3MQ0uR%2FomTZbr4Rq0JcSNYni5Wv5KyLLHuQp%2Bi5JELM%2F%2FqGqEACSSuDZzyo8mDwsFOsQx6jziagu8xBFVpWZScdj4upFFHuLlaiUpsqNSW%2BxxrQ1BLoBHsioHnEnLwH0DIrsIZBZ8AQ5fkCjrKI27fYECPd7fPc2P198OWq59Oiv1fiI3YoWEWYpjGxO4r6Do723id3dFZbAN3pRfGIIm0o%2Byjo%2FzsAX%2BKbB%2FkyroIFnJXas5Drg2ShXl%2FnLjpKdJg0QJATNQNHg%2FOxNg%3D%3D);
        "
      >
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">ARTICLES</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link to="/articles" class="text-decoration-none link-light hvr-light"
                >ARTICLES</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">DETAIL</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row flex-row-reverse justify-content-end py-5 py-lg-9 gap-xl-6">
      <div class="col-md-9 col-lg-10 col-xl-8">
        <p class="mb-2">
          {{ $filters.date(article.create_at) }}‧<span>{{ tag }}</span>
        </p>
        <h3 class="fw-bold h2 mb-4">{{ article.title }}</h3>
        <img :src="article.imageUrl" :alt="article.title" class="img-fluid" />
        <p v-html="article.content" class="mt-4"></p>
      </div>
      <div class="col-md-3 col-lg-2 col-xl-2">
        <div class="d-flex flex-md-column mt-5 mt-md-0">
          <img :src="profile" :alt="article.author" class="img-fluid rounded-circle w-profile" />
          <div class="ms-4 ms-md-0 align-self-center">
            <h4 class="h5 mt-4 mb-3">作者 ∕ {{ article.author }}</h4>
            <p class="text-muted mb-1">發表：{{ $filters.date(article.create_at) }}</p>
            <p class="text-muted mb-0">分類：{{ tag }}</p>
          </div>
        </div>
      </div>
      <div class="text-end mt-5">
        <router-link
          to="/articles"
          class="link-dark text-decoration-none hvr-light hvr-grow d-inline-block"
        >
          <div class="fs-4">
            <span>回到文章列表</span>
            <i class="bi bi-skip-backward-fill ms-2"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.w-profile {
  width: 100%;
  @media (max-width: 768px) {
    width: 40%;
  }
}
</style>

<script>
const { VITE_API, VITE_PATH } = import.meta.env
import { Toast } from '@/utils/toast.js'
export default {
  data() {
    return {
      article: {},
      articleId: '',
      tag: '',
      profile: '',
      isLoading: ''
    }
  },
  methods: {
    getArticle(id) {
      const url = `${VITE_API}api/${VITE_PATH}/article/${id}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.article = res.data.article
          this.tag = res.data.article.tag[0]
          this.profile = res.data.article.tag[1]
          this.isLoading = false
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    }
  },
  mounted() {
    this.articleId = this.$route.params.id
    this.getArticle(this.articleId)
  }
}
</script>