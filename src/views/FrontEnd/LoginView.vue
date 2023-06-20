<template>
  <div class="container mt-5">
    <VueLoading :active="isLoading" :z-index="1060"></VueLoading>
    <form class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail">信箱</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            required
            autofocus
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword">密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="user.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="d-flex justify-content-between mt-5">
          <router-link to="/" class="btn btn-success">回前台首頁</router-link>
          <button class="btn btn-danger" type="button" @click="login">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from '@/utils/toast.js'
const { VITE_API } = import.meta.env

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    login() {
      this.isLoading = true
      const url = `${VITE_API}admin/signin`
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `howToken=${token};expires=${new Date(expired)};`
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.isLoading = false
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    }
  }
}
</script>