export default function({ route, from, store, redirect }) {
  // console.log(route)
  // console.log(from)
  // console.log(store)
  // console.log(redirect)
  if (store.state.header.isViewSidebar) {
    store.commit('header/toggle', true) // Navi 숨기기
  }
}
