<template>
    <v-container grid-list-xl class="user-spaces spacing">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg4 v-for="(space, i) in userSpaces" :key="i">
                <v-img class="user-space-image" :src="getImage(space.photos.photos)"></v-img>
                <v-card flat class="space-details">
                    <p class="uppercase name m-b-s">{{space.type[0]}} <span class="f-r"><v-icon class="icon">star</v-icon>4.9</span></p>
                    <h2 class="capitalize">{{space.name}}</h2>
                    <p class="uppercase location m-t-s"><v-icon class="icon">location_on</v-icon> {{space.info.direction}}</p>
                    <h4 class="price m-t">{{"£" + space.info.pricePerDay + "/day"}}</h4>
                </v-card>
                <v-card flat class="user-space-actions">
                    <v-btn flat class="user-space-btn">Manage</v-btn>
                    <v-btn @click="editSpace(space)" flat class="user-space-btn">Edit</v-btn>
                    <v-btn flat color="red" class="full-width capitalize promote-btn"><v-icon class="icon m-r">fas fa-bookmark</v-icon> promote this space</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '@/services/Api'

export default {
  name: "UserSpaces",
  data: function() {
    return {
        userSpaces: []
    };
  },
  mounted: function(){
      this.getUserSpaces()
  },
  methods: {
    getImage: function(photos){
        let $obj = new Api()
        return $obj.base_url+'/'+ photos[0]
    },
    getUserSpaces: function(){
        let $object = new Api('/space/user')
        let params = {
            user_id: this.$store.state.user._id
        }
        $object.getList(params).then(resp => {
            this.userSpaces = resp
        })
    },
    editSpace: function(space){
        this.$store.commit('setEditSpace', space)
        this.$router.push('/edit/info')
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";

.user-spaces {
  max-width: 1300px;
  .user-space-image{
      height: 220px;
  }
  .space-details{
        padding: 20px;
        border: 1px solid #dddddd;

        p{
            color: $text-dark;
            font-size: 12px;
            .icon{
                width: fit-content;
                font-size: 18px;
                margin-right: 5px;
            }
        }
        .location{
            color: $text-medium;
        }
        .price{
            color: $dark-green;
        }
    }
    .user-space-actions{
        border: 1px solid $light;
        border-top: 0;

        .user-space-btn{
            min-width: 50%;
            float: left;
            margin: 0;
            border-bottom: 1px solid $light;
            background: $white;
            height: 60px;

            &:first-child{
                border-right: 1px solid $light;
            }
        }
        .promote-btn{
            height: 60px;
            margin: 0;
            .icon{
                color: red;
                font-size: 18px !important;
            }
        }
    }
}
@media only screen and (max-width: 550px){
    .user-spaces{
        padding: 20px !important;
    }
}
</style>
