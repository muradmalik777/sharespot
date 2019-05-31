<template>
  <div>
    <hero></hero>
    <cities></cities>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
import Cities from '@/components/PopularCities'

export default {
    name: "Hero",
    components: {
      'hero': Hero,
      'cities': Cities
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
