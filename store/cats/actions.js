export default {
  async getCats({ commit }, { params, onSuccess, onFail }) {
    try {
      const response = await this.$axios.get('/images/search', {
        params,
      })
      if (response) {
        const { data, headers } = response
        commit('SET_CATS', data)
        onSuccess && onSuccess(headers)
      }
    } catch (error) {
      onFail && onFail(error)
    }
  },
}
