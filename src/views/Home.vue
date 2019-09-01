<template>
  <div class="home"
    :style="{'padding-left': `${centerPad}px`}"
    @mousedown="startDrag($event)" @touchstart="startDrag($event)"
    @mousemove="onDrag($event)" @touchmove="onDrag($event)" @touchend="stopDrag($event)"
    @mouseup="stopDrag($event)"
  >
    <Beach v-for="beach in beaches" :key="beach.name" :beachData="beach"
      :style="{ transform: 'translateX(-'+ dragDifference +'px)'}"
    />
  </div>
</template>

<script>
import Beach from '@/components/Beach.vue';
import BeachMove from '@/mixins/beachMove';

export default {
  name: 'home',
  mixins: [BeachMove],
  components: {
    Beach,
  },
  data() {
    return {
      // 32 is 2rem, half the screen - half width of card
      centerPad: ((window.innerWidth / 2) - 200) - 32,
      beaches: [
        { name: 'Cardio', percent: 99, goal: 99 },
        { name: 'Push Ups', percent: 62, goal: 70 },
        { name: 'Vegan', percent: 40, goal: 82 },
        { name: '100oz Water', percent: 97, goal: 99 },
      ],
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.centerPad = ((window.innerWidth / 2) - 200) - 32;
    });

    // stop drag events when the mouse leaves the window
    document.addEventListener('mouseleave', (event) => {
      this.stopDrag(event, true);
    });
  },
};
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    &:hover{
      cursor: pointer;
    }
  }
</style>
