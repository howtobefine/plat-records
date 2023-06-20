<template>
  <!-- banner -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax py-10"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1686751569347.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P45LfLKV3FGlcRGefBEX%2FtJlrKyfUFaIHIb2R5p5WX3K7G1a%2Bxh5asNViDR8dEM0qeMZYngXGFBR6Sband5shgjX5a8U5kMm3peuenpDAQ5W4wmwF9jL4E97aJKh83Qfp1flk70RmXyRzDaDeRZ3zIjNzEQsvvlbU%2FWBhMTSl6ybYWp0w4TeD%2B7eeJgAh8u0%2BhJT2952Yp1C6PYxpAQGf%2FRws2szR0LUcfeerQ63B%2F6L16hZyt7C0bU6nX2Qxh2B%2FjlwjJtCcyLbKUUIFNh5kyX9LUXndFGFs6IDKXLgW0Au9XDwgLBBBCfBmota%2FeoRtHrpFHWm%2FMFDgNGsQGtfOA%3D%3D);
        "
      >
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">CART</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">CART</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container" v-if="cart.carts?.length > 0">
    <CartBreadcrumb :parentBread="loadingBread" />
    <div class="row pb-5 pb-lg-9 gy-5">
      <div class="col-lg-7">
        <div class="card shadow-lg rounded-0 border-0 p-4">
          <router-link to="/products" class="link-dark text-decoration-none hvr-light mb-4 fs-6">
            <i class="bi bi-chevron-left me-2"></i>
            還有想要購買的東西嗎？
          </router-link>
          <div class="d-flex justify-content-between align-items-center pb-3">
            <h3 class="h5 mb-0">購物車品項</h3>
            <button
              type="button"
              class="btn btn-outline-danger rounded-pill px-4"
              @click="deleteItems()"
            >
              清空購物車
            </button>
          </div>
          <ul class="list-unstyled border-top">
            <li class="d-flex border-bottom py-3" v-for="cartItem in cart.carts" :key="cartItem.id">
              <div class="flex-shrink-0">
                <img :src="cartItem.product.imageUrl" :alt="cartItem.product.title" width="80" />
              </div>
              <div class="d-flex flex-column justify-content-between flex-grow-1 ms-3">
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="h6 mb-0">{{ cartItem.product.title }}</h4>
                  <i class="bi bi-x-lg cursor-pointer" @click="deleteItem(cartItem)"></i>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <p class="mb-0">NT$ {{ $filters.currency(cartItem.product.price) }}</p>
                  <div class="d-flex justify-content-between border">
                    <button
                      type="button"
                      class="border-0 bg-transparent ps-2 pe-2 py-1"
                      :disabled="cartItem.qty === 1"
                      @click="decreaseQty(cartItem)"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <input
                      type="number"
                      class="border-0 text-center"
                      min="1"
                      max="20"
                      v-model="cartItem.qty"
                      readonly
                    />
                    <button
                      type="button"
                      class="border-0 bg-transparent ps-1 pe-2 py-1"
                      :disabled="cartItem.qty === 20"
                      @click="addQty(cartItem)"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card shadow-lg rounded-0 border-0 p-4">
          <h3 class="h5 mb-0 pb-3 border-bottom">訂單資訊</h3>
          <div class="d-flex justify-content-between align-items-center pt-3 mb-3">
            <p class="mb-0">總盤數</p>
            <p class="mb-0">共 {{ totalQty }} 項</p>
          </div>
          <div class="d-flex justify-content-between align-items-center pb-3 border-bottom">
            <p class="mb-0">總計</p>
            <p class="mb-0">NT$ {{ $filters.currency(cart.final_total) }}</p>
          </div>
          <router-link to="/order" class="btn btn-danger mt-3">結帳去</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="text-center py-5 py-lg-9">
      <h4 class="fw-bold mb-5">目前購物車是空的喔！</h4>
      <router-link to="/products" class="btn btn-outline-danger rounded-pill px-5"
        >來去逛逛吧<i class="bi bi-skip-backward-fill ms-2"></i
      ></router-link>
    </div>
  </div>
</template>


<script>
import CartBreadcrumb from '@/components/CartBreadcrumb.vue'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      loadingBread: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'deleteItem', 'deleteItems', 'addQty', 'decreaseQty'])
  },
  components: {
    CartBreadcrumb
  },
  computed: {
    ...mapState(cartStore, ['cart', 'totalQty'])
  },
  mounted() {
    this.loadingBread = this.$route.name
    this.getCarts()
  }
}
</script>