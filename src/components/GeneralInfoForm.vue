<template>
    <v-container class="info-form">
        <v-form ref="info">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12 class="text-xs-left" v-if="$vuetify.breakpoint.xs">
                <h1 class="heading">Share a Space</h1>
                <div class="current"><span :class="{'active': $route.path.includes('info')}">-</span> 01. General Information</div>
            </v-flex>

            <v-flex xs12 md12 lg12 class="text-xs-left">
                <label class="label">Space Name</label>
                <v-text-field v-model="space.name" required :rules="nameRules" placeholder="Name your space" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md9 lg9 class="text-xs-left">
                <label class="label">Space Type</label><br>
                <v-checkbox v-for="(a, i) in typeValues" :key="i" color="#20d696" class="type-checkbox" v-model="space.type" :value="a" :label="a"></v-checkbox>
            </v-flex>
            <v-flex xs12 md3 lg3 class="text-xs-left">
                <label class="label">Number of Desks</label>
                <v-text-field v-model="space.desks" required :rules="nameRules" placeholder="e.g 40" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md6 lg6 class="text-xs-left">
                <label class="label">Town/City</label>
                <v-text-field v-model="space.info.city" required :rules="nameRules" placeholder="e.g London" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md6 lg6 class="text-xs-left">
                <label class="label">Postal Code</label>
                <v-text-field v-model="space.info.postalCode" required :rules="nameRules" placeholder="e.g AB345" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md10 lg10 class="text-xs-left">
                <label class="label">Street Address</label>
                <v-text-field v-model="space.info.address" required :rules="nameRules" placeholder="e.g 123 Broadway" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md2 lg2 class="text-xs-left">
                <label class="label">Unit#</label>
                <v-text-field v-model="space.info.unit" required :rules="nameRules" placeholder="e.g 1" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <label class="label">How to get there</label>
                <v-text-field v-model="space.info.direction" required :rules="nameRules" placeholder="enter description" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md6 lg6 class="text-xs-left">
                <label class="label">Office Phone Number</label>
                <v-text-field v-model="space.info.phone" required :rules="nameRules" placeholder="your phone number" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md6 lg6 class="text-xs-left">
                <label class="label">Contact Email</label>
                <v-text-field v-model="space.info.email" required :rules="nameRules" placeholder="your email" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex class="text-xs-left"><p class="c-dark m-t m-b">Enter the pricing information for each time duration you would like to accept bookings for</p></v-flex>
            <v-flex xs12 md6 lg6 class="text-xs-left">
                <label class="label">Price/day</label>
                <v-text-field prefix="£" v-model="space.info.pricePerDay" required :rules="nameRules" placeholder="e.g 50" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md6 lg6 class="text-xs-left">
                <label class="label">Price/month</label>
                <v-text-field prefix="£" v-model="space.info.pricePerMonth" required :rules="nameRules" placeholder="e.g 50" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 md9 lg9 class="text-xs-left">
                <v-checkbox color="#20d696" class="type-checkbox" v-model="space.info.isRegistered" :value="true" label="My company is VAT registered"></v-checkbox>
            </v-flex>
            <v-flex xs12 md12 lg12 class="text-xs-left">
                <label class="label">Please provide your VAT number here</label>
                <v-text-field prefix="MT" v-model="space.info.VAT" required :rules="nameRules" placeholder="VAT number" background-color="#f1f3f2" solo class="info-input"></v-text-field>
            </v-flex>
            <v-flex xs12 class="text-xs-left">
                <v-btn flat class="submit" @click="submit">Continue <v-icon>arrow_right_alt</v-icon></v-btn>
            </v-flex>
        </v-layout>
        </v-form>
    </v-container>
</template>
<script>
import Api from '@/services/Api'

export default {
    name: 'GeneralInfoForm',
    data: function(){
        let data  = this.$store.state.user.email
        return{
            space:{
                type: ["office/desk"],
                info: {
                    email: data,
                    isRegistered: true
                },
            },
            typeValues: ["office/desk", "meeting room", "warehouse", "self store"],
            nameRules: [v => !!v || 'Field is required'],
        }
    },
    // mounted: function(){
    //     if(this.$store.state.newSpace){
    //         this.$router.push('/share/photos')
    //     }
    // },
    methods: {
        submit: function(){
            if(this.$refs.info.validate()){
                let $object = new Api('/space/info')
                this.space.user_id = this.$store.state.user._id
                $object.post(this.space).then(resp => {
                    this.$store.commit('setNewSpace', resp)
                    this.$router.push('/share/details')
                })
            }
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.info-form{
    max-width: 85%;
    margin: 0;
    .flex{
        padding: 0 1rem !important;
    }
    .current{
        margin-bottom: 2rem;
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
    .label{
        color: $text-medium;
        font-size: 14px;
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
    input{
        font-size: 14px;
        &::placeholder{
            font-size: 14px;
            color: #aaaaaa !important;
        }
    }
    .info-input{
        margin-top: .6rem;
        .v-input__slot{
            border: 1px solid #cccccc !important;
            box-shadow: none !important;
        }
    }
    .submit{
        height: 60px;
        background: $dark-green;
        border: $text-medium;
        font-weight: 600;
        margin: 2rem 0;
        color: $dark2;
        text-transform: capitalize;
        .v-icon{
            font-size: 24px;
            margin-left: 1rem;
            font-weight: 500;
        }
    }
}
@media only screen and (max-width: 550px){
    .info-form{
        max-width: 100%;
        padding: 30px 20px !important;
    }
}
@media only screen and (max-width: 960px){
    .info-form{
        max-width: 100%;
        padding: 30px 20px !important;
    }
}
</style>
