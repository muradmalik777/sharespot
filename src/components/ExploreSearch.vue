<template>
    <v-container class="explore-search spacing">
        <v-layout row wrap>
            <v-flex xs10 sm10 md10 lg10 class="text-xs-left">
                <v-text-field v-model="search.data" required :rules="nameRules" placeholder="Name your space" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs2 sm2 md2 lg2 class="text-xs-left">
                <v-btn flat class="search-btn">Search</v-btn>
            </v-flex>
            <v-flex xs12 sm8 md9 lg9 class="text-xs-left">
                <label class="label">Show</label><br>
                <v-checkbox v-for="(a, i) in types" :key="i" color="#20d696" class="type-checkbox" v-model="search.type" :value="a" :label="a"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm4 md3 lg3 class="text-xs-left">
                <label class="label">Sort By</label><br>
                <v-select :items="items" flat background-color="#fafafa" solo class="select-input"></v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'ExploreSearch',
    data: function(){
        return{
            search: {
                type: []
            },
            types: ["office/desk", "meeting room", "warehouse", "self store"],
            items: ["Lowest Price", "Highest Price"]
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
        margin-top: 2rem;
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
        width: fit-content;
        display: inline-block;
        margin-right: 2rem;
        cursor: pointer;
        text-transform: capitalize;
        label{
            font-size: 14px;
        }
        .v-icon{
            font-size: 20px;
            margin-top: .1rem;
        }
    }
    .search-btn{
        width: 100%;
        height: 70px;
        background: $dark-green;
        border: $text-medium;
        font-weight: 600;
        margin: 2rem 0;
        color: #555555;
    }
}
</style>
