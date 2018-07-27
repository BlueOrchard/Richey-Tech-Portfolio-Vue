<template>
    <div class="home-content">
         <div class="hero-part">
             <div class="text-part">
                <h1>$: hello <span class="blink">_</span></h1>
                <p>My Name is Joseph Richey.</p>
             </div>
         </div>

         <div class="content-part">
             <div class="about-me">
                <p class="command">$: sudo vi about-me <span class="blink">_</span></p>
                <div class="redbar">
                    <h1>About Me</h1>
                </div>
                <p>Hello! my name is Joseph. I am a programmer and also an IT specialist. I specialize mainly in web development and scripting, but I am also certified with Windows administration (I can work with Linux and MacOS computers too though!).</p>
                <p>With web constantly evolving, I have learned that I must evolve with it. I am constantly learning and trying out new technology and frameworks - React, Vue, Node - you name it!</p>

                <div class="icons">
                    <div class="side">
                        <i class="fab fa-vuejs"></i>
                        <i class="fab fa-react"></i>
                        <i class="fab fa-laravel"></i>
                    </div>

                    <div class="side">
                        <i class="fab fa-windows"></i>
                        <i class="fab fa-apple"></i>
                        <i class="fab fa-linux"></i>
                    </div>
                </div>
             </div>

             <div class="divider"></div>

             <div class="proficiencies">
                <p class="command">$: sudo vi proficiences <span class="blink">_</span></p>
                <div class="redbar">
                    <h1>Proficiencies</h1>
                </div>
                <p>I'd like to say I'm proficient in both programming and information technology, so I've decided to separate the two. Please select an option below:</p>

                <div class="selectors">
                    <div 
                        v-bind:class="activeClass('PROGRAMMING')" class="select-box" 
                        @click="changeHomeCheckout('PROGRAMMING')">
                            <p class="command">$: git checkout programming <span class="blink">_</span></p>
                            <h2>Programming</h2>
                            <i class="fab fa-vuejs"></i>
                    </div>

                    <div 
                        v-bind:class="activeClass('INFORMATION_TECH')" 
                        class="select-box" 
                        @click="changeHomeCheckout('INFORMATION_TECH')">
                            <p class="command">$: git checkout information-technology <span class="blink">_</span></p>
                            <h2>Information Technology</h2>
                            <i class="fab fa-windows"></i>
                    </div>
                </div>

                <div>
                    <HomeChooser />
                </div>
             </div>

             <div class="divider"></div>

             <div class="projects">
                 <p class="command">$: sudo vi projects <span class="blink">_</span></p>
                 <div class="redbar">
                     <h1>Projects</h1>
                 </div>
                 <p>Here's a small list of projects that I've worked on:</p>

                 <div 
                    v-for="item in this.$store.state.home.posts"
                    v-bind:key="item.id">
                    <div class="home-item">
                        <showImage v-bind:image-id="item.featured_media" />
                        <div class="rightside">
                            <h3>{{ item.title.rendered }}</h3>
                            <p v-html="item.excerpt.rendered">
                                {{ item.excerpt.rendered }}
                            </p>
                        </div>
                    </div>
                    <!-- {{ item }} -->

                 </div>

                 <router-link class="link-browse" to="/browse">Browse More</router-link>
             </div>
         </div>
    </div>
</template>

<script>
    import HomeChooser from './home-chooser';
    import { mapMutations } from 'vuex';
    import showImage from './show-image';

    export default {
        name: 'Home',
        methods: {
            ...mapMutations('home', [
                'changeHomeCheckout'
            ]),
            activeClass(payload){
                if(payload == this.$store.state.home.selected){
                    return "active";
                }
            }
        },
        components: {
            HomeChooser, showImage
        },

        created() {

        },

        destroyed() {
            
        }
    }
</script>
