<template>
  <div class="info">
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
  </div>
</template>
<script>
export default {
  props: ['beachData'],
};
</script>
<style lang="scss" scoped>
  .info{
    position: absolute;
    top: $spacing-xxl;
    left: $spacing-xl;
    &-filter{
      display: flex;
      &-item{
        margin-right: $spacing-lg;
        font-weight: $font-weight-bold;
        opacity: 0.5;
        color: $color-white;
        font-size: $font-size-primary;
        &--active{
          opacity: 1;
        }
      }
    }
  }
  .progress{
    margin-top: $spacing-xxl;
    color: $color-white;
    display: flex;
    flex-direction: column;
    &--name{
      font-weight: $font-weight-bold;
      font-size: 1.5rem;
      letter-spacing: 1px;
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
</style>
