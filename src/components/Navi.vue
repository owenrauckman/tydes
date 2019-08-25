<template>
  <div class="navi">
    <div class="navi-item">
      <svg viewBox="0 0 83 83" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path fill="none" d="M0 0h82.76v82.76H0z"/><circle cx="20053.9" cy="7119.67" r="32.805" fill="none" stroke="#000" stroke-width="5.23" transform="rotate(-45 1715.003 31845.72) scale(1.14794)"/><path d="M67.898 67.755l-26.63-26.63L14.61 67.785" fill="none" stroke="#000" stroke-width="6"/></svg>
    </div>
    <div class="navi-item navi-item--active">
      <svg viewBox="0 0 83 83" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path fill="none" d="M0 0h82.76v82.76H0z"/><path d="M70.943 42.316l-49.446-13.25C25.154 15.42 39.198 7.307 52.846 10.964S74.6 28.668 70.943 42.316z" fill="none" stroke="#000" stroke-width="5.999370399999999"/><path d="M20179 6747.53v552.18" fill="none" stroke="#000" stroke-width="52.98" transform="matrix(.13328 .03571 -.02105 .07856 -2501.202 -1214.882)"/><path d="M20179 6747.53v552.18" fill="none" stroke="#000" stroke-width="61.33" transform="matrix(.13328 .03571 -.00263 .0098 -2617.418 -781.26)"/></svg>
    </div>
    <div class="navi-item">
      <svg viewBox="0 0 83 83" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path fill="none" d="M0 0h82.76v82.76H0z"/><path d="M74.801 77.606v-8.094c0-8.878-7.308-16.186-16.186-16.186H26.24c-8.878 0-16.187 7.308-16.187 16.186v8.094" fill="none" stroke="#000" stroke-width="5.989086400000001"/><circle cx="12" cy="7" r="4" fill="none" stroke="#000" stroke-width="1.48" transform="translate(-6.132 -7.375) scale(4.04668)"/></svg>
    </div>
  </div>
</template>
<style lang="scss">
  .navi{
    padding: 0 $spacing-lg;
    background: $color-white;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    line-height: $line-height-default;
    z-index: +1;
    @include breakpoint('small'){
      position: relative;
    }

    &-item{
      padding:$spacing-lg $spacing-xl;
      position: relative;
      svg{
        height: 2rem;
      }
      &--active{
        &:before{
          position: absolute;
          content: '';
          width: calc(100% - 2rem);
          height: 4px;
          background: $color-deep-pink;
          top: 0; left: 0; right: 0;
          margin: 0 auto;
          @include breakpoint('small'){
            top: unset;
            bottom: 0;
          }
        }
      }
    }
  }
</style>
