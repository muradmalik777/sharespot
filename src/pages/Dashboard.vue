<template>
    <div class="bg-grey">
        <info></info>
        <spaces></spaces>
        <payments></payments>
    </div>
</template>
<script>
import Info from "@/components/UserInfo";
import Spaces from "@/components/UserSpaces";
import Payments from "@/components/UserPayments";



export default {
  name: "Dashboard",
  components: {
    'info': Info,
    'spaces': Spaces,
    'payments': Payments,
  },
  data: function() {
    return {};
  }
};
</script>
<style lang="scss">
</style>
