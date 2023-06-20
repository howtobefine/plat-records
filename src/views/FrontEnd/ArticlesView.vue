<template>
  <teleport to="title">｜文章列表</teleport>
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
            <li class="breadcrumb-item text-light active" aria-current="page">ARTICLES</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container">
    <div class="row py-5 py-lg-9 gy-4">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="mb-4 fw-bold">最新文章</h3>
        <div>
          <select class="form-select" v-model="sortedItem">
            <option selected>排序</option>
            <option value="日期近到遠">日期近到遠</option>
            <option value="日期遠到近">日期遠到近</option>
          </select>
        </div>
      </div>
      <div class="col-md-6 col-lg-4" v-for="article in sortedArticles" :key="article.id">
        <router-link
          :to="`article/${article.id}`"
          class="card text-decoration-none"
          v-if="article.isPublic"
        >
          <img :src="article.imageUrl" class="card-img-top" :alt="article.title" />
          <div class="card-body">
            <h5 class="card-subtitle mb-2 text-muted h6">
              <small>
                <span class="me-2">{{ $filters.date(article.create_at) }}</span>
                <span class="me-1">{{ article.tag[0] }}</span></small
              >
            </h5>
            <h4 class="card-title link-dark mb-3">{{ article.title }}</h4>
            <p class="card-text link-dark text-truncate">
              {{ article.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env
import { Toast } from '@/utils/toast.js'
export default {
  data() {
    return {
      articles: [],
      sortedItem: '排序',
      isLoading: ''
    }
  },
  methods: {
    getArticles() {
      const url = `${VITE_API}api/${VITE_PATH}/articles`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles
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
  computed: {
    sortedArticles() {
      const copyArticle = [...this.articles]
      if (this.sortedItem === '日期遠到近') {
        return copyArticle.sort((a, b) => a.create_at - b.create_at)
      } else if (this.sortedItem === '日期近到遠') {
        return copyArticle.sort((a, b) => b.create_at - a.create_at)
      } else {
        return copyArticle
      }
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>