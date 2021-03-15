<template>

  <div class="container">
    <div class="row justify-content-center">

      <div class="card mt-5" style="max-width: 640px;" v-for="author in authorList" :key="author.id">
        <div class="row" style="height: 300px;">
          <div class="col-4">
            <router-link :to="{name: 'Author', params: {id: author.id}}">
              <img :src="author.image" class="img-fluid my-auto" alt="author.name">
            </router-link>
          </div>
          <div class="col-8">
            <div class="card-body">
              <router-link :to="{name: 'Author', params: {id: author.id}}">
                <h5 class="card-title text-center">{{ author.name }}</h5>
              </router-link>
              <div class="row" style="height: 170px; overflow: auto;">
                <p class="card-text pr-3">{{ author.desc }}</p>
              </div>
              <div class="row mt-4 justify-content-end">
                <router-link :to="{name: 'Author', params: {id: author.id}}">
                  <span class="pr-4">Подробнее</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AuthorList",
  data() {
    return {
      authorList: []
    }
  },
  created() {
    this.loadAuthorList()
  },
  methods: {
    async loadAuthorList() {
      this.authorList = await fetch(
          `${this.$store.getters.getServerUrl}/author/`
      ).then(response => response.json()
      ).then(response => {
        return response.results
      })
    },
  }
}
</script>

<style scoped>

</style>