<template>
    <div class="body-content">
        <transition name="router-anim">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import Home from '../routecomponents/home.vue';

export default {
    name: 'Body',
    components: {
       Home 
    }
}
</script>
