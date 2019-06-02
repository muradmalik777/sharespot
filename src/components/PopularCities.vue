<template>
    <v-container grid-list-lg class="cities m-t-3 spacing">
        <v-layout row wrap>
            <v-flex xs12>
                <h1 class="capitalize">popular cities</h1>
                <p class="m-b-2">Locations important for Startups</p>
            </v-flex>
            <v-flex xs12 md3 lg3 v-for="(city, index) in cities" :key="index">
                <v-card class="city-box pointer"  @mouseenter="show(index)" @mouseleave="hide()">
                    <v-img contain :src="getImage(index)"></v-img>
                    <h3 class="city-name uppercase">{{city}}</h3>
                    <div class="overlay" v-if="cityNumber === index"></div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'PopularCities',
    data: function(){
        return{
            cities: ["london", "newyork", "paris", "seoul"],
            cityNumber: null
        }
    },
    methods: {
        getImage: function(index){
            return require('../assets/images/popular_city' + (index+1) + ".jpg")
        },
        show: function(data){
            this.cityNumber = data
        },
        hide: function(){
            this.cityNumber = null
        }
    }
}
</script>
<style lang="scss">
.cities{
    max-width: 1300px;
    .city-box{
        position: relative;
        
        .city-name{
            color: #ffffff;
            font-weight: 700;
            font-size: 22px;
            position: absolute;
            top: 42%;
            left: 35%;
            width: 30%;
            text-align: center;
            z-index: 12;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00000070;
            z-index: 10;
        }
    }
}
</style>
