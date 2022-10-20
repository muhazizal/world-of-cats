<template>
  <div class="item drop-shadow-md">
    <img class="item__img rounded-lg" loading="lazy" :src="cat.url" />
  </div>
</template>
<script>
export default {
  name: 'HomeCatListItem',
  props: {
    cat: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.item {
  &__img {
    width: 100%;
    height: 100%;
    max-height: 250px;
    object-fit: cover;
    object-position: center;
  }
}
</style>
