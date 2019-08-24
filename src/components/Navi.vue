<template>
  <div class="navi">
    <div class="navi-item">1</div>
    <div class="navi-item">2</div>
    <div class="navi-item">3</div>
  </div>
</template>
<style lang="scss">
  .navi{
    padding: $spacing-lg;
    background: $color-white;
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    line-height: $line-height-default;
    @include breakpoint('small'){
      position: relative;
    }

    &-item{
      padding:$spacing-md $spacing-lg;
    }
  }
</style>
