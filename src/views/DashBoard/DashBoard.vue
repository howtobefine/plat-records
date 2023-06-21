<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">盤</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/admin/products" class="nav-link">產品</router-link>
          <router-link to="/admin/orders" class="nav-link">訂單</router-link>
          <router-link to="/admin/articles" class="nav-link">貼文</router-link>
          <router-link to="/admin/upload" class="nav-link">圖片上傳</router-link>
          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </div>
        <div class="navbar-nav ms-auto"></div>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <RouterView v-if="status" />
  </div>
</template>

<script>
import { Toast } from '@/utils/toast.js'
const { VITE_API } = import.meta.env
export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    checkLogin() {
      const url = `${VITE_API}api/user/check`
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)howToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `${token}`
      this.$http
        .post(url)
        .then(() => {
          this.status = true
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
          this.$router.push('/')
        })
    },
    logout() {
      const url = `${VITE_API}logout`
      this.$http
        .post(url)
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.$router.push('/login')
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
    this.checkLogin()
  }
}
</script>