<template>
  <div
    class="flex flex-auto justify-center items-center text-center w-full min-h-screen font-sans"
  >
    <home-greeting></home-greeting>
    <home-cat-list :cats="cats"></home-cat-list>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    HomeGreeting: () => import('@/components/Home/HomeGreeting.vue'),
    HomeCatList: () => import('@/components/Home/HomeCatList.vue'),
  },
  async asyncData({ $axios }) {
    const cats = await $axios.$get('/images/search', {
      params: {
        limit: 20,
      },
    })
    return { cats }
  },
}
</script>
