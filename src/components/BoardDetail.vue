<template>
  <div :class="['board-detail', {'board-detail--active': showBeachBoard}]">
    <div class="board-search-container">
      <input @click.native="focusInput($event)" class="board-search" placeholder="Add Friend"/>
    </div>
    <div class="board-list">
      <div class="board-list-item">
        <span>Me</span>
        <span>70<span class="board-list-item-small">/60</span></span>
      </div>
      <div class="board-list-item">
        <span>Brooklyn</span>
        <span>52<span class="board-list-item-small">/80</span></span>
      </div>
    </div>
    <Button class="board-detail-button" @click.native="$emit('closeBoard')"
      text="Close Beach Board"
      theme="beach-board-active"/>
  </div>
</template>
<script>
import Button from '@/components/Button.vue';

export default {
  props: ['showBeachBoard'],
  components: {
    Button,
  },
  methods: {
    focusInput(event) {
      event.stopPropagation();
    },
  },
};
</script>
<style lang="scss" scoped>
  .board{
    &-detail{
      position: absolute;
      bottom: 0;
      right: 0;
      width: calc(100% - 2rem);
      background: $color-white;
      border-radius: $default-radius;
      padding: $spacing-lg;
      max-height: 50%;
      min-height: 25%;
      transform: translateY(100%);
      transition: transform 0.2s ease;
      z-index: +2;
      &-button{
        position: absolute;
        bottom: $spacing-lg;
        right: $spacing-lg;
      }
      &--active{
        transform: translateY(0);
      }
    }
    &-list{
      display: flex;
      flex-direction: column;
      margin: $spacing-lg $spacing-lg 5rem $spacing-lg;
      &-item{
        display: flex;
        justify-content: space-between;
        font-weight: $font-weight-bold;
        font-size: $font-size-callout;
        margin: $spacing-lg 0;
        &-small{
          font-size: $font-size-small;
        }
      }
    }
    &-search{
      border: none;
      font-size: $font-size-callout;
      padding: 0 0 0 $spacing-lg;
      position: relative;
      &:focus{
        outline: none;
      }
      &-container{
        margin: $spacing-lg $spacing-lg 0 $spacing-xl;
        &:before{
          position: absolute;
          content: '';
          background: url('../assets/search.svg') no-repeat;
          height: 1rem;
          width: 1rem;
          margin-left: -1rem;
        }
      }
    }
  }
</style>
