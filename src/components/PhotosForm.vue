<template>
    <v-container class="photos-form">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <h2 class="p-l">Photos</h2>
            </v-flex>
            <v-flex xs12 md12 lg12 class="text-xs-center">
                <div class="upload-container">
                    <h2 class="t-c drag-drop" v-show="$refs.upload && $refs.upload.drop">Drag and drop</h2>
                    <file-upload
                        ref="upload"
                        v-model="images"
                        :maximum="10"
                        :drop="true"
                        :multiple="true"
                        @input="updateFiles">
                        Browse Photos
                    </file-upload>

                    <div class="file-preview">
                        <v-img class="file-image" v-for="(item, i) in previews" :key="i" :src="item"></v-img>
                    </div>
                </div>
            </v-flex>
            <v-flex xs12 md12 lg12 mt-3 class="text-xs-left">
                <h2 class="p-l">Videos</h2>
            </v-flex>
            <v-flex xs9 sm10 md10 lg10 class="text-xs-left">
                <v-text-field v-model="video" required placeholder="Add video URL" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs3 sm2 md2 lg2 class="text-xs-left">
                <v-btn flat class="add-btn" @click="addVideo">Add Video</v-btn>
            </v-flex>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <iframe class="video-preview" v-for="(video, i) in videos" :key="i" :src="video"></iframe>
            </v-flex>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <v-btn flat class="submit" @click="submit">Share This Space Now</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '@/services/Api'
import VueUploadComponent from 'vue-upload-component'

export default {
    name: 'PhotosForm',
    components: {
        'file-upload': VueUploadComponent
    },
    data: function(){
        return{
            images: [],
            videos: [],
            video: null,
            previews: []
        }
    },
    methods: {
        updateFiles: function(data){
            this.images = data
            this.images.forEach(a => {
                this.previews.push(window.URL.createObjectURL(a.file))
            })
        },
        addVideo: function(){
            if(this.video){
                this.videos.push(this.video.replace("watch", "embed"))
                this.video = null
            }
        },
        submit: function(){
            let $object = new Api('/space/photos')
            let formData = new FormData()
            this.images.forEach(image => {
                formData.append('images', image.file)
            })
            this.videos.forEach(video => {
                formData.append('videos', video)
            })
            formData.append('space_id', this.$store.state.newSpace._id)
            $object.post(formData).then(resp => {
                this.$router.push('/dashboard')
            })
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.photos-form{
    max-width: 85%;
    margin: 0;
    .upload-container{
        border: 1px solid #cccccc;
        width: calc(100% - 16px);
        min-height: 350px;
        overflow: auto;
        margin: 1rem 0 0 1rem;
        padding-top: 2rem;
        color: $dark-green !important;
        position: relative;

        .file-uploads{
            label{
                cursor: pointer !important;
            }
        }
        .file-preview{
            position: absolute;
            bottom: 0;
            width: calc(100% - 16px);
            margin: 1rem 0 0 1rem;
            height: 150px;
            .file-image{
                width: 100px;
                height: 100px;
                margin: 1rem;
                float: left;
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
    .add-btn{
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
    .submit{
        height: 60px;
        background: $dark-green;
        border: $text-medium;
        margin: 2rem 1rem;
        color: $dark2;
        text-transform: capitalize;
    }
}
</style>
