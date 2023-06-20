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
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(order, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{ 'text-muted': !order.is_paid }">
            <td>{{ $filters.date(order.create_at) }}</td>
            <td><span v-text="order.user.email" v-if="order.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in order.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ order.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${order.id}`"
                  v-model="order.is_paid"
                  @change="updatePaid(order)"
                />
                <label class="form-check-label" :for="`paidSwitch${order.id}`">
                  <span v-if="order.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal('edit', order)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openModal('del', order)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <PaginationView :pagination="pagination" @emit-pages="getOrders" />
  <OrderModal :order="tempOrder" @update-paid="updatePaid" />
  <DelModal :item="tempOrder" @del-emit="delOrder" />
</template>

<script>
import { Modal } from 'bootstrap'
import DelModal from '@/components/DelModal.vue'
import PaginationView from '@/components/PaginationView.vue'
import OrderModal from '@/components/OrderModal.vue'
import { Toast } from '@/utils/toast.js'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      orders: {},
      isNew: false,
      isPaid: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
      orderModal: '',
      delModal: ''
    }
  },
  methods: {
    getOrders(page = 1) {
      this.currentPage = page
      const url = `${VITE_API}api/${VITE_PATH}/admin/orders/?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders
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
    openModal(status, order) {
      if (status === 'edit') {
        this.orderModal.show()
        this.tempOrder = { ...order }
        this.isNew = false
      } else if (status === 'del') {
        this.delModal.show()
        this.tempOrder = { ...order }
      }
    },
    updatePaid(order) {
      const url = `${VITE_API}api/${VITE_PATH}/admin/order/${order.id}`
      this.isLoading = true
      const paid = { is_paid: order.is_paid }
      this.$http
        .put(url, { data: paid })
        .then((res) => {
          this.isLoading = false
          this.orderModal.hide()
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.getOrders(this.currentPage)
        })
        .catch((err) => {
          this.isLoading = false
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    },
    delOrder() {
      const url = `${VITE_API}api/${VITE_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http
        .delete(url)
        .then((res) => {
          this.isLoading = false
          this.delModal.hide()
          Toast.fire({
            icon: 'success',
            title: `${res.data.message}`
          })
          this.getOrders()
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
    DelModal,
    PaginationView,
    OrderModal
  },
  mounted() {
    this.getOrders()
    this.orderModal = new Modal('#orderModal')
    this.delModal = new Modal('#delModal')
  }
}
</script>