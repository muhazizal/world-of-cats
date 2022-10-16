<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <home-cat-list-item v-for="(cat, index) in cats" :key="index" :cat="cat" />
  </div>
</template>
<script>
export default {
  name: 'HomeCatList',
  props: {
    cats: {
      type: Array,
      default: null,
    },
  },
}
</script>
