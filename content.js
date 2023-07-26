// キーのblogQueryは任意の一意名
const { data } = await useAsyncData("blogQuery", () => {
  // contentフォルダ内の読み取りたいデータのパスを指定
  return queryContent("/blog").find()
});

export { data };