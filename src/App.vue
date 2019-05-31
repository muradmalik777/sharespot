<template>
  <v-app>
    <navbar></navbar>
    <div class="content">
      <router-view/>
    </div>
    <footer></footer>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'navbar': Nav,
    'footer': Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss">
.content{
  width: 100%;
  min-height: 700px;
  overflow-y: auto;
}
</style>

