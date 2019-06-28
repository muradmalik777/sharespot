<template>
    <v-container grid-list-lg class="user-payments spacing">
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Your Earnings</h2>
            </v-flex>
            <v-flex xs12 sm5 md4 lg4>
                <v-card flat class="user-earning">
                    <v-select :items="items" background-color="#cccccc" :label="'Time Span'" v-model="data" @change="value = data" outline></v-select>
                    <p>You have earned</p>
                    <h1 class="amount"><span>£</span> 2247.00</h1>
                </v-card>
            </v-flex>

            <v-flex xs12 sm7 md8 lg8>

            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'UserInfo',
    data: function(){
        return{
            data: null,
            items: ['Last Month', 'Next Month'],
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.user-payments{
    max-width: 1300px;

    .user-earning{
        padding: 20px;
        border: 1px solid $light;

        .amount{
            font-size: 42px;
            span{ font-size: 32px;}
        }
    }
    .user-billing{
        padding: 20px;
        border: 1px solid $light;
        border-top: 0;
    }
}
@media only screen and (max-width: 550px){
    .user-payments{
        padding: 20px !important;
    }
}
</style>
