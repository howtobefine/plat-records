<template>
  <teleport to="title">｜後臺管理</teleport>
  <div>
    <VueLoading
    :active="isLoading"
    :z-index="1060"
    :loader="'dots'"
    :color="'#CB4042'"
    :transition="'fade'"
  ></VueLoading>
    <div class="text-end mt-4">
      <button class="btn btn-danger" type="button" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4 table-hover">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-right">
            {{ $filters.currency(product.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(product.price) }}
          </td>
          <td>
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openModal('del', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationView :pagination="pagination" @emit-pages="getProducts" />
  </div>
  <ProductModal :product="tempProduct" :is-new="isNew" @update-product="updateProduct" />
  <DelModal :item="tempProduct" @del-emit="delProduct" />
</template>

<script>
import { Modal } from 'bootstrap'
import PaginationView from '@/components/PaginationView.vue'
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import { Toast } from '@/utils/toast.js'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      productModal: '',
      delModal: '',
      pagination: {},
      isNew: false,
      isLoading: '',
      currentPage: 1
    }
  },
  methods: {
    getProducts(page = 1) {
      this.currentPage = page
      const url = `${VITE_API}api/${VITE_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    openModal(status, product) {
      if (status === 'create') {
        this.productModal.show()
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
      } else if (status === 'edit') {
        this.productModal.show()
        this.tempProduct = { ...product }
        this.isNew = false
      } else if (status === 'del') {
        this.delModal.show()
        this.tempProduct = { ...product }
      }
    },
    updateProduct() {
      let url = `${VITE_API}api/${VITE_PATH}/admin/product`
      let method = 'post'
      this.isLoading = true
      if (!this.isNew) {
        url = `${VITE_API}api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.tempProduct })
        .then((res) => {
          this.isLoading = false
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.productModal.hide()
          this.getProducts(this.currentPage)
        })
        .catch((err) => {
          this.isLoading = false
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    delProduct() {
      const url = `${VITE_API}api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
      this.isLoading = true
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false
          this.getProducts(this.currentPage)
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.delModal.hide()
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
    ProductModal,
    DelModal
  },
  mounted() {
    this.getProducts()
    this.productModal = new Modal('#productModal')
    this.delModal = new Modal('#delModal')
  }
}
</script>

<style lang="scss">
@import '@/assets/all.scss';
</style>
