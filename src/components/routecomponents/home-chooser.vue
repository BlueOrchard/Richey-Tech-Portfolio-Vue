<template>
    <div class="home-chosen">
        <transition name="drop-anim">
            <div v-show="homeSelected.selected == 'PROGRAMMING'">
                <p class="command">$: sudo vi programming.md <span class="blink">_</span></p>
                <h2>Programming</h2>
                <p>I am a multidisciplinary programmer capable of picking up new concepts fairly quickly. I mainly develop web applications and websites, but I also create mobile apps and video games as a hobby.</p>

                <div class="split-proficiencies">
                    <div class="prof-list">
                        <h3>Proficiencies</h3>

                        <ul>
                            <li>PHP</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript/ES6</li>
                            <li>WordPress</li>
                            <li>Python</li>
                            <li>Node</li>
                            <li>C#</li>
                        </ul>
                    </div>
                    <div class="confidence-charts">
                        <div class="conf-item">
                            <div class="conf-name">Web Development</div>
                            <transition name="conf-anim">
                                <div key="1pro" v-show="homeSelected.selected == 'PROGRAMMING'" class="conf-value val-100"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Web Design</div>
                            <transition name="conf-anim">
                                <div key="2pro" v-show="homeSelected.selected == 'PROGRAMMING'" class="conf-value val-100"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Scripting</div>
                            <transition name="conf-anim">
                                <div key="3pro" v-show="homeSelected.selected == 'PROGRAMMING'" class="conf-value val-100"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Object Oriented</div>
                            <transition name="conf-anim">
                                <div key="4pro" v-show="homeSelected.selected == 'PROGRAMMING'" class="conf-value val-80"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Mobile App Development</div>
                            <transition name="conf-anim">
                                <div key="5pro" v-show="homeSelected.selected == 'PROGRAMMING'" class="conf-value val-60"></div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <transition name="drop-anim">
            <div v-show="homeSelected.selected == 'INFORMATION_TECH'" class="information-tech-container">
                <p class="command">$: sudo vi informationtechnology.md <span class="blink">_</span></p>
                <h2>Information Technology</h2>
                <p>While I'm certified in configuring and deploying Windows 7 computers, I am fully capable of working within Windows 10, MacOS, and various Linux Distros.</p>

                <div class="split-proficiencies">
                    <div class="prof-list">
                        <h3>Confidence Level</h3>

                        <ul>
                            <li>Windows 10</li>
                            <li>Windows 7</li>
                            <li>Linux</li>
                            <li>Hardware Configuration</li>
                            <li>Software Configuration</li>
                        </ul>
                    </div>
                    <div class="confidence-charts">
                        <div class="conf-item">
                            <div class="conf-name">Hardware Troubleshooting</div>
                            <transition name="conf-anim">
                                <div key="1it" v-show="homeSelected.selected == 'INFORMATION_TECH'" class="conf-value val-100"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Software Troubleshooting</div>
                            <transition name="conf-anim">
                                <div key="2it" v-show="homeSelected.selected == 'INFORMATION_TECH'" class="conf-value val-100"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Server Administration</div>
                            <transition name="conf-anim">
                                <div key="3it" v-show="homeSelected.selected == 'INFORMATION_TECH'" class="conf-value val-90"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Windows Deployment</div>
                            <transition name="conf-anim">
                                <div key="4it" v-show="homeSelected.selected == 'INFORMATION_TECH'" class="conf-value val-80"></div>
                            </transition>
                        </div>

                        <div class="conf-item">
                            <div class="conf-name">Networking</div>
                            <transition name="conf-anim">
                                <div key="5it" v-show="homeSelected.selected == 'INFORMATION_TECH'" class="conf-value val-70"></div>
                            </transition>
                        </div>
                    </div>
                </div>
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
