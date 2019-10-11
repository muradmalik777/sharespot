<template>
    <v-container grid-list-lg class="about-space spacing-extra">
        <v-layout row wrap>
            <v-flex xs12 md8 lg8>
                <h2 class="title capitalize">About</h2>
                <p>{{space.details.about}}</p>

                <h2 class="title capitalize">Opening Hours</h2>
                <div class="opening-hours">
                    <p class="capitalize">Weekdays: {{space.details.fromDate.hh}}:{{space.details.fromDate.mm}} {{space.details.fromDate.A}} - {{space.details.toDate.hh}}:{{space.details.toDate.hh}} {{space.details.toDate.A}}</p>
                </div>
                <div class="opening-hours" v-if="space.details.saturday">
                    <p class="capitalize">Saturdays: {{space.details.fromDate.hh}}:{{space.details.fromDate.mm}} {{space.details.fromDate.A}} - {{space.details.toDate.hh}}:{{space.details.toDate.hh}} {{space.details.toDate.A}}</p>
                </div>
                <div class="opening-hours" v-if="space.details.sunday">
                    <p class="capitalize">Sundays: {{space.details.fromDate.hh}}:{{space.details.fromDate.mm}} {{space.details.fromDate.A}} - {{space.details.toDate.hh}}:{{space.details.toDate.hh}} {{space.details.toDate.A}}</p>
                </div>
                <h2 class="title capitalize">how to get there</h2>
                <p>{{space.info.direction}}</p>
                <h2 class="title capitalize">Industry</h2>
                <div class="perks" v-for="(item, i) in space.details.industry" :key="item">
                    <p class="capitalize">{{item}}</p>
                </div>
                <h2 class="title capitalize">Amenities</h2>
                <div class="perks" v-for="(item, i) in space.details.amenity" :key="item">
                    <p class="capitalize">{{item}}</p>
                </div>
            </v-flex>
            <v-flex xs12 md4 lg4>
                <div class="host-price">
                    <div class="price">
                        <p class="tag m-b-s">Price</p>
                        <h2>{{"£" + space.info.pricePerDay + "/day"}} <span class="month">{{"£" + space.info.pricePerMonth + "/month"}}</span></h2>
                    </div>
                    <div class="host">
                        <p class="tag m-b-s">Host</p>
                        <h4>{{space.user.name}} <span><v-icon class="host-icon">call</v-icon><v-icon class="host-icon">chat_bubble_outline</v-icon><v-icon class="host-icon">mail_outline</v-icon></span></h4>
                    </div>
                    <v-btn flat class="full-width booking">Book Now</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'AboutSpace',
    data: function(){
        let data = this.$store.state.selectedSpace
        return{
            space: data
        }
    },
    mounted: function(){
        
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.about-space{
    max-width: 1300px;

    .title{
        margin: 2rem 0px
    }
    .opening-hours{
        display: inline-block;
        width: 32%;
    }
    .perks{
        display: inline-block;
        width: 25%;
    }
    .host-price{
        width: 90%;
        margin: auto !important;
        min-height: 250px;
        margin: 30px;
        background: $light-green;
        .tag{
            color: $darkest-green;
            font-size: 14px;
        }
        .month{
            font-size: 14px;
            margin-left: 3rem;
        }

        div{
            width: 100%;
            padding: 25px 30px;
        }
        .price{
            border-bottom: 1px solid $white;
        }
        .host{
            span{
                margin-left: 4rem;
                .host-icon{
                    background: $white;
                    padding: 5px;
                    border-radius: 100%;
                    font-size: 18px;
                    margin-left: .5rem;
                    cursor: pointer;
                    &:hover{
                        color: $dark2;
                    }
                }
            }
        }
        .booking{
            margin: 1rem 0 0;
            background: $dark-green;
            height: 65px;
            font-weight: 600;
        }
    }
}
</style>
