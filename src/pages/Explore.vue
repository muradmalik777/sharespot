<template>
    <div>
        <div class="bg-white">
            <search></search>
        </div>
        <div class="bg-grey results">
            <results :home="false" :spaces="featuredSpaces"></results>
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
.results{
    min-height: 80vh;
}
</style>
