import Vue from 'vue'

Vue.mixin({
    computed: {

    },
    methods: {
        logout: function () {
            this.$store.commit('logout')
            this.$router.push("/login")
        },
        showMessage: function (message) {
            this.$toasted.show(message, {
                theme: "bubble",
                position: "top-center",
                duration: 4000
            });
        },
    },
    filters: {

    }
});