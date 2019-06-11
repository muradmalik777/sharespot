<template>
    <div>
        <slider></slider>
        <about></about>
        <reviews></reviews>
    </div>
</template>
<script>
import SpaceSlider from '@/components/SpaceImageSlider'
import SpaceAbout from '@/components/SpaceAbout'
import SpaceReviews from '@/components/SpaceReviews'


export default {
    name: 'Space',
    components: {
        'slider': SpaceSlider,
        'about': SpaceAbout,
        'reviews': SpaceReviews,
    },
    data: function(){
        return{

        }
    }
}
</script>
<style lang="scss">

</style>
