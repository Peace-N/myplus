<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row justify="center" align="center">
                <iframe src="https://myprep.co.za/gamification" width="100%" height="800" frameborder="0" allowtransparency="true"  />
        </v-row>
    </v-container>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '../components/HeslloWorld.vue'
    export default {
        name: 'home',
        components: {
            // HelloWorld
        },
        data: () => ({

        }),
        created() {

        }
    }
</script>
<style scoped>
    .container.fill-height {
        background: url("../assets/girls_bg.jpg") 45% -100px / cover repeat-y;
    }

    .theme--light.v-list {
        background: transparent;
    }

    .home-links {
        background: white;
    }
    .container {
        padding:0 !important;
    }
</style>
