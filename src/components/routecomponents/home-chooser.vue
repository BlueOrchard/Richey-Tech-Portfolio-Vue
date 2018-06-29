<template>
    <div class="home-chosen">
        <transition name="router-anim">
            <div v-if="homeSelected.selected == 'PROGRAMMING'">
                <p class="command">$: sudo vi programming.md <span class="blink">_</span></p>
                <h2>Programming</h2>
                <p>I am a multidisciplinary programmer capable of picking up new concepts fairly quickly. I mainly develop web applications and websites, but I also create mobile apps and video games as a hobby.</p>
            </div>
            <div v-else-if="homeSelected.selected == 'INFORMATION_TECH'">
                <p class="command">$: sudo vi informationtechnology.md <span class="blink">_</span></p>
                <h2>Information Technology</h2>
                <p>While I'm certified in configuring and deploying Windows 7 computers, I am fully capable of working within Windows 10, MacOS, and various Linux Distros.</p>
            </div>
            <div v-else>
                <p class="command">$: invalid input. <span class="blink">_</span></p>
            </div>
        </transition>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "HomeChooser",
        computed: mapState({
            homeSelected: 'home'
        }),
    }
</script>
