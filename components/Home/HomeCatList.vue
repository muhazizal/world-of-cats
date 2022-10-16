<template>
  <div>
    <!-- {{ cats }} -->
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
