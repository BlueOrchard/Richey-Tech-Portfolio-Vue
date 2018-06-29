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
                <p>Hello! my name is Joseph. I am a programmer and also an IT specialist. I specialize mainly in web development and scripting, but I am also certified with Windows administration (I can work with Linux computers too though!).</p>
                <p>With web constantly evolving, I have learned that I must evolve with it. I am constantly learning and trying out new technology - React, Vue, Node - you name it!</p>
             </div>

             <div class="divider"></div>

             <div class="proficiencies">
                <p class="command">$: sudo vi proficiences <span class="blink">_</span></p>
                <div class="redbar">
                    <h1>Proficiencies</h1>
                </div>
                <p>I'd like to say I'm proficient in both programming and information technology, so I've decided to separate the two. Please select an option below:</p>

                <div class="selectors">
                    <div class="select-box">
                        <p class="command">$: git checkout programming <span class="blink">_</span></p>
                        <h2>Programming</h2>
                        <p>Proficiencies regarding programming.</p>
                    </div>

                    <div class="select-box">
                        <p class="command">$: git checkout programming <span class="blink">_</span></p>
                        <h2>Information Technology</h2>
                        <p>Proficiencies regarding information technology.</p>
                    </div>
                </div>
             </div>

             <div class="divider"></div>

             <div class="projects">
                 <p class="command">$: sudo vi projects</p>
                 <div class="redbar">
                     <h1>Projects</h1>
                 </div>
                 <p>Here's a small list of projects that I've worked on:</p>
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {

        },

        created() {

        },

        destroyed() {
            
        }
    }
</script>
