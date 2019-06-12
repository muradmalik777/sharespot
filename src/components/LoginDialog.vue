<template>
    <div class="text-xs-center">
        <v-dialog
        v-model="dialog"
        fullscreen
        persistent
        width="500">
        <v-card class="login-dialog">
            <v-container fluid fill-height>
                <v-layout row justify-center align-center>
                    <v-flex xs11 md3 lg2 class="tabs">
                        <v-tabs v-model="val">
                            <v-tabs-slider color="#aaaaaa"></v-tabs-slider>
                            <v-tab href="#login">Login</v-tab>
                            <v-tab href="#signup">Signup</v-tab>

                            <v-tab-item :value="'login'">
                                <div class="login">
                                    <div class="social-links text-xs-center">
                                        <v-icon class="icon">fab fa-twitter</v-icon>
                                        <v-icon class="icon">fab fa-facebook-f</v-icon>
                                        <v-icon class="icon">fas fa-envelope</v-icon>
                                    </div>
                                    <v-form ref="login" lazy-validation>
                                        <v-text-field
                                            v-model="loginData.email"
                                            :rules="emailRules"
                                            label="Email"
                                            type="email"
                                            background-color="#aaaaaa"
                                            color="white"
                                            outline
                                            required>
                                        </v-text-field>
                                        <v-text-field
                                            v-model="loginData.password"
                                            :rules="passwordRules"
                                            label="Password"
                                            type="password"
                                            background-color="#aaaaaa"
                                            outline
                                            required>
                                        </v-text-field>
                                        <v-btn class="full-width login-btn" @click="login">login</v-btn>
                                    </v-form>
                                </div>
                            </v-tab-item>
                            <v-tab-item :value="'signup'">
                                <div class="signup">
                                    <div class="social-links text-xs-center">
                                        <v-icon class="icon">fab fa-twitter</v-icon>
                                        <v-icon class="icon">fab fa-facebook-f</v-icon>
                                        <v-icon class="icon">fas fa-envelope</v-icon>
                                    </div>
                                    <v-form ref="register" lazy-validation>
                                        <v-text-field
                                            v-model="signupData.name"
                                            :rules="nameRules"
                                            label="Name"
                                            type="text"
                                            background-color="#aaaaaa"
                                            color="white"
                                            outline
                                            required>
                                        </v-text-field>
                                        <v-text-field
                                            v-model="signupData.email"
                                            :rules="emailRules"
                                            label="Email"
                                            type="email"
                                            background-color="#aaaaaa"
                                            color="white"
                                            outline
                                            required>
                                        </v-text-field>
                                        <v-text-field
                                            v-model="signupData.password"
                                            :rules="passwordRules"
                                            label="Password"
                                            type="password"
                                            background-color="#aaaaaa"
                                            outline
                                            required>
                                        </v-text-field>
                                        <v-btn class="full-width login-btn" @click="register">register</v-btn>
                                    </v-form>
                                </div>
                            </v-tab-item>
                        </v-tabs>
                    </v-flex>
                    <v-icon class="close-icon pointer" @click="closeDialog">close</v-icon>
                </v-layout>
            </v-container>
        </v-card>
        </v-dialog>
    </div>
</template>
<script>
import Api from '@/services/Api'

export default {
    name: 'LoginDialog',
    props: ['dialog', 'active'],
    data: function(){
        let data = this.$props.active
        return{
            val: data,
            loginData: {},
            signupData: {},
            passwordRules: [v => !!v || "The input is required"],
            nameRules: [v => !!v || "The input is required"],
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
        }
    },
    watch: {
        active: function(newVal, oldVal){
            this.val = newVal
        }
    },
    created: function(){
        
    },
    methods: {
        closeDialog: function(){
            this.$emit('close')
        },
        login: function(){
            if(this.$refs.login.validate()){
                let $object  = new Api('/user/login')
                $object.post(this.loginData).then(resp => {
                    this.$store.commit('refreshUser', resp)
                    this.closeDialog()
                }).catch((error) => {
                    this.showMessage(error.response.data.message)
                })
            } 
        },
        register: function(){
            if(this.$refs.register.validate()){
                let $object  = new Api('/user/register')
                $object.post(this.signupData).then(resp => {
                    this.$store.commit('refreshUser', resp)
                    this.closeDialog()
                }).catch((error) => {
                    this.showMessage(error.response.data.message)
                })
            } 
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.login-dialog{
    height: 100vh;
    background: url('../assets/images/popup_bg.jpg');
    position: relative;

    .tabs{
        min-height: 600px;
        .v-tabs__bar{
            background: transparent;
        }
        .v-tabs__div{
            width: 50%;
            a{
                color: $white;
            }
        }
    }
    .login, .signup{
        padding: 1.5rem 0;

        .social-links{
            margin: 1rem 0;
            .icon{
                padding: 1.2rem;
                width: 55px;
                height: 55px;
                margin: 10px;
                font-size: 20px;
                border: 1px solid #aaaaaa;
                border-radius: 100%;
                color: $white;
                cursor: pointer;
                &:hover{
                    color: $dark-green;
                }
            }
        }

        .v-text-field{
            margin-bottom: .5rem;
            label{
                font-size: 14px;
                color: $white;
            }
            input{
                padding: 1.5rem 0;
                font-size: 14px;
                color: $white;
            }
        }
        .login-btn, .signup-btn{
            height: 65px;
            margin: 0px;
            color: black !important;
            background: $dark-green !important;
            font-size: 16px;
            font-weight: 600;
            border-radius: 4px;
        }
    }
    .close-icon{
        position: absolute;
        right: 40px;
        top: 40px;
        color: $white;
        font-size: 34px;
    }
}
</style>
