<template>

  <div id="app">

    <Nav/>

    <router-view/>

    <Footer/>

  </div>

</template>

<style>
@import "assets/css/bootstrap.css";
@import "assets/css/style.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";
</style>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  components: {Footer, Nav}
}
</script>