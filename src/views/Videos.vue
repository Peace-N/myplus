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
                    <div v-for="video in videos" class="mb-2">
                        <v-card :flat="flat" class="mx-auto background-transparent" max-width="320">
                        <v-img
                                class="white--text"
                                height="160px"
                                :src="imagePath(video.cover)">
                        </v-img>
                            <div class="image-actions">
                                <img :src="imagePath('play-icon.png')" @click.stop="dialog = true" @click="setVideoPlayer(video.name, video.video)" />
                            </div>
                        <v-card-text class="background-white">
                            <span class="headline text--primary">{{video.name}}</span><br>
                            <span>
                                <span>Whitsunday Island, Whitsunday Islands</span>
                            </span>
                        </v-card-text>
                        <v-card-actions class="background-white">
                            <v-icon small light @click="setLoveCounts">mdi-heart-multiple-outline</v-icon>
                            <v-icon small light right>mdi-share-variant</v-icon>
                        </v-card-actions>
                        </v-card>
                    </div>
            </v-col>

<!--            BEGIN DIALOGUE VIDEO PLAYER-->

            <v-dialog
                    v-model="dialog"
                    max-width="100%"
            >
                <v-card>
                    <v-card-title class="headline">{{ currentVideoTitle }}</v-card-title>

                    <v-card-text>
                        <!-- video element -->
                        <vue-plyr>
<!--                            <video :poster="getVideoCover" :src="getVideo">-->
<!--                            </video>-->
                            <div class="plyr__video-embed">
                                <iframe
                                        width="100%"
                                        :src="currentVideoSrc"
                                        allowfullscreen allowtransparency allow="autoplay">
                                </iframe>
                            </div>
                        </vue-plyr>
                    </v-card-text>

                    <v-card-actions>
                        <div class="flex-grow-1"></div>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                        >
                            Disagree
                        </v-btn>

                        <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                        >
                            Agree
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data() {
            console.log('-love-counts', parseInt(window.localStorage.getItem('counter')));
            return {
                dialog: false,
                flat: false,
                elevation: undefined,
                raised: false,
                loveCount: 0,
                videos: [
                    {name: "She Conquers Intro", cover: "1.png", video: "https://youtu.be/HbOfR5cQKf8"},
                    {name: "She Conquers Episode 2", cover: "2.png", video: "sc2-1.m4v"},
                    {name: "She Conquers Episode 3", cover: "3.png", video: "sce1"},
                    {name: "She Conquers Episode 4", cover: "4.png", video: "sce1"},
                    {name: "She Conquers Episode 5", cover: "5.png", video: "sce1"},
                ],
                currentVideoTitle: null,
                currentVideoSrc: null,
            };
        },

        methods: {
            readNews(newsNum) {
                this.$emit("read", newsNum);
            },
            imagePath: function (path) {
                return require('../assets/' + path)
            },
            setVideoPlayer(title, videosrc) {
                this.currentVideoTitle = title;
                this.currentVideoSrc = videosrc;
            },
            setVideoTitle(title) {
                this.currentVideoTitle = title;
            },
            getVideo() {
                return this.currentVideoSrc;
            },
            setLoveCounts() {
                this.$store.dispatch('inrementAction', 1)
                this.loveCount = this.loveCount + 1;
                window.localStorage.setItem('counter', this.loveCount);
            }
        }
    };
</script>
<style scoped>
    .container.fill-height {
        background: #e7e8ea;
    }

    .background-transparent {
        background: transparent
    }

    .background-white {
        background: white
    }
    .v-card {
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
    .v-sheet {
        border-radius: 0 !important;
    }

    .image-actions>img {
        left: calc(50% - 25px);
        opacity: 1;
        position: absolute;
        top: calc(25% - 20px);
        -webkit-transition: opacity .3s ease 0s;
        transition: opacity .3s ease 0s;
        width: 45px;
        height: 45px;
        -o-object-fit: contain;
        object-fit: contain;
    }

    .v-application .headline {
        font-size: 1rem !important;
    }
    .v-dialog {
        margin: 0 !important;
        border-radius: 0 !important;
    }

    .v-dialog > .v-card > .v-card__title {
        background: rgb(0, 174, 235);
    }
    .v-dialog > .v-card > .v-card__text {
        padding: 0;
    }
</style>