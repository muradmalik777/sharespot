<template>
    <v-container class="hero">
        <v-layout row wrap>
            <v-flex xs12 md6 lg6 class="sharing text-xs-center">
                <v-img contain :src="require('@/assets/images/top_space1.jpg')"></v-img>
                <div class="overlay"></div>
                <div class="box">
                    <h1 class="capitalize t-c">share some space</h1>
                    <v-btn class="hero-btn m-t-3 capitalize">share your space now</v-btn>
                    <p class="m-t">Share your Space and Earn Money without putting any extra efforts</p>
                </div>
            </v-flex>
            <v-flex xs12 md6 lg6 class="booking text-xs-center">
                <v-img contain :src="require('@/assets/images/top_space2.jpg')"></v-img>
                <div class="overlay"></div>
                <div class="box">
                    <h1 class="capitalize t-c">book some space</h1>
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
      background: $overlay;
    }
    .box {
      position: absolute;
      top: 20%;
      left: 27.5%;
      width: 45%;
      h1 {
        color: $white !important;
        font-size: 42px;
        font-family: "sharespot-regular";
      }
      .hero-btn {
        background: $light-green;
        height: 60px;
        padding: 0px 30px;
        font-weight: 600;
        margin-top: 1.5rem;
        &:hover{
          background: $dark-green;
          transition: background-color .35s;
        }
      }
      p {
        color: $white !important;
        font-size: 14px;
      }
    }
  }
}
@media only screen and (max-width: 767px){
  .hero {

    .sharing, .booking {
      .box {
        top: 10%;
        left: 10%;
        width: 80%;
        h1 {
          font-size: 24px;
        }
        .hero-btn {
          height: 40px;
          padding: 0px 10px;
          margin: .5rem 0;
        }
      }
    }
  }
}
</style>
