<template>
    <div class="header">
        <div class="logo">
            <router-link to="/">
                <h1>Joseph <b>Richey</b></h1>
            </router-link>
        </div>

        <div class="nav-bar">
            <router-link to="/browse">Portfolio</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
