<template>
  <div class="container">

    <div class="row mt-5 justify-content-md-center">

      <div class="col-md-8">

        <div class="row">

          <div class="col-md-6">
            <img :src="book.cover" class="img-fluid" alt="book.title">
          </div>

          <div class="col-md-6">
            <h3> {{ book.title }}</h3>
            <ul>
              <li><span><b>Год:</b> {{ book.year }}</span></li>
              <li><span><b>Слоган:</b> {{ book.tagline }}</span>
              </li>
              <li><span><b>Автор:</b>
                <router-link :to="{name: 'Author', params: {id: book.author.id}}">
                  {{ book.author.name }}
                </router-link>
              </span></li>
              <li>
                <span><b>Жанр:</b>
                  <span v-for="genre in book.genres" :key="genre">
                    {{ genre }}
                  </span>
              </span>
              </li>
              <li><span><b>Количество страниц:</b> {{ book.num_of_pages }}</span>
              </li>
              <li><span><b>Издательство:</b> {{ book.publisher }}</span></li>
              <b>Рейтинг:</b>
              <ul class="stars">
                <li v-for="star in listStars">
                      <span :class="star <= book.middle_rating ? 'fa fa-star' : 'fa fa-star-o'"
                            aria-hidden="true">
                      </span>
                  <span>{{ middle_rating }}</span>
                </li>
              </ul>

            </ul>
            <div class="clearfix"></div>

          </div>
          <div class="row mt-3">
            <div class="col px-3">
              <p>{{ book.desc }}</p>
            </div>
          </div>
          <div class="row">
            <div v-for="object in book.images" :key="object.id" class="col-md-4">
              <img :src="object.image" class="img-fluid" alt="image.image.url">
            </div>
          </div>
        </div>

        <hr>

        <Review :reviews="book.reviews" :book="book.id" @reLoad="loadBook"/>

      </div>
    </div>
  </div>

</template>

<script>
import Review from "../components/Review";

export default {
  name: "Book",
  components: {Review},
  props: ['id'],
  data() {
    return {
      book: {},
      listStars: [1, 2, 3, 4, 5]
    }
  },
  created() {
    this.loadBook()
  },
  methods: {
    async loadBook() {
      this.book = await fetch(
          `${this.$store.getters.getServerUrl}/book/${this.id}/`
      ).then(response => response.json())
      console.log(this.book)
    }
  }
}
</script>

<style scoped>

</style>