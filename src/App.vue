<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navi/>
    <router-view/>
  </div>
</template>
<script>
import Navi from '@/components/Navi.vue';

export default {
  components: {
    Navi,
  },
};

</script>
<style lang="scss">

</style>
