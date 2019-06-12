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
        <v-btn flat class="nav-link login-btn" @click="login">login</v-btn>
        <span class="or-text">OR</span>
        <v-btn flat class="nav-link signup-btn" @click="signup">signup</v-btn>
        <login :dialog="show" :active="val" @close="hideDialog"></login>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Login from '@/components/LoginDialog'

export default {
  name: 'Nav',
  components: {
    'login': Login
  },
  data: function(){
    return{
      show: false,
      val: 'login'
    }
  },
  methods: {
    login: function(){
      this.show = true
      this.val = 'login'
    },
    signup: function(){
      this.show = true
      this.val = 'signup'
    },
    hideDialog: function(){
      this.show = false
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
    font-weight: 500;
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
