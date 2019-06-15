<template>
  <v-container fluid class="navbar">
    <v-layout row wrap>
      <v-flex xs2 md4 lg4 pl-4 class="text-xs-left" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-menu offset-y full-width min-width="100%" transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn flat class="burger-btn" v-on="on"><v-icon class="m-t-s">fas fa-bars</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-tile @click="$router.push('/explore')">
              <v-list-tile-title><p class="t-c">Explore</p></v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="$router.push('/about')">
              <v-list-tile-title><p class="t-c">About</p></v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="$router.push('/share')">
              <v-list-tile-title><p class="t-c">Share Space</p></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>

      <v-flex xs6 md4 lg4 pl-1 class="text-xs-left" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-btn flat to="/" class="logo-mobile">ShareSpot</v-btn>
      </v-flex>

      <v-flex xs6 md2 lg2 pl-4 class="text-xs-left" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
        <v-btn flat to="/" class="logo capitalize">ShareSpot</v-btn>
      </v-flex>

      <v-flex xs12 md8 lg8 class="text-xs-center" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
        <v-btn flat to="/explore" class="nav-link">explore</v-btn>
        <v-btn flat to="/about" class="nav-link">about</v-btn>
        <v-btn flat to="/share/info" class="share-space-btn" v-if="$store.state.user && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">Share Space</v-btn>
      </v-flex>

      <v-flex xs4 md2 lg2 class="text-xs-right text-md-right" v-if="$store.state.user">
        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" flat v-on="on" class="user-menu capitalize"> <v-icon class="m-r">far fa-user</v-icon>{{ $store.state.user.name }}</v-btn>
            <v-btn v-else flat v-on="on" class="user-menu"> <v-icon class="m-r">far fa-user</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-tile @click="$router.push('/dashboard')">
              <v-list-tile-title><p><v-icon class="user-icon">fas fa-user-alt</v-icon> Dashboard</p></v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="$router.push('/dashboard')">
              <v-list-tile-title><p><v-icon class="user-icon">fas fa-lock</v-icon> Chang Password</p></v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logout">
              <v-list-tile-title><p><v-icon class="user-icon">fas fa-sign-out-alt</v-icon> Logout</p></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>

      <v-flex xs12 md2 lg2 class="text-xs-right" v-if="!$store.state.user && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
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
import Login from "@/components/LoginDialog";

export default {
  name: "Nav",
  components: {
    login: Login
  },
  data: function() {
    return {
      show: false,
      val: "login"
    };
  },
  methods: {
    login: function() {
      this.show = true;
      this.val = "login";
    },
    signup: function() {
      this.show = true;
      this.val = "signup";
    },
    hideDialog: function() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";

.navbar {
  max-width: 100%;
  margin: 0px;
  flex: unset;
  padding: 15px;

  .logo {
    font-weight: 600;
    font-size: 24px;
    text-decoration: none;
    color: $text-dark;
    &::before {
      display: none;
    }
  }
  .or-text {
    font-size: 12px;
  }
  .nav-link {
    font-weight: 500;
    color: $dark1;
    &::before {
      display: none;
    }
    &:hover {
      .v-btn__content {
        color: $dark-green !important;
      }
    }
  }
  .user-menu {
    min-width: fit-content;
    margin-right: 2rem;
    .v-icon {
      font-size: 18px;
    }
  }
  .login-btn,
  .signup-btn {
    text-transform: capitalize;
  }
  .share-space-btn {
    border: 1px solid $dark-green;
    &:hover{
      background: $dark-green;
    }
  }
}
@media only screen and (max-width: 960px) {
  .navbar {
    padding: 15px 0px;
    .burger-btn {
      padding: 0;
      margin: 0;
      min-width: fit-content;
      .v-icon {
        font-size: 20px;
      }
    }
    .logo-mobile {
      font-weight: 600;
      font-size: 18px;
      padding: 0;
      margin: 0.4rem 0 0 0;
      min-width: fit-content;
      &::before {
        display: none;
      }
    }
    .user-menu {
      padding: 0;
      margin: 0.2rem 1rem 0 0;
      min-width: fit-content;
      .v-icon {
        font-size: 20px;
      }
    }
    .login-btn-mobile {
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
