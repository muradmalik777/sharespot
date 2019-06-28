<template>
    <div>
        <div class="bg-white">
            <search></search>
        </div>
        <div class="bg-grey results">
            <results :home="false"></results>
        </div>
    </div>
</template>
<script>
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

        }
    }    
}
</script>
<style lang="scss">
.results{
    min-height: 80vh;
}
</style>
