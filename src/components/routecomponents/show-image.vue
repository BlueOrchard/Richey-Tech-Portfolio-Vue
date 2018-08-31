<template>
    <div class="image">
        <div class="loading">
            <transition name="router-anim">
                <img :src="imageURL" v-if="isLoaded" />
            </transition>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: "showImage",
        props: ['image-id'],
        methods: {
            loadMe: function(){
                this.loaded = true;
            }
        },
        data: function(){
            return {
                imageURL: "",
                loaded: false
            }
        },
        computed: {
            isLoaded: function(){
                this.loaded;
                this.imageURL;
                return this.loaded == true && this.imageURL != "";
            }
        },

        created(){
            Axios.get('https://api.richey.tech/wp-json/wp/v2/media/' + this.imageId)
                .then((response) => {
                    this.imageURL = response.data.media_details.sizes.archive_image.source_url;

                    var image = new Image()
                    var that = this
                    this.loaded = image.addEventListener('load', function(){that.loadMe()}) // This is the key part: it is basically vanilla JS
                    image.src = response.data.media_details.sizes.archive_image.source_url
                });
        },

        destroyed(){
            this.imageURL = "";
        }
    }
</script>
