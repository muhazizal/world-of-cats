<template>
  <div>
    <home-cat-list-skeleton v-show="isLoadingGetCats" />
    <home-cat-list v-show="!isLoadingGetCats" :cats="cats" />
  </div>
</template>
<script>
export default {
  name: 'HomeCat',
  data() {
    return {
      isLoadingGetCats: false,
      cats: [],
    }
  },
  async mounted() {
    await this.getCats()
  },
  methods: {
    async getCats() {
      if (this.isLoadingGetCats) return
      this.isLoadingGetCats = true
      try {
        const cats = await this.$axios.$get('/images/search', {
          params: {
            limit: 20,
          },
        })
        if (cats) {
          this.onSuccessGetCats(cats)
        }
      } catch (error) {
        this.onFailGetCats(error)
      }
    },
    onSuccessGetCats(cats) {
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
