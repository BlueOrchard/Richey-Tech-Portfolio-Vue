<template>
    <div class="body-content">
        <transition name="router-anim">
            <router-view/>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'Body',
}
</script>
