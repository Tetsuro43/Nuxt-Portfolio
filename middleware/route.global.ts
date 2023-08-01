// ページ遷移後、ページ最上部に移動
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to.path, from.path, process.client);
  if ((to.path !== from.path) && process.client) {
    window.scrollTo(0, 0);
  }
})