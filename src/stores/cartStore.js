import { defineStore } from "pinia";
import axios from 'axios'
import { Toast } from "@/utils/toast.js";
const { VITE_API, VITE_PATH } = import.meta.env
const cartStore = defineStore('cartStore', {
    state: () => {
        return {
            cart: [],
            totalQty: 0,
            loadingItem: ''
        }
    },
    actions: {
        addToCart(product_id, qty = 1) {
            const url = `${VITE_API}api/${VITE_PATH}/cart`
            const data = {
                product_id,
                qty
            };
            this.loadingItem = product_id
            axios.post(url, { data })
                .then((res) => {
                    Toast.fire({
                        icon: 'success',
                        title: `${res.data.message}`
                    })
                    this.getCarts()
                    this.loadingItem = ''
                }).catch((err) => {
                    Toast.fire({
                        icon: "error",
                        title: `${err.response.data.message}`,
                    })
                })
        },
        getCarts() {
            const url = `${VITE_API}api/${VITE_PATH}/cart`
            axios.get(url)
                .then((res) => {
                    this.totalQty = 0
                    this.cart = res.data.data
                    this.cart.carts.forEach(item => this.totalQty += item.qty)
                })
                .catch((err) => {
                    Toast.fire({
                        icon: "error",
                        title: `${err.response.data.message}`,
                    })
                })
        },
        updateCartItem(item) {
            const url = `${VITE_API}api/${VITE_PATH}/cart/${item.id}`
            const data = {
                product_id: item.product_id,
                qty: item.qty
            }
            this.loadingItem = item.id
            axios.put(url, { data }).then(() => {
                this.getCarts()
                this.loadingItem = ''
            }).catch((err) => {
                Toast.fire({
                    icon: "error",
                    title: `${err.response.data.message}`,
                })
            })

        },
        addQty(item) {
            const url = `${VITE_API}api/${VITE_PATH}/cart/${item.id}`
            const data = {
                product_id: item.product_id,
                qty: item.qty + 1
            }
            this.loadingItem = item.id
            axios.put(url, { data }).then(() => {
                this.getCarts()
                this.loadingItem = ''
            }).catch((err) => {
                Toast.fire({
                    icon: "error",
                    title: `${err.response.data.message}`,
                })
            })
        },
        decreaseQty(item) {
            const url = `${VITE_API}api/${VITE_PATH}/cart/${item.id}`
            const data = {
                product_id: item.product_id,
                qty: item.qty - 1
            }
            this.loadingItem = item.id
            axios.put(url, { data }).then(() => {
                this.getCarts()
                this.loadingItem = ''
            }).catch((err) => {
                Toast.fire({
                    icon: "error",
                    title: `${err.response.data.message}`,
                })
            })
        },
        deleteItem(item) {
            const url = `${VITE_API}api/${VITE_PATH}/cart/${item.id}`
            this.loadingItem = item.id
            axios.delete(url).then((res) => {
                Toast.fire({
                    icon: 'success',
                    title: `${res.data.message}`
                })
                this.getCarts()
                this.loadingItem = ''
            }).catch((err) => {
                Toast.fire({
                    icon: "error",
                    title: `${err.response.data.message}`,
                })
            })
        },
        deleteItems() {
            const url = `${VITE_API}api/${VITE_PATH}/carts`
            axios.delete(url).then(() => {
                Toast.fire({
                    icon: 'success',
                    title: `已刪除全部品項`
                })
                this.getCarts()
            }).catch((err) => {
                Toast.fire({
                    icon: "error",
                    title: `${err.response.data.message}`,
                })
            })
        }
    }
})

export default cartStore;