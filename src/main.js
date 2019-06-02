import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from "./router";
import "./mixins/Global";
import Vuetify from 'vuetify'
import "./assets/scss/theme.scss"
import store from './store'
import Toasted from 'vue-toasted';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Toasted);
Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.config.productionTip = false

var vueInstance = new Vue({
  el: "#app",
  template: "<App/>",
  router,
  store,
  render: h => h(App)
});

export default vueInstance;
