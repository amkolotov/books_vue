<template>
  <div class="row justify-content-center">
    <ul class="pagination">
<!--      <li class="page-item">-->
<!--        <a class="page-link" href="#" aria-label="Previous">-->
<!--          <span aria-hidden="true">&laquo;</span>-->
<!--        </a>-->
<!--      </li>-->

      <li v-for="p in total" :key="p" class="page-item" :class="{ active: currentPage === p }">
        <a class="page-link" href="#" @click="changePage(p)">{{ p }}</a>
      </li>


<!--      <li class="page-item">-->
<!--        <a class="page-link" href="#" aria-label="Next">-->
<!--          <span aria-hidden="true">&raquo;</span>-->
<!--        </a>-->
<!--      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['total'],
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber
      this.$emit('pageChange', pageNumber)
    }
  }
}
</script>

<style scoped>

</style>