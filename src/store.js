import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user: {},
        selectedSpace: {},
        loading: false
    },
    mutations: {
        refreshUser: function (state, user) {
            state.user = user
        },
        changeSelectedSpace: function (state, space) {
            state.selectedSpace = space
        },
    }
});