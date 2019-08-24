<template>
  <!-- <div>{{windowHeight}}</div> -->
  <div class="beach" :style="{height: `${windowHeight - (8*16)}px`}">
    <div class="sand"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    // vh doesn't work in safari how we need it to, so we use JS instad
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
  data() {
    return {
      windowHeight: window.innerHeight,
    };
  },
};
</script>
<style lang="scss">
  .beach{
    // height: 100%;
    // height: calc(100vh - 8rem); // height of Navi (4rem) + even bottom padding (4rem)
    margin: $spacing-xl auto;
    width: calc(100% - 4rem); // padding in left/right
    max-width: 400px;
    background-image: linear-gradient(to bottom right, $baby-powder , $maximum-blue-green);
    border-radius: $default-radius;
    position: relative;
    overflow: hidden;
  }

  // sand

.sand {
  background: url('../assets/beach.svg') repeat-x;
  position: absolute;
  width: 6400px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  // height: 199px;
  height: 100px;
  bottom: 0;
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
