<template>
  <div>
    <div>
      <nuxt-img :src="data.image" alt="blog-image" format="webp" />
    </div>
    <div>
      <h1>{{ data.title }}</h1>
      <p>{{ data.date }}</p>
      <ContentDoc />
    </div>
  </div>
</template>

<script setup>
// キーのblogQueryは任意の一意名
const { data } = await useAsyncData(useRoute().path, () => {
  // contentフォルダ内の読み取りたいデータのパスを指定
  // sortのidの番号は、-1にすると逆順になる
  return queryContent(useRoute().path).findOne();
});

console.log(data.image);
</script>