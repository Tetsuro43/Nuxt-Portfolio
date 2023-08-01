<template>
  <div class="pnWrapper">
    <NuxtLink :to="prev._path" v-if="prev">
      <img src="/images/arrow-left.svg" alt="arrow-left">
      <h3>{{ prev.title }}</h3>
    </NuxtLink>
    <NuxtLink :to="next._path" v-if="next">
      <h3>{{ next.title }}</h3>
      <img src="/images/arrow-right.svg" alt="arrow-right">
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  prev: Object,
  next: Object,
})
// console.log(props.prev, props.next);
</script>