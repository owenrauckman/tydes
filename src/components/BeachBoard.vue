<template>
  <section class="board">
    <svg class="board-umbrella" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path fill="none" d="M0 0h150v150H0z"/><clipPath id="a"><path serif:id="Artboard1" d="M0 0h150v150H0z"/></clipPath><g clip-path="url(#a)"><path d="M75 0c41.394 0 75 33.607 75 75 0 41.394-33.606 75-75 75-41.393 0-75-33.606-75-75C0 33.607 33.607 0 75 0zm0 60.533c7.985 0 14.468 6.482 14.468 14.467S82.985 89.468 75 89.468 60.533 82.985 60.533 75 67.015 60.533 75 60.533z" fill="#fb8120" fill-opacity=".25"/></g></svg>
    <Button text="View Beach Board" theme="beach-board"/>
  </section>
</template>
<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss" scoped>
  .board{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-lg;
    &-umbrella{
      height: 3rem;
    }
  }
</style>
