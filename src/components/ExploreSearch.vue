<template>
    <v-container class="explore-search spacing">
        <v-layout row wrap>
            <v-flex xs9 sm10 md10 lg10 class="text-xs-left">
                <v-text-field v-model="search.name" placeholder="Search space by address or city" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs3 sm2 md2 lg2 class="text-xs-left">
                <v-btn flat class="search-btn" @click="searchSpace">Search</v-btn>
            </v-flex>
            <v-flex xs12 sm8 md9 lg9 class="text-xs-left">
                <label class="label">Show</label><br>
                <v-checkbox v-for="(a, i) in types" :key="i" color="#20d696" class="type-checkbox" v-model="search.type" :value="a" :label="a"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm4 md3 lg3 class="text-xs-left sort">
                <label class="label">Sort By</label><br>
                <v-select :items="items" value="Lowest Price" flat background-color="#fafafa" solo class="select-input"></v-select>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="tex-xs-right filters">
                <v-expansion-panel>
                    <v-expansion-panel-content>
                        <template v-slot:header>
                            <h5 class="t-r">Show Filters</h5>
                        </template>

                        <v-layout row wrap p-0 m-0>
                            <v-flex xs12>
                                <h5>Price <span class="slider-price">{{"£" + search.price}}</span></h5>
                                <v-slider
                                :min="1"
                                :max="1000"
                                :height="10"
                                thumb-color="#20d696"
                                :thumb-label="'always'"
                                :thumb-size="50"
                                track-color="#111111"
                                v-model="search.price">
                                </v-slider>
                            </v-flex>
                            <v-flex xs12>
                                <label class="label">Desk Number</label><br>
                                <v-text-field v-model="search.desks" placeholder="Number of desks" background-color="#f1f3f2" solo class="info-input"></v-text-field>
                            </v-flex>
                            <v-flex xs12 mt-2>
                                <label class="label">Industries</label><br>
                                <v-checkbox v-for="(a, i) in industries" :key="i" color="#20d696" class="type-checkbox" v-model="search.industry" :value="a" :label="a"></v-checkbox>
                            </v-flex>
                            <v-flex xs12 mt-4>
                                <label class="label">Amenities</label><br>
                                <v-checkbox v-for="(a, i) in amenities" :key="i" color="#20d696" class="type-checkbox" v-model="search.amenity" :value="a" :label="a"></v-checkbox>
                            </v-flex>
                        </v-layout>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '@/services/Api'

export default {
    name: 'ExploreSearch',
    data: function(){
        return{
            search: {
                type: [],
                price:100,
                industry: [],
                amenity: []
            },
            industries: ["ecommerce", "webtools/saas", "aedia", "agency", "mobile", "gaming", "vc", "hardware", "socail media", "fintech", "marketing"],
            amenities: ["printing", "meeting rooms", "pets allowed", "lockers", "coffee/tea", "communal area", "parking available", "kitchen", "24h access", "showers", "handicapped access", "bike storage", "wi-fi", "security"],
            types: ["office/desk", "meeting room", "warehouse", "self store"],
            items: ["Lowest Price", "Highest Price"],
        }
    },
    methods: {
        searchSpace: function(){
            let $object  = new Api('/user/login')
            console.log(this.search)
            // $object.post(this.loginData).then(resp => {
            //     this.$store.commit('refreshUser', resp)
            //     this.closeDialog()
            // }).catch((error) => {
            //     this.showMessage(error.response.data.message)
            // })
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.explore-search{
    max-width: 1300px;
    .label{
        color: $text-medium;
        font-size: 14px;
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
        .v-input__slot{
            height: 70px;
            border: 1px solid #cccccc !important;
            box-shadow: none !important;
        }
    }
    .select-input{
        width: fit-content;
        margin-top: .5rem;
        .v-input__slot{
            border: 1px solid #cccccc !important;
            box-shadow: none !important;
            font-size: 14px;
        }
        .v-icon{
            font-size: 16px;
            margin-top: .1rem;
        }
    }
    .type-checkbox{
        width: 25%;
        display: inline-block;
        cursor: pointer;
        text-transform: capitalize;
        label{
            font-size: 14px;
        }
        .v-messages{
            display: none;
        }
        .v-input__slot{
            margin-bottom: 0;
        }
        .v-icon{
            font-size: 20px;
            margin-top: .1rem;
            display: block !important;
        }
    }
    .search-btn{
        width: 100%;
        height: 70px;
        background: $dark-green;
        border: $text-medium;
        font-weight: 600;
        margin: 1rem 0;
        color: #555555;
    }
    .filters{
        .v-expansion-panel{
            background: transparent !important;
            box-shadow: none;
            .v-expansion-panel__container{
                background: transparent;
                .v-expansion-panel__header{
                    padding: 1rem 0;
                }
                .v-icon{
                    display: none;
                }
            }
        }
        .slider-price{
            font-size: 20px;
            margin-left: 1rem;
            color: $dark-green;
        }
        .v-slider__track-fill{
            background-color: #20d696 !important;
        }
    }
}
@media only screen and (max-width: 550px){
    .explore-search{
        max-width: 100%;
        padding: 20px !important;
        .type-checkbox{
            width: 50%;
        }
        .sort{
            margin-top: 2rem;
        }
    }
}
@media only screen and (min-width: 551px) and (max-width: 960px){
    .explore-search{
        max-width: 100%;
        padding: 30px 20px !important;
        .type-checkbox{
            width: 33%;
        }
    }
}
</style>
