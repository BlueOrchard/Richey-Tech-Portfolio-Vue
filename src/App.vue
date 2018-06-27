<template>
  <div id="app">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/header.vue'
import Body from './components/layout/body.vue'
import Footer from './components/layout/footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>