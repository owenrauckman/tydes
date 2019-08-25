<template>
  <button :class="['button', `button--${theme}`]">{{text}}</button>
</template>
<script>
export default {
  props: ['text', 'theme'],
};
</script>
<style lang="scss" scoped>
  .button{
    padding: $spacing-lg $spacing-xl;
    border:none;
    font-weight: $font-weight-bold;
    font-size: $font-size-primary;
    border-radius: $small-radius;
    &:focus{
      outline: none;
    }
    &--beach-board{
      background: transparentize($color-white, .25);
      color: $color-turquoise-surf;
      &:hover{
        background: transparentize($color-white, 0);
      }
    }
  }
</style>
