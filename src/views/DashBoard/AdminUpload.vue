<template>
   <VueLoading
    :active="isLoading"
    :z-index="1060"
    :loader="'dots'"
    :color="'#CB4042'"
    :transition="'fade'"
  ></VueLoading>
  <div class="container">
    <div class="mb-3">
      <label for="formFile" class="form-label">圖片上傳</label>
      <input class="form-control" type="file" id="formFile" ref="file" @change="upload" />
    </div>
    <div class="mb-3 text-center" v-if="imageUrl">
      <img :src="imageUrl" alt="123" class="img-fluid img-cover" width="400" />
    </div>
    <div class="mb-3 text-break">
      {{ imageUrl }}
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env
import { Toast } from '@/utils/toast.js'
export default {
  data() {
    return {
      imageUrl: '',
      isLoading: false
    }
  },
  methods: {
    upload() {
      this.isLoading = true
      const url = `${VITE_API}api/${VITE_PATH}/admin/upload`
      const file = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http
        .post(url, formData)
        .then((res) => {
          this.imageUrl = res.data.imageUrl
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          Toast.fire({
            icon: 'error',
            title: `${err.response.data.message}`
          })
        })
    }
  }
}
</script>