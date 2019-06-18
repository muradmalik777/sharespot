<template>
    <div>
        <div class="bg-white">
            <v-container class="support">
                <v-layout row wrap class="spacing">
                    <v-flex xs12 sm12 md12 lg12 mb-4>
                        <h1 class="heading">Support</h1>
                    </v-flex>
                    <v-flex xs12 sm7 md7 lg7>
                        <p>ShareSpot enables businesses to release spare desks, warehouse space and 
                            meeting rooms to likeminded businesses increasing the income for the host 
                            businesses and providing reduced costs and maximum flexibility to sharers. 
                            Book a desk for short or long term, book a meeting room by the hour - or even some warehouse space.</p>
                    </v-flex>
                    <v-flex xs12 sm1 md1 lg1>
                        
                    </v-flex>
                    <v-flex xs12 sm2 md2 lg2>
                        <h6>Phone</h6>
                        <p>07700 900381</p>
                    </v-flex>
                    <v-flex xs12 sm2 md2 lg2>
                        <h6>Email</h6>
                        <p>support@ShareSpot.mt</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="bg-grey">
            <v-container class="faq">
                <v-layout row wrap class="data spacing">
                    <v-flex xs12 sm12 md12 lg12 mb-4>
                        <h1 class="heading">Frequently asked Questions</h1>
                    </v-flex>
                    
                </v-layout>
            </v-container>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Support',
    data: function(){
        return{

        }
    }    
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.support{
    max-width: 1300px;
    .heading{ font-size: 42px; }
}
.faq{
    max-width: 1300px;
    background: $form-side;
    .heading{ font-size: 42px; }
}
</style>
