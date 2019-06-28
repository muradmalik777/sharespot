import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user: {},
        selectedSpace: {},
        loading: false,
        newSpace: {}
    },
    mutations: {
        refreshUser: function (state, user) {
            state.user = user
        },
        setNewSpace: function (state, data) {
            state.newSpace = data
        },
        unsetNewSpace: function (state) {
            state.newSpace = {}
        },
        changeSelectedSpace: function (state, space) {
            state.selectedSpace = space
        },
        logout: function (state) {
            state.user = null
        }
    }
});