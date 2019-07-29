<template>
    <v-container class="details-form">
        <v-form ref="details">
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12 class="text-xs-left" v-if="$vuetify.breakpoint.xs">
                <h1 class="heading">Share a Space</h1>
                <div class="current"><span :class="{'active': $route.path.includes('info')}">-</span> 02. Details</div>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="text-xs-left">
                <label class="label">About</label>
                <v-textarea v-model="details.about" required no-resize solo :rules="nameRules" placeholder="Name your space" background-color="#f1f3f2" class="info-input"></v-textarea>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="text-xs-left" mt-4 mb-4>
                <p>Opening Hours</p>
            </v-flex>
            <v-flex xs4 sm4 md3 lg2 class="text-xs-left">
                <label class="label">Weekdays</label>
            </v-flex>
            <v-flex xs8 sm8 md9 lg10 class="text-xs-left" mb-3>
                <div class="pick-time">
                    <vue-timepicker v-model="details.toDate" format="hh:mm A" :minute-interval="5" :hide-clear-button="true"></vue-timepicker>
                    <vue-timepicker v-model="details.fromDate" format="hh:mm A" :minute-interval="5" :hide-clear-button="true"></vue-timepicker>
                </div>
            </v-flex>
            <v-flex xs4 sm4 md3 lg2 class="text-xs-left">
                <label class="label">Saturday</label>
            </v-flex>
            <v-flex xs8 sm8 md9 lg10 class="text-xs-left">
                <v-checkbox color="#20d696" class="time-checkbox" v-model="details.saturday" :value="false" label="Open"></v-checkbox>
            </v-flex>
            <v-flex xs4 sm4 md3 lg2 class="text-xs-left">
                <label class="label">Sunday</label>
            </v-flex>
            <v-flex xs8 sm8 md9 lg10 class="text-xs-left">
                <v-checkbox color="#20d696" class="time-checkbox" v-model="details.sunday" :value="false" label="Open"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="text-xs-left" mt-4>
                <label class="label">Industries</label><br>
                <v-checkbox v-for="(a, i) in industries" :key="i" color="#20d696" class="type-checkbox" v-model="details.industry" :value="a" :label="a"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="text-xs-left" mt-5>
                <label class="label">Amenities</label><br>
                <v-checkbox v-for="(a, i) in amenities" :key="i" color="#20d696" class="type-checkbox" v-model="details.amenity" :value="a" :label="a"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="text-xs-left" mt-5>
                <v-btn flat class="submit" @click="submit">Continue <v-icon>arrow_right_alt</v-icon></v-btn>
            </v-flex>
        </v-layout>
        </v-form>
    </v-container>
</template>
<script>
import VueTimepicker from 'vuejs-timepicker'
import Api from '@/services/Api'

export default {
    name: 'DetailsForm',
    components: { VueTimepicker },
    data: function(){
        let data  = this.$store.state.user.email
        return{
            details: {
                type: [],
                email: data,
                toDate: {
                    hh: "09",
                    mm: "00",
                    A: "AM"
                },
                fromDate: {
                    hh: "09",
                    mm: "00",
                    A: "PM"
                },
                industry: [],
                amenity: []
            },
            industries: ["ecommerce", "webtools/saas", "aedia", "agency", "mobile", "gaming", "vc", "hardware", "socail media", "fintech", "marketing"],
            amenities: ["printing", "meeting rooms", "pets allowed", "lockers", "coffee/tea", "communal area", "parking available", "kitchen", "24h access", "showers", "handicapped access", "bike storage", "wi-fi", "security"],
            nameRules: [v => !!v || 'Field is required'],
        }
    },
    methods: {
        submit: function(){
            if(this.$refs.details.validate()){
                let $object = new Api('/space/details')
                $object.post({spaceId: this.$store.state.newSpace._id, data: this.details}).then(resp => {
                    this.$store.commit('setNewSpace', resp)
                    this.$router.push('/share/photos')
                })
            }
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.details-form{
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
        width: 25%;
        display: inline-block;
        margin-top: 0;
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
        }
    }
    .pick-time{
        width: 60%;
        padding: .3rem .5rem;
        border-radius: 1px;
        background: $form-side;
        border: 1px solid #cccccc;
        .time-picker{
            width: 50%;
            display: inline-block;
            input.display-time{
                border: none;
                width: fit-content;
                font-size: 14px;
            }
        }
    }
    .time-checkbox{
        width: fit-content;
        margin-top: 0;
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
        }
    }
    input, textarea{
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
        color: #555555;
        .v-icon{
            font-size: 24px;
            margin-left: 1rem;
            font-weight: 500;
        }
    }
}
@media only screen and (max-width: 550px){
    .details-form{
        max-width: 100%;
        padding: 30px 20px !important;

        .pick-time{
            width: 100%;
        }

        .type-checkbox{
            width: 50%;
        }
    }
}
@media only screen and (max-width: 960px){
    .details-form{
        max-width: 100%;
        padding: 30px 20px !important;

        .pick-time{
            width: 100%;
        }

        .type-checkbox{
            width: 50%;
        }
    }
}
@media only screen and (min-width: 961px) and (max-width: 1264px){
    .details-form{
        max-width: 100%;
        padding: 30px 20px !important;

        .pick-time{
            width: 80%;
        }

        .type-checkbox{
            width: 33%;
        }
    }
}
</style>
