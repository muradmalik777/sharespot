<template>
    <div>
        <slider></slider>
        <about></about>
    </div>
</template>
<script>
import SpaceSlider from '@/components/SpaceImageSlider'
import AboutSpace from '@/components/AboutSpace'

export default {
    name: 'Space',
    components: {
        'slider': SpaceSlider,
        'about': AboutSpace
    },
    data: function(){
        return{

        }
    }
}
</script>
<style lang="scss">

</style>
