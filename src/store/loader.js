const loader = {
    namespaced: true,
    state: {
        loadState: "VISIBLE"
    },
    mutations: {
        showLoader(state){
            state.loadState = "VISIBLE";
        },

        hideLoader(state){
            state.loadState = "HIDDEN";
        }
    }
}

export default loader;