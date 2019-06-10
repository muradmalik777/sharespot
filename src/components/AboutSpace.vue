<template>
    <v-container grid-list-lg class="about-space spacing-extra">
        <v-layout row wrap>
            <v-flex xs12 md8 lg8>
                <h2 class="title capitalize">About</h2>
                <p>The Interchange - Atrium is a brand new, state of the art co-working space in 
                the heart of Camden's famed Stables Market in North London.
                "Fast becoming a renowned hub for start ups and established businesses alike, the space boasts 
                impressive amenities, with a private courtyard, its own restaurant, innovation lab, cafe, bar, and gym. 
                The Atrium is pushing the boundaries into a new age of providing employees with everything they could ever want."</p>

                <h2 class="title capitalize">Opening Hours</h2>
                <div class="opening-hours" v-for="item in 4" :key="item">
                    <p class="capitalize">Weekdays: 8:00 - 18:00</p>
                </div>
                <h2 class="title capitalize">how to get there</h2>
                <p>Based in the centre of Camden's Stables Market, The Atrium is easily accessible 
                    from Camden Town underground (6 minute walk) or Camden Road overground (8 minute walk). 
                    It takes less than 15 minutes from Euston and 20 minutes from Kings Cross.</p>
                <h2 class="title capitalize">how to get there</h2>
                <div class="perks" v-for="item in 8" :key="item">
                    <p class="capitalize">Printing</p>
                </div>
            </v-flex>
            <v-flex xs12 md4 lg4>
                <div class="host-price">
                    <div class="price">
                        <p class="tag m-b-s">Price</p>
                        <h2>£200/day <span class="month">£4,000/month</span></h2>
                    </div>
                    <div class="host">
                        <p class="tag m-b-s">Host</p>
                        <h4>Murad Malik <span><v-icon class="host-icon">call</v-icon><v-icon class="host-icon">chat_bubble_outline</v-icon><v-icon class="host-icon">mail_outline</v-icon></span></h4>
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
        return{

        }
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
    .opening-hours, .perks{
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
            padding: 20px 30px;
        }
        .price{
            border-bottom: 1px solid $white;
        }
        .host{
            span{
                margin-left: 4rem;
                .host-icon{
                    background: $white;
                    padding: 7px;
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
            margin: 1.5rem 0 0;
            background: $dark-green;
            height: 55px;
            font-weight: 600;
        }
    }
}
</style>
