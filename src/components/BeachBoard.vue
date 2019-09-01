<template>
  <section class="board">
    <svg class="board-umbrella" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path fill="none" d="M0 0h150v150H0z"/><g serif:id="Artboard1"><circle cx="247.438" cy="1951.18" r="67.438" fill="#FFF" fill-opacity="1" transform="translate(-200.183 -2094.96) scale(1.11213)"/><circle cx="12" cy="12" r="3" fill="none" stroke="#000" stroke-width="2" transform="translate(49.6 49.647) scale(2.11672)"/><path d="M90.664 81.398a3.496 3.496 0 0 0 .698 3.852l.127.127a4.238 4.238 0 0 1 1.243 2.995 4.238 4.238 0 0 1-7.233 2.995l-.127-.127a3.496 3.496 0 0 0-3.852-.698 3.502 3.502 0 0 0-2.117 3.196v.36c0 2.322-1.912 4.233-4.234 4.233s-4.233-1.911-4.233-4.233v-.19a3.497 3.497 0 0 0-2.286-3.197 3.496 3.496 0 0 0-3.853.699l-.127.127a4.238 4.238 0 0 1-2.995 1.242 4.238 4.238 0 0 1-2.995-7.233l.127-.127a3.496 3.496 0 0 0 .699-3.852 3.502 3.502 0 0 0-3.197-2.117h-.36c-2.321 0-4.233-1.911-4.233-4.233 0-2.322 1.912-4.234 4.234-4.234h.19a3.497 3.497 0 0 0 3.196-2.286 3.496 3.496 0 0 0-.698-3.852l-.127-.127a4.238 4.238 0 0 1-1.243-2.995 4.238 4.238 0 0 1 7.233-2.995l.127.127a3.496 3.496 0 0 0 3.853.698h.169a3.502 3.502 0 0 0 2.117-3.196v-.36c0-2.322 1.911-4.233 4.233-4.233 2.322 0 4.233 1.91 4.233 4.233v.19a3.502 3.502 0 0 0 2.117 3.197 3.496 3.496 0 0 0 3.853-.699l.127-.127a4.238 4.238 0 0 1 2.995-1.242 4.238 4.238 0 0 1 2.995 7.233l-.127.127a3.496 3.496 0 0 0-.699 3.852v.17a3.502 3.502 0 0 0 3.197 2.116h.36c2.322 0 4.233 1.911 4.233 4.233 0 2.322-1.911 4.234-4.233 4.234h-.191a3.502 3.502 0 0 0-3.196 2.117z" fill="none" stroke="#000" stroke-width="4.23344"/></g></svg>
    <Button @click.native="toggleBeachBoard()" text="View Beach Board" theme="beach-board"/>
    <BoardDetail :showBeachBoard="showBeachBoard" @closeBoard="toggleBeachBoard()"/>
  </section>
</template>
<script>
import Button from '@/components/Button.vue';
import BoardDetail from '@/components/BoardDetail.vue';

export default {
  components: {
    Button,
    BoardDetail,
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
      opacity: 0.5;
    }
  }
</style>
