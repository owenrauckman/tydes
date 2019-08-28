<template>
  <section class="board">
    <svg class="board-umbrella" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path fill="none" d="M0 0h150v150H0z"/><clipPath id="a"><path serif:id="Artboard1" d="M0 0h150v150H0z"/></clipPath><g clip-path="url(#a)"><path d="M75 0c41.394 0 75 33.607 75 75 0 41.394-33.606 75-75 75-41.393 0-75-33.606-75-75C0 33.607 33.607 0 75 0zm0 60.533c7.985 0 14.468 6.482 14.468 14.467S82.985 89.468 75 89.468 60.533 82.985 60.533 75 67.015 60.533 75 60.533z" fill="#fb8120" fill-opacity=".25"/></g></svg>
    <Button @click.native="toggleBeachBoard()" text="View Beach Board" theme="beach-board"/>

    <!-- todo: move into a new component -->
    <div v-if="showBeachBoard" class="board-detail">
      <div class="board-search-container">
        <input class="board-search" placeholder="Add Friend"/>
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
      <Button class="board-detail-button" @click.native="toggleBeachBoard()"
        text="Close Beach Board"
        theme="beach-board-active"/>
    </div>
  </section>
</template>
<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      showBeachBoard: false,
    };
  },
  methods: {
    toggleBeachBoard() {
      this.showBeachBoard = !this.showBeachBoard;
    },
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
    &-detail{
      position: absolute;
      bottom: $spacing-lg;
      right: $spacing-lg;
      width: calc(100% - 4rem);
      background: $color-white;
      border-radius: $default-radius;
      padding: $spacing-lg;
      max-height: 50%;
      min-height: 25%;
      &-button{
        position: absolute;
        bottom: $spacing-lg;
        right: $spacing-lg;
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
