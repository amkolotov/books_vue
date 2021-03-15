<template>
  <div class="container">

    <div class="row mt-5 justify-content-md-center">

      <div class="col-md-8">

        <div class="row">

          <div class="col-md-6">
            <img :src="author.image" class="img-fluid" alt="author.name">
          </div>

          <div class="col-md-6">
            <h3>{{ author.name }}</h3>
            <ul>
              <li><span><b>Дата рождения:</b> {{ author.birthday }} г.</span></li>

              <li v-if="author.death"><span><b>Дата смерти:</b> {{ author.death }} г.</span></li>

            </ul>
          </div>

        </div>

        <div class="clearfix"></div>

        <div class="row mt-3">
          <div class="col px-3">
            <p>{{ author.desc }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Author",
  props: ['id'],
  data() {
    return {
      author: {}
    }
  },
  created() {
    this.loadAuthor()
  },
  methods: {
    async loadAuthor() {
      this.author = await fetch(
          `${this.$store.getters.getServerUrl}/author/${this.id}`
      ).then(response => response.json())
      console.log(this.author)
    }
  }
}

</script>

<style scoped>

</style>