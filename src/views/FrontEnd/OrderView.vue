<template>
  <teleport to="title">｜訂單</teleport>
  <!-- banner -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax py-10"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1686751569347.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P45LfLKV3FGlcRGefBEX%2FtJlrKyfUFaIHIb2R5p5WX3K7G1a%2Bxh5asNViDR8dEM0qeMZYngXGFBR6Sband5shgjX5a8U5kMm3peuenpDAQ5W4wmwF9jL4E97aJKh83Qfp1flk70RmXyRzDaDeRZ3zIjNzEQsvvlbU%2FWBhMTSl6ybYWp0w4TeD%2B7eeJgAh8u0%2BhJT2952Yp1C6PYxpAQGf%2FRws2szR0LUcfeerQ63B%2F6L16hZyt7C0bU6nX2Qxh2B%2FjlwjJtCcyLbKUUIFNh5kyX9LUXndFGFs6IDKXLgW0Au9XDwgLBBBCfBmota%2FeoRtHrpFHWm%2FMFDgNGsQGtfOA%3D%3D);
        "
      >
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">ORDER</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">ORDER</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container">
    <CartBreadcrumb :parentBread="loadingBread" />
    <div class="row pb-5 pb-lg-9 gy-5">
      <div class="col-lg-7">
        <div class="card shadow-lg rounded-0 border-0 p-4">
          <router-link to="/cart" class="link-dark text-decoration-none hvr-light mb-4 fs-6">
            <i class="bi bi-chevron-left me-2"></i>
            回到購物車
          </router-link>
          <div class="d-flex justify-content-between align-items-center pb-3">
            <h3 class="h5 mb-0 d-flex align-items-center">
              訂單品項<span class="ms-2 fs-6">{{ totalQty }}</span>
            </h3>
            <p class="h5 mb-0 d-flex align-items-center">
              總金額：<span class="text-danger fs-6"
                >NT$ {{ $filters.currency(cart.final_total) }}</span
              >
            </p>
          </div>
          <ul class="list-unstyled border-top">
            <li class="d-flex border-bottom py-3" v-for="cartItem in cart.carts" :key="cartItem.id">
              <div class="flex-shrink-0">
                <img :src="cartItem.product.imageUrl" :alt="cartItem.product.title" width="80" />
              </div>
              <div class="d-flex flex-column justify-content-between flex-grow-1 ms-3">
                <div class="d-flex align-items-center">
                  <h4 class="h6 mb-0">{{ cartItem.product.title }}</h4>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <p class="mb-0">
                    NT$ {{ $filters.currency(cartItem.product.price) }} x
                    <span>{{ cartItem.qty }}</span>
                  </p>
                  <p class="mb-0">NT$ {{ $filters.currency(cartItem.final_total) }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card shadow-lg rounded-0 border-0 p-4">
          <h3 class="h5 mb-0 pb-3 border-bottom">寄送資訊</h3>
          <v-form ref="form" v-slot="{ errors }" class="pt-3" @submit="createOrder()">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field
                id="email"
                name="email"
                label="信箱"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field
                id="name"
                name="name"
                label="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['name'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></v-field>
              <error-message name="name" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field
                id="tel"
                name="tel"
                label="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['tel'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
              ></v-field>
              <error-message name="tel" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field
                id="address"
                name="address"
                label="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['address'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></v-field>
              <error-message name="address" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div>
              <button type="submit" class="btn btn-danger link-light w-100">提交訂單</button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartBreadcrumb from '@/components/CartBreadcrumb.vue'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, loadLocaleFromURL } from '@vee-validate/i18n'
import { Toast } from '@/utils/toast.js'
const { VITE_API, VITE_PATH } = import.meta.env
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// 設定預設語系
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.0.2/dist/locale/zh_TW.json')
configure({
  generateMessage: localize('zh_TW'), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderId: '',
      loadingBread: ''
    }
  },
  components: {
    VField: Field,
    VForm: Form,
    ErrorMessage: ErrorMessage,
    CartBreadcrumb
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請填寫正確的手機號碼格式'
    },
    createOrder() {
      const url = `${VITE_API}api/${VITE_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then((res) => {
          this.$refs.form.resetForm()
          this.form.message = ''
          this.orderId = res.data.orderId
          this.$router.push(`/pay/${this.orderId}`)
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
  computed: {
    ...mapState(cartStore, ['cart', 'totalQty'])
  },
  mounted() {
    this.loadingBread = this.$route.name
  }
}
</script>