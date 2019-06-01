<template>
  <div>
    <hero></hero>
    <cities></cities>
    <spaces></spaces>
  </div>
</template>
<script>
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
