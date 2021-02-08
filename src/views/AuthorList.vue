<template>
  <div class="container">

    <div class="row my-5 justify-content-center">

      <div class="col-md-8">

        <div class="row mt-3" v-for="author in authorList" :key="author.id">

          <div class="col-md-3">
            <router-link :to="{name: 'Author', params: {id: author.id}}">
              <img :src="author.image" class="img-fluid" alt="author.name">
            </router-link>
          </div>

          <div class="col-md-9 align-self-center">
            <router-link :to="{name: 'Author', params: {id: author.id}}"><h3>{{ author.name }}</h3></router-link>
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