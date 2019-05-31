<template>
  <div>
    <hero></hero>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
export default {
    name: "Hero",
    components: {
      'hero': Hero
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
