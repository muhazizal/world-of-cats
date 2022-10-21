export default {
  SET_CATS(state, payload) {
    if (payload && payload.length === 0) {
      state.cats = payload
    } else {
      payload.forEach((cat) => {
        const isCatExist = state.cats.find((x) => x.id === cat.id)
        if (!isCatExist) {
          state.cats.push(cat)
        }
      })
    }
  },
}
