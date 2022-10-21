<template>
  <div>
    <!-- <home-cat-filter /> -->
    <home-cat-list :cats="cats" class="mb-4" />
    <home-cat-list-skeleton v-show="isLoadingGetCats" />
  </div>
</template>
<script>
import infiniteScroll from '@/mixins/infinite_scroll'
export default {
  name: 'HomeCat',
  mixins: [infiniteScroll],
  data() {
    return {
      isLoadingGetCats: false,
      params: {
        limit: 20,
        order: 'DESC',
      },
    }
  },
  computed: {
    cats() {
      return this.$store.getters['cats/getCats']
    },
  },
  async mounted() {
    await this.handleFetchData()
    this.addInfiniteScroll()
  },
  methods: {
    async handleFetchData() {
      if (this.isLoadingGetCats) return
      this.isLoadingGetCats = true
      await this.$store.dispatch('cats/getCats', {
        params: {
          limit: this.params.limit,
          order: this.params.order,
          page: this.currentPage,
        },
        onSuccess: (headers) => this.onSuccessFetchData(headers),
        onFaill: (error) => this.onFailFetchData(error),
      })
    },
    onSuccessFetchData(headers) {
      this.setPagination(headers)
      this.isLoadingGetCats = false
    },
    onFailFetchData(error) {
      alert(error)
      this.isLoadingGetCats = false
    },
  },
}
</script>
