<template>
  <div class="beach">
    <div class="sand"></div>
  </div>
</template>
<style lang="scss">
  .beach{
    background: red;
    height: calc(100vh - 8rem); // height of Navi (4rem) + even bottom padding (4rem)
    margin: $spacing-xl auto;
    width: calc(100% - 4rem); // padding in left/right
    max-width: 400px;
    background-image: linear-gradient(to bottom right, $baby-powder , $maximum-blue-green);
    border-radius: $default-radius;
    position: relative;
    overflow-x: hidden;
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
