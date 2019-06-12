<template>
    <div class="bg-grey">
    <v-container grid-list-lg class="spaces spacing">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12>
                <h1 class="capitalize">features spaces</h1>
                <p class="m-b-2">Book from thousands of unique work and meeting spaces</p>
            </v-flex>
            <v-flex xs12 md4 lg4 v-for="space in 6" @click="$router.push('/space/' + space)" :key="space" class="m-b-4 pointer">
                <v-img contain :src="getImage(space)"></v-img>
                <v-card class="space-details">
                    <p class="uppercase name m-b-s">space host <span class="f-r"><v-icon class="icon">star</v-icon>4.9</span></p>
                    <h2 class="capitalize">space host</h2>
                    <p class="uppercase location m-t-s"><v-icon class="icon">location_on</v-icon> 14 Bedford Square, WC1B 3JA, London</p>
                    <h4 class="price m-t">£56/day</h4>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>
<script>
export default {
    name: 'FeaturedSpaces',
    data: function(){
        return{
            spaces: []
        }
    },
    methods: {
        getImage: function(index){
            return require('../assets/images/space' + (index) + ".jpg")
        },
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.spaces{
    max-width: 1300px;

    .space-details{
        padding: 20px;
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