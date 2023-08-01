<template>
  <div class="wrapper">
    <div class="container">
      <h1>Blog</h1>
      <p>エンジニアの日常生活をお届けします</p>
      <div v-for="singleData in data" :key="singleData.id" class="blogCard">
        <div class="textsContainer">
          <h3>{{ singleData.title }}</h3>
          <p>{{ singleData.excerpt }}</p>
          <p>{{ singleData.date }}</p>
          <!-- <p>{{ singleData._path }}</p> -->
          <NuxtLink :to="singleData._path" class="linkButton">Read More</NuxtLink>
        </div>
        <div class="blogImg">
          <nuxt-img :src="singleData.image" alt="blog-image" format="webp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// キーのblogQueryは任意の一意名
const { data } = await useAsyncData("blogQuery", () => {
  // contentフォルダ内の読み取りたいデータのパスを指定
  // sortのidの番号は、-1にすると逆順になる
  return queryContent("/blog").sort({ id: -1 }).find()
});

// console.log(data);
</script>