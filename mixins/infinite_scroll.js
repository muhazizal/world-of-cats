export default {
  data() {
    return {
      throttleTimer: false,
      currentPage: 0,
      pageCount: 0,
    }
  },
  methods: {
    throttle(callback, time) {
      if (this.throttleTimer) return

      this.throttleTimer = true

      setTimeout(() => {
        callback()
        this.throttleTimer = false
      }, time)
    },
    addInfiniteScroll(callback) {
      window.addEventListener('scroll', this.handleInfiniteScroll)
    },
    setPagination(headers, callback) {
      const count = parseInt(headers['pagination-count'])
      const limit = parseInt(headers['pagination-limit'])
      this.pageCount = Math.ceil(count / limit) - 1
      if (this.currentPage < this.pageCount) {
        this.currentPage += 1
        callback()
      }
    },
    handleInfiniteScroll() {
      this.throttle(async () => {
        const endOfPage =
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 200

        if (endOfPage) {
          await this.handleFetchData()
        }

        if (this.currentPage === this.pageCount) {
          this.removeInfiniteScroll()
        }
      }, 1000)
    },
    removeInfiniteScroll() {
      window.removeEventListener('scroll', this.handleInfiniteScroll)
    },
  },
}
