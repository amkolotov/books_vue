<template>
  <div class="container">

    <div class="row mt-5">

      <div class="col-md-4">
        <div class="side-bar">

          <h3>Поиск книги</h3>

          <form class="form-inline my-2 my-lg-0" action="#">
            <input class="form-control mr-sm-2"
                   type="search" placeholder="Введите название" name="title" v-model="searchText">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="searchBook">Найти</button>
          </form>

          <form action="#" method="get">

            <div class="left-side my-4">
              <h3 class="sear-head editContent">Жанры</h3>
              <ul class="w3layouts-box-list">

                <li class="editContent">
                  <input type="checkbox" class="checked" name="genre" value="Фэнтези" v-model="checkedGenres">
                  <span class="span editContent"> Фэнтези</span>
                </li>
                <li class="editContent">
                  <input type="checkbox" class="checked" name="genre" value="Фантастика" v-model="checkedGenres">
                  <span class="span editContent"> Фантастика</span>
                </li>
                <li class="editContent">
                  <input type="checkbox" class="checked" name="genre" value="Любовные романы" v-model="checkedGenres">
                  <span class="span editContent"> Любовные романы</span>
                </li>

              </ul>
            </div>

            <div class="left-side">
              <h3 class="sear-head editContent">Год</h3>
              <ul class="w3layouts-box-list">

                <li class="editContent">
                  <input type="checkbox" class="checked" name="year" value="2020" v-model="checkedYears">
                  <span class="span editContent"> 2020</span>
                </li>
                <li class="editContent">
                  <input type="checkbox" class="checked" name="year" value="2019" v-model="checkedYears">
                  <span class="span editContent"> 2019</span>
                </li>
                <li class="editContent">
                  <input type="checkbox" class="checked" name="year" value="2018" v-model="checkedYears">
                  <span class="span editContent"> 2018</span>
                </li>

              </ul>
            </div>

              <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="checked">Найти</button>

          </form>

          <h3 class="sear-head mt-3">Последние добавленные</h3>
          <div class="row my-4" v-for="lastBook in listBooks" :key="lastBook.id">
            <div class="col-md-4">
              <router-link to="{path: '/', query: {page: 1}}">
                <img :src="lastBook.cover" alt="lastBook.title" class="img-fluid">
              </router-link>
            </div>
            <div class="col-md-8">
              <router-link :to="{name: 'Book', params: {id: lastBook.id}}"><h5>{{ lastBook.title }}</h5></router-link>
            </div>
          </div>

        </div>
      </div>

      <div class="col-md-8 books">
        <div class="row">

          <div v-for="book in listBooks" :key="book.id" class="col-md-6">
            <div class="card mb-4 shadow-sm">
              <router-link :to="{name: 'Book', params: {id: book.id}}">
                <img :src="book.cover" class="card-img-top" alt="Книга 1">
              </router-link>
              <div class="card-body">
                <router-link :to="{
                    name: 'Book',
                    params: {id: book.id}
                  }">
                  <h5 class="card-title">{{ book.title }}</h5>
                </router-link>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ book.tagline }}</li>
                <li class="list-group-item">
                  <div class="row justify-content-center">
                    <ul class="stars">
                      <li v-for="star in listStars">
                          <span :class="star <= book.middle_rating ? 'fa fa-star' : 'fa fa-star-o'"
                                aria-hidden="true">
                          </span>
                      </li>
                      <!--                                        <li><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>-->
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>

    <Pagination :total="totalPages" @pageChange="loadListBooks"/>

  </div>


</template>

<script>

import Pagination from "../components/Pagination"

export default {
  name: 'Home',
  data() {
    return {
      listBooks: [],
      listStars: [1, 2, 3, 4, 5],
      page: 1,
      totalPages: 0,
      searchText: '',
      checkedGenres: [],
      checkedYears: []
    }
  },
  components: {
    Pagination
  },
  created() {
    this.loadListBooks(this.page)
  },
  methods: {
    async loadListBooks(pageNumber) {
      this.listBooks = await fetch(
          `${this.$store.getters.getServerUrl}/book/?page=${pageNumber}`
      ).then(response => response.json()
      ).then(response => {
        this.totalPages = response.count_pages;
        this.searchText = '';
        return response.results;
      })
    },
    async searchBook() {
      this.listBooks = await fetch(
          `${this.$store.getters.getServerUrl}/book/?title=${this.searchText}`
      ).then(response => response.json()
      ).then(response => {
        this.totalPages = response.count_pages;
        this.searchText = '';
        return response.results;
      })
    },
    async checked() {
      let genres = 'genres=' + this.checkedGenres.join('&genres=')
      let years = '&year_min='+ this.checkedYears.join('&year_min=')
      let url = `${this.$store.getters.getServerUrl}/book/?` + genres + years
      console.log(url)
      this.listBooks = await fetch(
          url
      ).then(response => response.json()
      ).then(response => {
        this.totalPages = response.count_pages;
        this.searchText = '';
        return response.results;
    })
  }
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
}

</style>
