<template>
    <div id="app">
        <v-app id="inspire">
            <v-app-bar
                    app
                    clipped-right
                    color="#b34dab"
                    dark
            >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>MYIS PLUS+</v-toolbar-title>
                <div>
                    <v-icon right>mdi-facebook-box</v-icon>
                    <v-icon right>mdi-twitter-box</v-icon>
                    <v-badge color="indigo">
                        <template v-slot:badge>{{ counter }}</template>
                        <v-icon right>mdi-heart-outline</v-icon>
                    </v-badge>
                    &nbsp;&nbsp;
                    <v-badge color="green">
                        <template v-slot:badge>
                            <v-icon dark>
                                mdi-asterisk
                            </v-icon>
                        </template>
                        <v-icon right>mdi-trophy-variant</v-icon>
                    </v-badge>
                </div>
                <div class="flex-grow-1"></div>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" app>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.name" router
                                 :to="{ name: link.url}">
                        <v-list-item-action>
                            <v-icon large :color="link.color">{{link.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ link.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-content>
                <router-view></router-view>
            </v-content>
            <v-footer
                    app
                    color="#b34dab"
                    class="white--text"
            >
                <span>MyPrep</span>
                <div class="flex-grow-1"></div>
                <span>www.myprep.co.za</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&copy; 2019</span>
            </v-footer>
        </v-app>
    </div>
</template>
<script>
    export default {
        components: {},
        props: {
            source: String,

        },
        data: () => ({
            drawer: false,
            drawerRight: null,
            right: false,
            left: false,
            loveCount: 0,
            links: [
                {color: '#b34dab', icon: 'mdi-home-circle-outline', url: 'home', name: 'Dashboard',},
                {color: '#00aeeb', icon: 'mdi-television-classic', url: 'videos', name: 'She Conquers TV'},
                {color: '#4cad4a', icon: 'mdi-ribbon', url: 'know-your-prep', name: 'Know Your Prep '},
                {color: '#002148', icon: 'mdi-exit-run', url: 'home', name: 'Sex Health Answers'},
                {color: '#ffaa01', icon: 'mdi-road-variant', url: 'she-conquers-roadmaps', name: 'She Conquers Roadmap'},
                {color: '#ffaa01', icon: 'mdi-television-classic', url: 'home', name: 'MTV SHUGA'},
            ],
        }),

        computed: {
            counter() {
                return this.$store.getters.counter
            }
        }
    }
</script>