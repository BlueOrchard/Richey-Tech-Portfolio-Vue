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
import { mapActions, mapMutations }  from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Footer
  },
  methods: {
    ...mapActions('home', [
      'fetchPostsHome'
    ]),
    ...mapMutations('home', [
      'clearPosts'
    ]),
  },

  created(){
    //Fetches preset featured posts for home
    this.fetchPostsHome(80);
    this.fetchPostsHome(33);
    this.fetchPostsHome(42);
  },

  destroyed(){
    this.clearPosts();
  }
}
</script>