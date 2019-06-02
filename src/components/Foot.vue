<template>
<div>
    <div class="bg-dark1">
        <v-container class="news-letter spacing">
            <v-layout row wrap>
                <v-flex xs12 md6 lg6>
                    <h3 class="c-white">Signup to our new letter</h3>
                    <p class="c-white m-t-s">Be the first to know about our news and promotional updates</p>
                </v-flex>
                <v-flex xs12 md6 lg6 class="bg-dark2">
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    color="#ffffff"
                    placeholder="Your email address"
                    required
                    class="email"
                    ></v-text-field>
                    <v-btn dark flat color="#fffff" class="submit">submit</v-btn>
                </v-flex>
            </v-layout>
        </v-container>        
    </div>
    <div class="bg-dark2">
        <v-container class="foot-links spacing">
            <v-layout row wrap>
                <v-flex xs12 md6 lg7>
                    <p class="c-white m-t-s">The Coworker Community that Loves to Share</p>
                </v-flex>
                <v-flex xs12 md6 lg5 class="links text-xs-right">
                    <v-btn dark flat>explore</v-btn>
                    <v-btn dark flat>about</v-btn>
                    <v-btn dark flat>support</v-btn>
                    <v-btn dark flat>contact us</v-btn>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="bottom">
                <v-flex xs12 md4 lg2>
                    <p class="c-white">© 2018 ShareSpot</p>
                </v-flex>
                <v-flex xs12 md4 lg8 class="text-xs-center">
                    <v-btn dark flat >terms of service</v-btn>
                    <v-btn dark flat >privacy policy</v-btn>
                </v-flex>
                <v-flex xs12 md4 lg2 class="text-xs-right">
                    <v-icon class="icon">fab fa-twitter</v-icon>
                    <v-icon class="icon">fab fa-facebook-f</v-icon>
                    <v-icon class="icon">fab fa-google-plus-g</v-icon>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</div>
</template>
<script>
export default {
    name: "foot",
    data: function(){
        return{
            email: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
        }
    }
}
</script>
<style lang="scss">
.news-letter{
    max-width: 1300px;
    .email{
        width: 70%;
        float: left;
        padding: 5px 15px;
        input{
            color: #ffffff !important;
            &::placeholder{
                color: #aaaaaa;
                text-transform: capitalize;
            }
        }
    }
    .submit{
        width: 20%;
        float: right;
        text-transform: capitalize;
        font-size: 16px;
        padding-top: .5rem;
        &:hover{
            color: #20d696;
            &::before{
                display: none;
            }
        }
    }
}
.foot-links{
    max-width: 1300px;
    .links{
        .v-btn{
            font-size: 14px;
            margin: 0px 10px;
            &:hover{
                color: #20d696;
                &::before{
                    display: none;
                }
            }
        }
    }
    .bottom{
        padding-top: 30px;
        margin-top: 30px;
        border-top: 1px solid #666666;
        p{
            font-size: 12px;
            margin-top: 5px;
        }
        .v-btn{
            font-size: 12px;
            text-transform: capitalize;
            padding: 0;
            margin: 0px 15px;
            &:hover{
                color: #20d696;
                &::before{
                    display: none;
                }
            }
        }
        .icon{
            font-size: 18px;
            cursor: pointer;
            color: #666666;
            margin: 0px 10px;
            &:hover{
                color: #20d696;
            }
        }
    }
}
</style>
