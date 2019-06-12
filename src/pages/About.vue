<template>
    <v-container grid-list-lg class="about spacing">
        <v-layout row wrap>
            <v-flex xs12 md5 lg4>
                <v-img contain :src="require('@/assets/images/about_img.jpg')"></v-img>
            </v-flex>
            <v-flex xs12 md7 lg8 class="about-text">
                <h1 class="about-title">About</h1><br>
                <p>ShareSpot follows a simple philosophy, sharing benefits all.</p><br>
                <p>ShareSpot enables businesses to release desk space, meeting rooms, and other commercial properties to 
                    likeminded businesses increasing the income for the host businesses/listee, whilst providing reduced 
                    costs and maximum flexibility to sharers. Purchase a commercial property, book a desk for short or long term, 
                    book a meeting room by the hour - or even some warehouse space. But we goe beyond that! We're creating a community that can share ideas, 
                    resources and sometimes even clients or business associates, all in favor of creating and establishing a large community, 
                    and a trend to encourage sharing office space! Share your property on sharespot</p><br>
                <ul>
                    <li>Graphic Design agency that shares desk space with the Recruitment company, jointly benefitting from client referrals</li>
                    <li>Mortgage advisors sharing with the Estate Agent Agents</li>
                    <li>IT Software Developers sharing desk space with a Digital Marketing Agency</li>
                    <li>The Car Hire company sharing desk space with the travel agency</li>
                </ul><br>
                <p>We want to make the process simple and effortless. ShareSpot manages the whole process effortlessly 
                    from connecting hosts to sharers, arranging viewings or even virtual viewings, generates the flexible 
                    online paperwork to manage the booking and handles your payments - 
                    all in one simple online portal. Sharing should be simple - and we believe we have made it so.</p>
            </v-flex>
        </v-layout>
    </v-container> 
</template>
<script>
export default {
    name: 'About',
    data: function(){
        return{

        }
    }    
}
</script>
<style lang="scss">
.about{
    max-width: 1300px;
    margin-top: 100px;

    .about-text{
        padding: 0px 50px !important;

        .about-title{
            font-size: 40px;
        }
        ul {
            list-style-type: none;
            li{
                font-size: 14px;
            }
        }

        ul li:before {
            content: '\2014';
            position: absolute;
            margin-left: -20px;
        }
    }
}
@media only screen and (max-width: 550px){
    .about{
        max-width: 100%;
        padding: 30px 20px !important;
        margin-top: 0;

        .about-text{
            padding: 30px 20px !important;
        }
    }
}
</style>
