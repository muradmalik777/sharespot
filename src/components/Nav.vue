<template>
  <v-container fluid class="navbar">
    <v-layout row wrap>
      <v-flex xs2 md4 lg4 pl-4 class="text-xs-left" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-menu offset-y full-width min-width="100%">
          <template v-slot:activator="{ on }">
            <v-btn flat class="burger-btn" v-on="on"><v-icon class="m-t-s">fas fa-bars</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-tile @click="$router.push('/explore')">
              <v-list-tile-title>Explore</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="$router.push('/about')">
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex xs6 md4 lg4 pl-1 class="text-xs-left" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-btn flat to="/" class="logo-mobile">ShareSpot</v-btn>
      </v-flex>
      <v-flex xs6 md4 lg4 pl-4 class="text-xs-left" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
        <router-link :to="'/'" class="logo">ShareSpot</router-link>
      </v-flex>

      <v-flex xs12 md4 lg4 class="text-xs-center" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
        <v-btn flat to="/explore" class="nav-link">explore</v-btn>
        <v-btn flat to="/about" class="nav-link">about</v-btn>
      </v-flex>

      <v-flex xs4 md4 lg4 class="text-xs-right text-md-right" v-if="$store.state.user">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn v-if="!$vuetify.breakpoint.xs && $vuetify.breakpoint.sm" flat v-on="on" class="user-menu"> <v-icon class="m-r">person</v-icon>{{ $store.state.user.name }}</v-btn>
            <v-btn v-else flat v-on="on" class="user-menu"> <v-icon class="m-r">person</v-icon></v-btn>

          </template>
          <v-list>
            <v-list-tile @click="$router.push('/dashboard')">
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logout">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>

      <v-flex xs12 md4 lg4 class="text-xs-right" v-if="!$store.state.user && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
        <v-btn flat class="nav-link login-btn" @click="login">login</v-btn>
        <span class="or-text">OR</span>
        <v-btn flat class="nav-link signup-btn" @click="signup">signup</v-btn>
        <login :dialog="show" :active="val" @close="hideDialog"></login>
      </v-flex>
      <v-flex xs4 md4 lg4 class="text-xs-right" v-if="!$store.state.user && ($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
        <v-btn flat class="nav-link login-btn-mobile" @click="login">login</v-btn>
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
@media only screen and (max-width: 960px){
  .navbar{
    padding: 15px 0px;
    .burger-btn{
      padding: 0;
      margin: 0;
      min-width: fit-content;
      .v-icon{
        font-size: 22px;
      }
    }
    .logo-mobile{
      font-weight: 600;
      font-size: 18px;
      padding: 0;
      margin: .4rem 0 0 0;
      min-width: fit-content;
      &::before{
        display: none;
      }
    }
    .user-menu{
      padding: 0;
      margin: .4rem 1rem 0 0;
      min-width: fit-content;
      .v-icon{
        font-size: 30px;
      }
    }
    .login-btn-mobile{
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
