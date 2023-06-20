<template>
  <teleport to="title">｜付款</teleport>
  <!-- banner -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax py-10"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1686751569347.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P45LfLKV3FGlcRGefBEX%2FtJlrKyfUFaIHIb2R5p5WX3K7G1a%2Bxh5asNViDR8dEM0qeMZYngXGFBR6Sband5shgjX5a8U5kMm3peuenpDAQ5W4wmwF9jL4E97aJKh83Qfp1flk70RmXyRzDaDeRZ3zIjNzEQsvvlbU%2FWBhMTSl6ybYWp0w4TeD%2B7eeJgAh8u0%2BhJT2952Yp1C6PYxpAQGf%2FRws2szR0LUcfeerQ63B%2F6L16hZyt7C0bU6nX2Qxh2B%2FjlwjJtCcyLbKUUIFNh5kyX9LUXndFGFs6IDKXLgW0Au9XDwgLBBBCfBmota%2FeoRtHrpFHWm%2FMFDgNGsQGtfOA%3D%3D);
        "
      >
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">PAYMENT</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">PAYMENT</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container">
    <CartBreadcrumb :parentBread="loadingBread" />
    <div class="row pb-5 pb-lg-9 gy-5">
      <div class="col-lg-6">
        <div class="card shadow-lg rounded-0 border-0 p-4">
          <div class="d-flex justify-content-between align-items-center pb-3">
            <h3 class="h5 mb-0 d-flex align-items-center">
              訂單品項<span class="ms-2 text-danger fs-6" v-if="!orderInfo.is_paid">未付款</span>
              <span v-else class="text-success ms-2 fs-6">已付款</span>
            </h3>
            <p class="fs-5 mb-0 d-flex align-items-center">
              總金額：<span class="text-danger fs-6"
                >NT$ {{ $filters.currency(orderInfo.total) }}</span
              >
            </p>
          </div>
          <ul class="list-unstyled border-top">
            <li
              class="d-flex border-bottom py-3"
              v-for="product in orderProducts"
              :key="product.id"
            >
              <div class="flex-shrink-0">
                <img :src="product.product.imageUrl" :alt="product.product.title" width="80" />
              </div>
              <div class="d-flex flex-column justify-content-between flex-grow-1 ms-3">
                <div class="d-flex align-items-center">
                  <h4 class="h6 mb-0">{{ product.product.title }}</h4>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <p class="mb-0">
                    NT$ {{ $filters.currency(product.product.price) }} x
                    <span>{{ product.qty }}</span>
                  </p>
                  <p class="mb-0">NT$ {{ $filters.currency(product.total) }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card shadow-lg rounded-0 border-0 p-4">
          <h3 class="h5 mb-0 border-bottom pb-3">訂單資訊</h3>
          <ul class="list-unstyled">
            <li class="py-2 border-bottom">
              <p class="mb-0">
                訂單金額：&emsp;<span>NT$ {{ $filters.currency(orderInfo.total) }}</span>
              </p>
            </li>
            <li class="py-2 border-bottom">
              <p class="mb-0">
                訂單編號：&emsp;<span>{{ orderInfo.id }}</span>
              </p>
            </li>
            <li class="py-2 border-bottom">
              <p class="mb-0">
                下單時間：&emsp;<span>{{ $filters.date(orderInfo.create_at) }}</span>
              </p>
            </li>
            <li class="py-2 border-bottom">
              <p class="mb-0">
                寄送地址：&emsp;<span>{{ orderUser.address }}</span>
              </p>
            </li>
            <li class="py-2 border-bottom">
              <p class="mb-0">
                顧客姓名：&emsp;<span>{{ orderUser.name }}</span>
              </p>
            </li>
            <li class="py-2 border-bottom">
              <p class="mb-0">
                連絡電話：&emsp;<span>{{ orderUser.tel }}</span>
              </p>
            </li>
            <li class="py-2 border-bottom">
              <p class="mb-0">
                電子信箱：&emsp;<span>{{ orderUser.email }}</span>
              </p>
            </li>
            <li class="py-2 border-bottom">
              <p class="mb-0">
                客戶備註：&emsp;<span>{{ orderInfo.message }}</span>
              </p>
            </li>
          </ul>
          <button type="button" class="btn btn-danger w-100" @click="pay()">確認付款</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env
import CartBreadcrumb from '@/components/CartBreadcrumb.vue'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'
import { Toast } from '@/utils/toast.js'
export default {
  data() {
    return {
      loadingBread: '',
      orderId: '',
      orderInfo: {},
      orderUser: {},
      orderProducts: []
    }
  },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.id
      const url = `${VITE_API}api/${VITE_PATH}/order/${this.orderId}`
      this.$http
        .get(url)
        .then((res) => {
          this.orderInfo = res.data.order
          this.orderUser = res.data.order.user
          this.orderProducts = res.data.order.products
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    pay() {
      this.orderId = this.$route.params.id
      const url = `${VITE_API}api/${VITE_PATH}/pay/${this.orderId}`
      this.$http
        .post(url)
        .then((res) => {
          this.getOrder()
          this.getCarts()
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.$router.push(`/completed/${this.orderId}`)
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    ...mapActions(cartStore, ['getCarts'])
  },
  components: {
    CartBreadcrumb
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted() {
    this.loadingBread = this.$route.name
    this.getOrder()
  }
}
</script>