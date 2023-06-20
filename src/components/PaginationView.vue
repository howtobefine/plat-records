<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="{ disabled: !pagination.has_pre }" class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pagination.total_pages"
        :key="page"
        :class="{ active: pagination.current_page === page }"
      >
        <span class="page-link" v-if="page === pagination.current_page">{{ page }}</span>
        <a class="page-link" v-else href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    updatePage(page) {
      this.$emit('emitPages', page)
    }
  }
}
</script>