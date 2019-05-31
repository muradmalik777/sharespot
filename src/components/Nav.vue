<template>
  <v-container class="navbar">
    <v-layout row wrap>
      <v-flex xs12 md4 lg4 pl-4 class="text-xs-left">
        <router-link :to="'/'" class="logo">ShareSpot</router-link>
      </v-flex>
      <v-flex xs12 md4 lg4 class="text-xs-center">
        <v-btn flat to="/explore" class="nav-link">explore</v-btn>
        <v-btn flat to="/about" class="nav-link">about</v-btn>
      </v-flex>
      <v-flex xs12 md4 lg4 class="text-xs-right">
        <v-btn flat class="nav-link login-btn">login</v-btn>
        <span class="or-text">OR</span>
        <v-btn flat class="nav-link signup-btn">signup</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: 'Nav',
    data: function(){
      return{

      }
    }
  }
</script>
<style lang="scss">
.navbar{
  max-width: 100%;
  margin: 0px;
  flex: unset;
  padding: 15px;
  
  .logo{
    font-weight: 600;
    font-size: 24px;
    text-decoration: none;
    color: #333333;
  }
  .or-text{
    font-size: 12px;
  }
  .nav-link{
    font-size: 16px;
    font-weight: 600;
    color: #111111;
    &::before{
      display: none;
    }
    &:hover{
      .v-btn__content{
        color: #20d696 !important;
      }
    }
  }
  .login-btn, .signup-btn{
    text-transform: capitalize;
  }
}
</style>
