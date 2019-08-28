<template>
  <div class="beach" :style="{height: `${windowHeight - (8*16)}px`}">
    <div class="water" :style="{height: `calc(${beachData.percent}% + 100px)`}"></div>
    <BeachInfo :beachData="beachData"/>
    <BeachBoard/>
  </div>
</template>
<script>
import BeachBoard from '@/components/BeachBoard.vue';
import BeachInfo from '@/components/BeachInfo.vue';

export default {
  props: ['beachData'],
  mounted() {
    // vh doesn't work in safari how we need it to, so we use JS instad
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      // todo: this should be between 0-75 for the UI, make formula to convert 100% to 75 max
      tideHeight: 70, // this + height of the :after svg makes the tide
    };
  },
  components: {
    BeachBoard,
    BeachInfo,
  },
};
</script>
<style lang="scss" scoped>
  .beach{
    margin: $spacing-xl;
    width: calc(100% - 4rem); // padding in left/right
    max-width: 400px;
    background: $color-old-lace;
    border-radius: $default-radius;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: none;
    scroll-snap-align: center; // needed
  }

  // water
  .water{
    background:linear-gradient(to bottom right, $color-baby-powder,$color-maximum-blue-green);
    position: relative;
    &:after{
      content: '';
      background: url('../assets/beach.svg') repeat-x;
      position: absolute;
      height: 100px;
      width: 6400px;
      bottom: 0;
      animation: wave 12s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
</style>
