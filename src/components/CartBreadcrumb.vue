<template>
  <ul
    class="d-flex justify-content-center align-items-center list-unstyled mb-0 pt-5 pb-4 pt-lg-9 pb-lg-6 gap-lg-4 gap-1"
  >
    <li class="text-center" :class="{ 'text-danger': parentBread === 'cart' }">
      <p class="mb-0">Step 1</p>
      <p class="mb-0">購買項目</p>
    </li>
    <i class="bi bi-chevron-right"></i>
    <li class="text-center" :class="{ 'text-danger': parentBread === 'order' }">
      <p class="mb-0">Step 2</p>
      <p class="mb-0">填寫資料</p>
    </li>
    <i class="bi bi-chevron-right"></i>
    <li class="text-center" :class="{ 'text-danger': parentBread === 'pay' }">
      <p class="mb-0">Step 3</p>
      <p class="mb-0">確認付款</p>
    </li>
    <i class="bi bi-chevron-right"></i>
    <li class="text-center" :class="{ 'text-danger': parentBread === 'completed' }">
      <p class="mb-0">Step 4</p>
      <p class="mb-0">訂單完成</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['parentBread']
}
</script>