<template>
  <div>
    <hero></hero>
    <cities></cities>
    <spaces :home="true" :spaceData="featuredSpaces"></spaces>
  </div>
</template>
<script>
import Api from '@/services/Api'
import Hero from '@/components/Hero'
import PopularCities from '@/components/PopularCities'
import FeaturedSpaces from '@/components/FeaturedSpaces'


export default {
    name: "Hero",
    components: {
      'hero': Hero,
      'cities': PopularCities,
      'spaces': FeaturedSpaces
    },
    data: function(){
        return{
          featuredSpaces: []
        }
    },
    mounted: function(){
      this.getSpaces()
    },
    methods: {
      getSpaces: function(){
        let $object = new Api('/space')
        $object.getList().then(resp => {
          this.featuredSpaces = resp.items
        })
      }
    }
}
</script>
<style lang="scss">
.hero{
    max-width: 100%;
    margin: 0px;
    padding: 0px;

    .sharing, .booking{
        position: relative;
    }
}
</style>
