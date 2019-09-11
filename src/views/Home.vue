<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                justify="center"
                align="center"
        >
            <v-col class="shrink">
                <v-list>
                    <v-list-item :color="link.color" class="mb-1 home-links" v-for="link in links" :key="link.name"
                                 router :to="link.url">
                        <v-list-item-action>
                            <v-icon large :color="link.color">{{link.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="text-uppercase">{{ link.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '../components/HeslloWorld.vue'
    // <iframe src="https://myprep.co.za/gamification" height="800" frameborder="0" allowtransparency="true" style="padding:10px;" />
    export default {
        name: 'home',
        components: {
            // HelloWorld
        },
        data: () => ({
            links: [
                {color: '#b34dab', icon: 'mdi-home-circle-outline', url: '/', name: 'Dashboard',},
                {color: '#00aeeb', icon: 'mdi-television-classic', url: 'videos', name: 'She Conquers TV'},
                {color: '#4cad4a', icon: 'mdi-ribbon', url: 'know-your-prep', name: 'Know Your Prep '},
                {color: '#002148', icon: 'mdi-exit-run', url: 'home', name: 'Sex Health Answers'},
                {color: '#ffaa01', icon: 'mdi-road-variant', url: 'she-conquers-roadmaps', name: 'She Conquers Roadmap'},
                {color: '#4cadc9', icon: 'mdi-television-classic', url: 'home', name: 'MTV SHUGA'},
            ]
        }),
        created() {

        }
    }
</script>
<style scoped>
    .container.fill-height {
        background: url("../assets/girls_bg.jpg") 45% -100px / cover repeat;
    }

    .theme--light.v-list {
        background: transparent;
    }

    .home-links {
        background: white;
    }
</style>
