<template>
  <!-- <div class="home" :style="{'padding-left': `${centerPad}rem`}"> -->
  <div class="home" :style="{'padding-left': `${other}px`}">
    <Beach :beachData="{name: 'Cardio', percent: 70}"/>
    <Beach :beachData="{name: 'Push Ups', percent: 62}"/>
    <Beach :beachData="{name: 'Vegan', percent: 40}"/>
    <Beach :beachData="{name: '100oz Water', percent: 97}"/>
  </div>
</template>

<script>
import Beach from '@/components/Beach.vue';

export default {
  name: 'home',
  components: {
    Beach,
  },
  data() {
    return {
      centerPad: ((window.innerWidth / 2) / 16) / 2 - 2,
      // 32 is 2rem, half the screen - half width of card
      other: ((window.innerWidth / 2) - 200) - 32,
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.other = ((window.innerWidth / 2) - 200) - 32;
    });
  },
};
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    scroll-snap-type: mandatory;
    scroll-snap-points-x: 100px; // meh
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
</style>
