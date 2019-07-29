<template>
    <v-container class="photos-form">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <h2 class="p-l">Photos</h2>
            </v-flex>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <vue-upload-multiple-image
                dragText="Drag and Drop"
                browseText="Browse Photos"
                :maxImage="10"
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage">
                Murad MAlik
                </vue-upload-multiple-image>
            </v-flex>
            <v-flex xs12 md12 lg12 mt-3 class="text-xs-left">
                <h2 class="p-l">Videos</h2>
            </v-flex>
            <v-flex xs9 sm10 md10 lg10 class="text-xs-left">
                <v-text-field v-model="video" required placeholder="Add video URL" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs3 sm2 md2 lg2 class="text-xs-left">
                <v-btn flat class="search-btn" @click="addVideo">Add Video</v-btn>
            </v-flex>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <iframe class="video-preview" v-for="(video, i) in request.videos" :key="i" :src="video"></iframe>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '@/services/Api'
import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
    name: 'PhotosForm',
    components: {
        VueUploadMultipleImage,
    },
    data: function(){
        return{
            request: {
                images: [],
                videos: []
            },
            video: null
        }
    },
    methods: {
        uploadImageSuccess: function(formData, index, fileList){
            console.log(formData)
            console.log(index)
            console.log(fileList)
        },
        beforeRemove (index, done, fileList) {
            var r = confirm("Remove this image")
            if (r == true) {
                done()
            }
        },
        editImage (formData, index, fileList) {},
        addVideo: function(){
            console.log(this.video)
            if(this.video){
                this.request.videos.push(this.video.replace("watch", "embed"))
                this.video = null
            }
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.photos-form{
    max-width: 85%;
    margin: 0;

    .image-container{
        width: calc(100% - 16px);
        height: 350px;
        margin: 1rem;
        .image-icon-drag{
            display: none;
        }
        .drag-text{
            font-size: 36px;
            font-family: 'sharespot-Light' !important;
        }
        .browse-text{
            font-size: 18px;
            color: $dark-green !important;
            text-decoration: underline;
        }
        .preview-image{
            width: 100%;
            height: 310px;
            padding: 0;
            .image-overlay{
                // height: 360px;
            }
            .show-image{
                width: 100%;
                height: 300px;
                .show-img{
                    max-width: 100%;
                    max-height: 300px;
                    display: block;
                    margin: auto;
                }
            }
        }
        .image-bottom{
            .image-bottom-left{
                display: none;
            }
        }
    }
    .image-list-container{
        max-width: 100%;
        max-height: 100px;
        margin: 1rem;
        .image-list-item{
            width: 100px;
            height: 100px;
            border: none;
            .show-img{
                max-width: 100px;
                max-height: 90px;
            }
            .icon.add-image-svg{
                width: 30px;
                height: 30px;
            }
        }
    }

    input{
        font-size: 14px;
        &::placeholder{
            font-size: 14px;
            color: #aaaaaa !important;
        }
    }
    .info-input{
        margin-top: 1rem;
        margin-left: 1rem;
        .v-input__slot{
            height: 70px;
            border: 1px solid #cccccc !important;
            box-shadow: none !important;
        }
    }
    .search-btn{
        width: 100%;
        height: 70px;
        background: #f1f3f2;
        border: $text-medium;
        font-weight: 500;
        margin: 1rem 0;
        color: #555555;
        border: 1px solid #cccccc !important;
        border-left: none !important;
    }
    .video-preview{
        width: 150px;
        height: 150px;
        margin-left: 1rem;
    }
}
</style>
