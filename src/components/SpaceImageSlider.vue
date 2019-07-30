<template>
    <v-container class="space-slider bg-grey">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12>
                <v-carousel height="600" hide-delimiters>
                    <v-carousel-item
                    v-for="(item,i) in space.photos.photos"
                    :key="i"
                    :src="getImage(item)"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs12 md12 lg12 class="space-title spacing text-xs-center">
                <p class="uppercase" v-if="space.type.length > 1"><span v-for="(type, i) in space.type" :key="i">{{type}}</span></p>
                <p class="uppercase" v-else><span>{{space.type[0]}}</span></p>
                <h1 class="capitalize">{{space.name}}</h1>
                <p class="uppercase location m-t-s"><v-icon class="icon">location_on</v-icon> 14 Bedford Square, WC1B 3JA, London <span class="m-l"><v-icon class="icon">star</v-icon>4.9</span></p>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '@/services/Api'

export default {
    name: 'SpaceImageSlider',
    data: function(){
        let data = this.$store.state.selectedSpace
        return{
            space: data
        }
    },
    methods: {
        getImage: function(photo){
            let $obj = new Api()
            return $obj.base_url+'/'+ photo
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.space-slider{
    max-width: 100%;
    margin: 0px;
    padding: 0px;

    .space-title{
        h1{
            font-size: 42px;
        }
        p{
            font-size: 12px;
        }
        .location{
            color: $text-medium;
            .icon{
                width: fit-content;
                font-size: 18px;
                margin-right: 5px;
            }
        }
    }
}
</style>
