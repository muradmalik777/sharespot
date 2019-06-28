<template>
    <v-container class="contact">
        <v-layout justify-center row wrap>
            <v-flex xs12 sm5 md5 lg5>
                <div class="heads">
                    <h1 class="heading">Contact Us</h1>
                    <h2>Address</h2>
                    <p>Hyde House, 
                    Hyde House, 
                    London, 
                    Colindale NW9 6LH</p>

                    <h2>Phone</h2>
                    <p>07700 900381</p>
                </div>
            </v-flex>

            <v-flex xs12 sm7 md7 lg7 class="text-xs-center forms" elevation-3>
                <v-form ref="contact">
                    <v-layout row wrap>
                        <v-flex xs12 md6 lg6 class="text-xs-left">
                            <label class="label">Full Name</label>
                            <v-text-field v-model="contact.name" required :rules="nameRules" placeholder="Enter your name" background-color="#f1f3f2" solo class="info-input"></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6 lg6 class="text-xs-left">
                            <label class="label">E-mail</label>
                            <v-text-field v-model="contact.email" type="email" required :rules="nameRules" placeholder="Your email" background-color="#f1f3f2" solo class="info-input"></v-text-field>
                        </v-flex>
                         <v-flex xs12 md12 lg12 class="text-xs-left">
                            <label class="label">Subject</label>
                            <v-text-field v-model="contact.subject" type="email" required :rules="nameRules" placeholder="Your email" background-color="#f1f3f2" solo class="info-input"></v-text-field>
                        </v-flex>
                         <v-flex xs12 md12 lg12 class="text-xs-left">
                            <label class="label">Description</label>
                            <v-textarea v-model="contact.email" type="email" required no-resize :rules="nameRules" placeholder="Your email" background-color="#f1f3f2" solo class="info-input"></v-textarea>
                        </v-flex>
                        <v-flex xs12 class="text-xs-left">
                            <v-btn flat class="submit">Send Message</v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name:'Contact',
    data: function(){
        return{
            contact: {},
            nameRules: [v => !!v || 'Field is required'],
        }
    }    
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';

.contact{
    max-width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background: $form-side;
    .heads{
        width: fit-content;
        margin: 10rem auto;
        .heading{
            font-size: 46px;
            width: fit-content;
        }
        p{ margin-bottom: 3rem; }
        .current{
            margin-bottom: 1rem;
            font-size: 18px;
            span{
                background: #333333;
                color: #333333;
                font-size: 16px;
                margin-right: 1rem;
            }
            .active{
                background: $dark-green;
                color: $dark-green;
            }
        }
    }
    .forms{
        min-height: 100vh;
        background: $form-color;
        padding: 100px;
        .flex{
            padding: 0 1rem !important;
        }
        .label{
            color: $text-medium;
            font-size: 14px;
        }
        .info-input{
            margin-top: .6rem;
            .v-input__slot{
                border: 1px solid #cccccc !important;
                box-shadow: none !important;
            }
        }
        .submit{
            height: 60px;
            background: $dark-green;
            border: $text-medium;
            font-weight: 600;
            margin: 2rem 0;
            color: #555555;
            .v-icon{
                font-size: 24px;
                margin-left: 1rem;
                font-weight: 500;
            }
        }
    }
}
@media only screen and (max-width: 550px){
    .contact{
        .heads{
            width: 80%;
            margin: 10rem auto;
            .heading{
                font-size: 28px;
            }
            p{ margin-bottom: 3rem; }
        }
        .forms{
            padding: 50px 30px 0;
            min-height: 100vh;
            background: $form-color;
        }
    }
}
@media only screen and (max-width: 960px){
    .contact{
        .heads{
            width: 80%;
            margin: 10rem auto;
            .heading{
                font-size: 28px;
            }
            p{ margin-bottom: 3rem; }
        }
        .forms{
            padding: 50px 30px 0;
            min-height: 100vh;
            background: $form-color;
        }
    }
}
</style>
