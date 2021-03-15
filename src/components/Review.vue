<template>
  <div class="review">
    <div class="row">
      <h3>Оставить отзыв:</h3>
    </div>

    <div class="row">
      <div class="col px-0">
        <form action="#" method="post" class="mb-3" id="formReview">
          <input type="hidden" name="parent" id="parentComment" value="">
          <div class="form-group">
            <label for="comment">Ваш комментарий: </label>
            <textarea class="form-control border" rows="5"
                      id="comment" required="" v-model="text"></textarea>
          </div>
          <div class="form-row">
            <div class="form-group  col-md-6">
              <label for="username">Ваше имя: </label>
              <input type="text" class="form-control border"
                     id="username" required="" v-model="username">
            </div>
            <div class="form-group  col-md-6">
              <label for="email">Email: </label>
              <input type="email" class="form-control border"
                     id="email" required="" v-model="email">
            </div>
          </div>
          <button type="button" class="btn btn-success btn-lg btn-block" @click="sendReview">Отправить</button>
        </form>
      </div>
    </div>
    <div class="row">
      <h3>Читать отзывы ({{ reviews.length }}):</h3>
    </div>

    <div class="row mt-3" v-for="review in reviews">

      <div class="col-2">
        <img src="../assets/images/avatar.jpg" alt="Аватар" class="img-fluid">
      </div>
      <div class="col-md-10">
        <h5>{{ review.username }}</h5>
        <p>{{ review.text }}</p>
        <a href="#formReview" @click="addParent(review.id, review.username)">Ответить</a>
      </div>

      <div class="row ml-5 mt-3" v-for="child in review.children">
        <div class="col-2">
          <img src="../assets/images/avatar.jpg" alt="Аватар" class="img-fluid">
        </div>
        <div class="col-md-10">
          <h5>{{ child.username }}</h5>
          <p>{{ child.text }}</p>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "Review",
  props: ['reviews', 'book'],
  data() {
    return {
      username: '',
      email: '',
      text: '',
      parent: null
    }
  },
  methods: {
    async sendReview() {
      let data = {
        username: this.username,
        email: this.email,
        text: this.text,
        parent: this.parent,
        book: this.book
      }
      await fetch(`${this.$store.getters.getServerUrl}/review/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
      ).then(response => {
        response.json()
        this.$emit('reLoad')
        this.clearForm()
      })
    },
    addParent(id, name) {
      this.parent = id
      this.text = `${name}, `
    },
    clearForm() {
      this.username = ''
      this.email = ''
      this.text = ''
      this.parent = ''
    }
  }
}
</script>

<style scoped>

</style>