<template>
    <v-container class="share-space">
        <v-layout justify-center row wrap>
            <v-flex xs12 sm4 md5 lg5>
                <div class="heads">
                    <h1 class="heading">Share a Space</h1>
                    <p>Four easy steps to share your space</p>
                    <div class="current"><span :class="{'active': $route.path.includes('info')}">-</span> 01. General Information</div>
                    <div class="current"><span :class="{'active': $route.path.includes('details')}">-</span> 02. Details</div>
                    <div class="current"><span :class="{'active': $route.path.includes('photos')}">-</span> 03. Photos & Videos</div>
                </div>
            </v-flex>

            <v-flex xs12 sm8 md7 lg7 class="text-xs-center forms" elevation-3>
                <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name:'ShareSpace',
    data: function(){
        return{

        }
    }    
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.share-space{
    max-width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background: $form-side;
    .heads{
        width: fit-content;
        margin: 10rem auto;
        .heading{
            font-size: 46px;
            width: fit-content;
        }
        p{ margin-bottom: 3rem; }
        .current{
            margin-bottom: 1rem;
            font-size: 18px;
            span{
                background: #333333;
                color: #333333;
                font-size: 16px;
                margin-right: 1rem;
            }
            .active{
                background: $dark-green;
                color: $dark-green;
            }
        }
    }
    .forms{
        min-height: 100vh;
        background: $form-color;
    }
}
</style>
