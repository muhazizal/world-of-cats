<template>
  <div>
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
      cats: [],
      getCatsParams: {
        limit: 20,
        order: 'DESC',
        page: 0,
      },
    }
  },
  async mounted() {
    await this.handleFetchData()
    this.addInfiniteScroll()
  },
  methods: {
    async handleFetchData() {
      await this.getCats()
    },
    async getCats() {
      if (this.isLoadingGetCats) return
      this.isLoadingGetCats = true
      try {
        const response = await this.$axios.get('/images/search', {
          params: this.getCatsParams,
        })
        if (response) {
          const { data, headers } = response
          this.setPagination(headers, () => {
            this.getCatsParams.page += 1
          })
          this.onSetCatsData(data)
        }
      } catch (error) {
        this.onFailGetCats(error)
      }
    },
    onSetCatsData(cats) {
      if (this.cats.length === 0) {
        this.cats = cats
      } else {
        cats.forEach((cat) => {
          const isCatExist = this.cats.find((x) => x.id === cat.id)
          if (!isCatExist) {
            this.cats.push(cat)
          }
        })
      }
      this.isLoadingGetCats = false
    },
    onFailGetCats(error) {
      alert(error)
      this.isLoadingGetCats = false
    },
  },
}
</script>
