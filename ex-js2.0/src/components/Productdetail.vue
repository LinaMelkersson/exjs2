<template>
  <div>
    <h1>{{product.title}}</h1>
    <img :src="require('@/assets/' + product.img)" alt="Card image cap">
  </div>
</template>

<script>
export default {
  props: ['product']

}
</script>

<style>

</style>