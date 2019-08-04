<template>
    <div class="bg-grey">
    <v-container grid-list-lg class="spaces spacing">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12 v-if="home">
                <h1 class="capitalize">features spaces</h1>
                <p class="m-b-2">Book from thousands of unique work and meeting spaces</p>
            </v-flex>
            <v-flex xs12 sm6 md4 lg4 v-for="(space, i) in spaces" :key="i" @click="displaySpace(space)" class="m-b pointer">
                <v-img class="space-image" :src="getImage(space.photos.photos)"></v-img>
                <v-card flat class="space-details">
                    <p class="uppercase name m-b-s">{{space.user.name}} <span class="f-r"><v-icon class="icon">star</v-icon>4.9</span></p>
                    <h2 class="capitalize">{{space.name}}</h2>
                    <p class="uppercase location m-t-s"><v-icon class="icon">location_on</v-icon> {{space.info.direction}}</p>
                    <h4 class="price m-t">{{"£" + space.info.pricePerDay + "/day"}}</h4>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>
<script>
import Api from '@/services/Api'

export default {
    name: 'FeaturedSpaces',
    props: ['home', 'spaceData'],
    data: function(){
        return{
            spaces: []
        }
    },
    mounted: function(){
        this.spaces = this.$props.spaceData
    },
    watch: {
        spaceData: function(newVal, oldVal){
            this.spaces = newVal
        }
    },
    methods: {
        getImage: function(photos){
            let $obj = new Api()
            return $obj.base_url+'/'+ photos[0]
        },
        displaySpace: function(space){
            this.$store.commit('changeSelectedSpace', space)
            this.$router.push('/space/'+space._id)
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.spaces{
    max-width: 1300px;
    .space-image{
        width: 100%;
        height: 220px;
    }
    .space-details{
        padding: 20px;
        border: 1px solid #dddddd;
        &:hover{
            background: $light-green;
            transition: background-color .35s;
             h2{
                color: $dark-green;
                transition: color .35s;

            }
        }

        p{
            color: $text-dark;
            font-size: 12px;
            .icon{
                width: fit-content;
                font-size: 18px;
                margin-right: 5px;
            }
        }
        .location{
            color: $text-medium;
        }
        .price{
            color: $dark-green;
        }
    }
}
@media only screen and (max-width: 550px){
    .spaces{
        padding: 30px 20px !important;
    }
}
</style>