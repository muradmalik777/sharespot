<template>
    <div class="bg-grey">
        <info></info>
        <spaces></spaces>
    </div>
</template>
<script>
import Info from "@/components/UserInfo";
import Spaces from "@/components/UserSpaces";


export default {
  name: "Dashboard",
  components: {
    'info': Info,
    'spaces': Spaces
  },
  data: function() {
    return {};
  }
};
</script>
<style lang="scss">
</style>
