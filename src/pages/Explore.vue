<template>
    <div>
        <div class="bg-white">
            <search></search>
        </div>
        <div class="bg-grey results">
            <results :home="false" :spaceData="spaces"></results>
        </div>
    </div>
</template>
<script>
import Api from '@/services/Api'
import ExploreSearch from '@/components/ExploreSearch'
import FeaturedSpaces from '@/components/FeaturedSpaces'

export default {
    name: 'Explore',
    components: {
        'search': ExploreSearch,
        'results': FeaturedSpaces
    },
    data: function(){
        return{
            spaces: []
        }
    },
    mounted: function(){
      this.getSpaces()
    },
    methods: {
      getSpaces: function(){
        let $object = new Api('/space')
        $object.getList().then(resp => {
          this.spaces = resp.items
        })
      }
    }
}
</script>
<style lang="scss">
.results{
    min-height: 80vh;
}
</style>
