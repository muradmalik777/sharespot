<template>
    <v-container class="about-space spacing-extra">
        <v-layout row wrap>
            <v-flex xs12 md9 lg9>
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
            <v-flex xs12 md3 lg3>

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
.about-space{
    max-width: 1300px;

    .title{
        margin: 2rem 0px
    }
    .opening-hours, .perks{
        display: inline-block;
        width: 25%;
    }
}
</style>
