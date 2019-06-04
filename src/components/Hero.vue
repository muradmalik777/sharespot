<template>
    <v-container class="hero">
        <v-layout row wrap>
            <v-flex xs12 md6 lg6 class="sharing text-xs-center">
                <v-img contain :src="require('@/assets/images/top_space1.jpg')"></v-img>
                <div class="overlay"></div>
                <div class="box">
                    <h1 class="capitalize t-c">share <br> some space</h1>
                    <v-btn class="hero-btn m-t-3 capitalize">share your space now</v-btn>
                    <p class="m-t">Share your Space and Earn Money without putting any extra efforts</p>
                </div>
            </v-flex>
            <v-flex xs12 md6 lg6 class="booking text-xs-center">
                <v-img contain :src="require('@/assets/images/top_space2.jpg')"></v-img>
                <div class="overlay"></div>
                <div class="box">
                    <h1 class="capitalize t-c">book <br> some space</h1>
                    <v-btn class="hero-btn m-t-3 capitalize">find a space now</v-btn>
                    <p class="m-t">Browse Wide Range of Desks, Meeting Rooms, Warehouses and Self Stores</p>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  name: "Hero",
  data: function() {
    return {};
  }
};
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.hero {
  max-width: 100%;
  margin: 0px;
  padding: 0px;

  .sharing,
  .booking {
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #00000070;
    }
    .box {
      position: absolute;
      top: 20%;
      left: 27.5%;
      width: 45%;
      h1 {
        color: #ffffff !important;
        font-size: 52px;
        font-family: "sharespot-regular";
      }
      .hero-btn {
        background: #ccffe6;
        height: 70px;
        padding: 0px 30px;
        font-weight: 600;
        &:hover{
          background: $dark-green;
        }
      }
      p {
        color: #ffffff !important;
        font-size: 14px;
      }
    }
  }
}
</style>
