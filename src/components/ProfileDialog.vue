<template>
    <div class="text-xs-center">
        <v-dialog
        v-model="dialog"
        fullscreen
        persistent
        width="500">
        <v-card class="profile-dialog">
            <v-container fluid fill-height>
                <v-layout row justify-center align-center>
                    <v-flex xs11 md4 lg3 class="profile">
                        <h2>Personal Information</h2>
                        <div class="name">
                            <v-form ref="user" lazy-validation @keyup.native.enter="login">
                                <v-text-field
                                    v-model="user.name"
                                    :rules="nameRules"
                                    label="Full Name"
                                    type="text"
                                    background-color="#aaaaaa"
                                    color="white"
                                    outline
                                    required>
                                </v-text-field>
                                <v-text-field
                                    v-model="user.email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    background-color="#aaaaaa"
                                    outline
                                    readonly
                                    required>
                                </v-text-field>
                                <v-btn class="full-width login-btn" :loading="nameLoading" @click="save">Save</v-btn>
                            </v-form>
                        </div>

                        <v-expansion-panel>
                            <v-expansion-panel-content>
                                <template v-slot:header>
                                    <h2>Change Password</h2>
                                </template>
                                <div class="password">
                                    <v-form ref="password" lazy-validation @keyup.native.enter="login">
                                        <v-text-field
                                            v-model="newPassword"
                                            :rules="passwordRules"
                                            label="New Password"
                                            type="password"
                                            background-color="#aaaaaa"
                                            color="white"
                                            outline
                                            required>
                                        </v-text-field>
                                        <v-text-field
                                            v-model="confirmPassword"
                                            :rules="confirmPasswordRules"
                                            label="Confirm New Password"
                                            type="password"
                                            background-color="#aaaaaa"
                                            outline
                                            required>
                                        </v-text-field>
                                        <v-btn class="full-width login-btn" :loading="passwordLoading" @click="changePassword">Change Password</v-btn>
                                    </v-form>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
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
    name: 'ProfileDialog',
    props: ['dialog'],
    data: function(){
        let data = this.$store.state.user
        return{
            user: data,
            newPassword: null,
            confirmPassword: null,
            passwordRules: [v => !!v || "The input is required"],
            confirmPasswordRules: [v => !!v || "The input is required", v => v === this.newPassword || 'Passwords do not match'],
            nameRules: [v => !!v || "The input is required"],
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            nameLoading: false,
            passwordLoading: false
        }
    },
    created: function(){
        
    },
    methods: {
        closeDialog: function(){
            this.$emit('close')
        },
        save: function(){
            if(this.$refs.user.validate()){
                this.nameLoading = true
                let $object  = new Api('/user')
                $object.put(this.user._id, this.user).then(resp => {
                    this.$store.commit('refreshUser', resp)
                    this.closeDialog()
                    this.nameLoading = false
                    this.showMessage("Details Updated")
                }).catch((error) => {
                    this.nameLoading = false
                    this.showMessage(error.response.data.message)
                })
            } 
        },
        changePassword: function(){
            if(this.$refs.password.validate()){
                this.passwordLoading = true
                this.user.password = this.newPassword
                let $object  = new Api('/user')
                $object.put(this.user._id, this.user).then(resp => {
                    this.$store.commit('refreshUser', resp)
                    this.closeDialog()
                    this.passwordLoading = false
                    this.showMessage("Password Changed")
                }).catch((error) => {
                    this.passwordLoading = false
                    this.showMessage(error.response.data.message)
                })
            } 
        },
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.profile-dialog{
    height: 100vh;
    background: url('../assets/images/popup_bg.jpg');
    position: relative;

    h2,h3,h4{
        color: $white;
    }
    .name, .password{
        padding: 1.5rem 0;
        width: 100%;

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
    .v-expansion-panel{
        box-shadow: unset !important;
        .v-expansion-panel__container{
            background: transparent !important;
            padding: 1rem 0 !important;
            .v-expansion-panel__header{
                padding: 0;
            }
            .v-icon{
                color: $white !important;
                font-size: 20px;
            }
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
