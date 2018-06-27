<template>
    <div class="home-content">
         <div class="hero-part">
             <div class="text-part">
                 
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',


        methods: {
            handleScroll(event) {
                console.log("testing");
            }
        },

        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>
