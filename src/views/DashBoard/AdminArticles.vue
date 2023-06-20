<template>
  <teleport to="title">｜後臺管理</teleport>
  <VueLoading
    :active="isLoading"
    :z-index="1060"
    :loader="'dots'"
    :color="'#CB4042'"
    :transition="'fade'"
  ></VueLoading>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal('create')">
        建立新的頁面
      </button>
    </div>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th style="width: 200px">標題</th>
        <th style="width: 200px">作者</th>
        <th>描述</th>
        <th style="width: 100px">建立時間</th>
        <th style="width: 100px">是否公開</th>
        <th style="width: 120px">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.id">
        <td>{{ article.title }}</td>
        <td>{{ article.author }}</td>
        <td>{{ article.description }}</td>
        <td>{{ $filters.date(article.create_at) }}</td>
        <td>
          <span v-if="article.isPublic">已上架</span>
          <span v-else>未上架</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              type="button"
              @click="getArticle(article.id)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              type="button"
              @click="openModal('del', article)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationView :pagination="pagination" @emit-pages="getArticles" />
  <ArticleModal :article="tempArticle" is-new="isNew" @update-article="updateArticle" />
  <DelModal :item="tempArticle" @del-emit="delArticle" />
</template>

<script>
import { Modal } from 'bootstrap'
import PaginationView from '@/components/PaginationView.vue'
import DelModal from '@/components/DelModal.vue'
import ArticleModal from '@/components/ArticleModal.vue'
import { Toast } from '@/utils/toast.js'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      isNew: false,
      tempArticle: {},
      pagination: {},
      articleModal: '',
      delModal: '',
      currentPage: 1
    }
  },
  methods: {
    getArticles(page = 1) {
      this.currentPage = page
      const url = `${VITE_API}api/${VITE_PATH}/admin/articles/?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    getArticle(id) {
      const url = `${VITE_API}api/${VITE_PATH}/admin/article/${id}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.openModal('edit', res.data.article)
            this.isNew = false
          }
        })
        .catch((err) => {
          this.isLoading = false
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    openModal(status, article) {
      if (status === 'create') {
        this.articleModal.show()
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: []
        }
        this.isNew = true
      } else if (status === 'edit') {
        this.articleModal.show()
        this.tempArticle = { ...article }
        this.isNew = false
      } else if (status === 'del') {
        this.delModal.show()
        this.tempArticle = { ...article }
      }
    },
    updateArticle(article) {
      this.tempArticle = article
      let url = `${VITE_API}api/${VITE_PATH}/admin/article`
      let method = 'post'
      this.isLoading = true
      if (!this.isNew) {
        url = `${VITE_API}api/${VITE_PATH}/admin/article/${this.tempArticle.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.tempArticle })
        .then((res) => {
          this.isLoading = false
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.articleModal.hide()
          this.getArticles(this.currentPage)
        })
        .catch((err) => {
          this.isLoading = false
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    delArticle() {
      const url = `${VITE_API}api/${VITE_PATH}/admin/article/${this.tempArticle.id}`
      this.isLoading = true
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.delModal.hide()
          this.getArticles(this.currentPage)
        })
        .catch((err) => {
          this.isLoading = false
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    }
  },
  components: {
    PaginationView,
    DelModal,
    ArticleModal
  },
  mounted() {
    this.getArticles()
    this.articleModal = new Modal('#articleModal')
    this.delModal = new Modal('#delModal')
  }
}
</script>