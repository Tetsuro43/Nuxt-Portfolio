<template>
  <div>
    <div class="hero">
      <nuxt-img :src="data.image" alt="blog-image" format="webp" />
    </div>
    <div class="wrapper">
      <div class="container">
        <h1>{{ data.title }}</h1>
        <p>{{ data.date }}</p>
        <ContentDoc />
      </div>
      <PrevNext :prev="prev" :next="next" />
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

// https://content.nuxtjs.org/api/composables/query-content#findsurroundpath-options
const [prev, next] = await queryContent("/blog")
                          .sort({ id: 1 })
                          .findSurround(useRoute().path);
// console.log(prev, next);
</script>