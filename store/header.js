export const state = () => ({
  isViewSidebar: false
})

export const mutations = {
  toggle(state, value) {
    state.isViewSidebar = !value
  }
}
