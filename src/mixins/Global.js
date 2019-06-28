import Vue from 'vue'

Vue.mixin({
    methods: {
        logout: function () {
            this.$store.commit('logout')
            this.$router.push("/")
        },
        showMessage: function (message) {
            this.$toasted.show(message, {
                theme: "bubble",
                position: "top-center",
                duration: 5000
            });
        },
    },
});