import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user: {},
        selectedSpace: {},
        spaceImages: [],
        spaceRating: 0,
        spaceReviews: [],
    },
    mutations: {
        refreshUser: function (state, user) {
            state.user = user
        },
    }
});