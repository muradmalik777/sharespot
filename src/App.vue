<template>
  <v-app>
    <navbar></navbar>
    <div class="content">
      <router-view/>
    </div>
    <foot></foot>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'
import Foot from '@/components/Foot'

export default {
  name: 'App',
  components: {
    'navbar': Nav,
    'foot': Foot
  },
  data: function() {
    return {
      
    }
  }
}
</script>
<style lang="scss">
.content{
  width: 100%;
  min-height: 92vh;
  overflow-y: auto;
}
</style>

