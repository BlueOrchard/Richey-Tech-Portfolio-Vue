import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const homeModule = {
    namespaced: true,
    state: {
        selected: "PROGRAMMING",
        posts: []
    },
    mutations: {
        changeHomeCheckout(state, value){
            state.selected = value;
        },
        clearPosts(state){
            state.posts = [];
        },

        addToPost(state, post){
            state.posts.push(post);
        }
    },
    actions: {
        fetchPostsHome({ commit }, value){
            Axios.get('https://richey.tech/wp-json/wp/v2/posts/' + value)
                .then((response) => {
                    commit('addToPost', response.data)
                });
        }
    }
}

export default new Vuex.Store({
    modules: {
        home: homeModule
    }
})