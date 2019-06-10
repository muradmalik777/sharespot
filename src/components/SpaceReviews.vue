<template>
    <v-container class="space-reviews bg-grey spacing">
        <v-layout row wrap>
            <v-flex xs12 md12 lg12>
                <carousel :autoplay="true" :nav="false" :dots="false" :autoWidth="true">
                    <div class="rating">
                        <h1 class="t-c">4.9</h1>
                        <p class="t-c">Bases on 200 reviews</p>
                    </div>
                    <div class="reviews" v-for="item in 10" :key="item">
                        <p class="date">22-08-2018 <span class="f-r"><v-icon class="icon">star</v-icon>4.9</span></p>
                        <h3 class="capitalize m-t-s m-b-s">perfect</h3>
                        <p>Based in the centre of Camden's Stables Market, The Atrium is easily accessible from Camden Town underground (6 minute walk) or 
                            Camden Road overground (8 minute walk). It takes less than 15 minutes from Euston and 20 minutes from Kings Cross.</p>
                    </div>
                </carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import carousel from 'vue-owl-carousel'

export default {
    name: 'SpaceReviews',
    components: {
        carousel,
    },
    data: function(){
        return{

        }
    }    
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.space-reviews{
    max-width: 100%;

    .rating, .reviews{
        width: 350px;
        display: block;
        margin: 1rem;
        height: 300px;
        background: $white;
    }
    .rating{
        padding: 100px 20px;
    }
    .reviews{
        padding: 25px;
    }
    .date{
        color: $text-light;
        font-size: 12px;
        .icon{
            width: fit-content;
            font-size: 18px;
            margin-right: 5px;
        }
    }
}
</style>
