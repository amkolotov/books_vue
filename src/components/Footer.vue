<template>
  <footer class="footer mt-3 py-3">
    <div class="container-fluid">
      <div class="container">

        <div class="row mt-3 justify-content-center">
          <div class="col-md-4">
            <h3>Разделы</h3>
            <ul>
              <li>Главная</li>
              <li>Авторы</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3>Новостная рассылка</h3>
            <p>Подписавшись на нашу рассылку, вы всегда будете получать последние новости и обновления.</p>
            <form action="#" method="post" class="form-inline">
              <input type="email" name="Email" class="form-control" placeholder="Ваш email..." required="" >
              <button class="btn btn-success ml-2" ><span class="fa fa-paper-plane-o" aria-hidden="true" ></span></button>

            </form>
          </div>
        </div>
        <div class="row justify-content-md-center mt-5">
          <span class="text-muted">© 2021 Booker. Все права защищены</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>