/* eslint-disable */
export default ({ route, from, store, redirect }) => {
  if (store.state.header.isViewSidebar) {
    store.commit('header/toggle', true) // Navi 숨기기
  }
}
