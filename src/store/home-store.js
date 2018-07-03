import Axios from 'axios';

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
            commit('loader/showLoader', null, {root: true});
            Axios.get('https://richey.tech/wp-json/wp/v2/posts/' + value)
                .then((response) => {
                    commit('addToPost', response.data)
                    commit('loader/hideLoader', null, {root: true});
                });
        }
    }
}

export default homeModule;