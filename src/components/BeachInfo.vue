<template>
  <div :class="['info', { 'info--drowning' : beachData.percent < 80}]">
    <div class="info-filter">
      <div class="info-filter-item">All</div>
      <div class="info-filter-item">Week</div>
      <div class="info-filter-item info-filter-item--active">Month</div>
      <div class="info-filter-item">Year</div>
    </div>
    <div class="progress">
      <span class="progress--name">{{beachData.name}}</span>
      <div>
        <span class="progress--height">{{beachData.percent}}</span>
        <span class="progress--small">%</span>
      </div>
    </div>
    <button class="complete" @click.prevent="toggleComplete()">
      <svg class="complete-icon" v-if="checked" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
      <svg class="complete-icon complete-icon--incomplete" v-else viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>
      <span class="complete-text">Complete</span>
    </button>
  </div>
</template>
<script>
export default {
  props: ['beachData'],
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleComplete() {
      this.checked = !this.checked;
    },
  },
};
</script>
<style lang="scss" scoped>
  .info{
    position: absolute;
    top: $spacing-xl;
    left: $spacing-xl;
    width: calc(100% - 8rem);
    padding: $spacing-xl;
    border-radius: $default-radius;
    box-shadow: $box-shadow-default;
    z-index: +1;
    &--drowning{
      background: linear-gradient(to bottom right, #0680D2, #08D0D3);
    }
    &-filter{
      display: flex;
      &-item{
        margin-right: $spacing-lg;
        font-weight: $font-weight-normal;
        opacity: 0.5;
        color: $color-white;
        font-size: $font-size-primary;
        &--active{
          opacity: 1;
          font-weight: $font-weight-bold;
        }
      }
    }
  }
  .progress{
    margin-top: $spacing-xl;
    color: $color-white;
    display: flex;
    flex-direction: column;
    &--name{
      font-weight: $font-weight-bold;
      font-size: 1rem;
      letter-spacing: 1px;
      color: transparentize($color-white, 0.5);
    }
    &--height{
      font-weight: $font-weight-bold;
      font-size: 4rem;
    }
    &--small{
      font-size: 2rem;
      margin-left: $spacing-sm;
      opacity: 0.5;
    }
  }

  .complete{
    border: none;
    background: transparent;
    background: transparentize($color-black, 0.75);
    padding: $spacing-md $spacing-lg;
    border-radius: $small-radius;
    display: flex;
    align-items: center;
    transition: background 0.2s ease;
    margin-top: $spacing-md;
    &:hover{
      background: transparentize($color-black, 0.7);
    }
    &:focus{
      outline: none;
    }
    &-icon{
      stroke: $color-white;
      height: 1rem;
      width: 1rem;
      &--incomplete{
        opacity: 0.5;
      }
    }
    &-text{
      color: $color-white;
      font-weight: $font-weight-bold;
      font-size: $font-size-primary;
      margin-left: $spacing-sm;
    }
  }
</style>
