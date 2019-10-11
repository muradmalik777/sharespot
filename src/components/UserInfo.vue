<template>
    <v-container class="user-info spacing">
        <v-layout row wrap>
            <v-flex xs12 sm8 md10 lg10>
                <h1 class="capitalize">{{$store.state.user.name}}</h1>
                <p>{{$store.state.user.email}}</p>
            </v-flex>

            <v-flex xs12 sm4 md2 lg2>
                <v-btn flat class="edit-profile-btn capitalize" @click="open">edit profile information</v-btn>
                <edit :dialog="dialog" @close="close"></edit>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import ProfileDialog from '@/components/ProfileDialog'
export default {
    name: 'UserInfo',
    components: { 'edit': ProfileDialog },
    data: function(){
        return{
            dialog: false,
        }
    },
    methods: {
        close: function(){
            this.dialog = false
        },
        open: function(){
            this.dialog = true
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.user-info{
    max-width: 1300px;

    .edit-profile-btn{
        border: 1px solid $text-light;
        margin: 2rem 0 0 0;
    }
}
@media only screen and (max-width: 550px){
    .user-info{
        padding: 30px 20px !important;
    }
}
</style>
