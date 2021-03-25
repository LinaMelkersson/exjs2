<template>
  <div class="productcard">
    <img class="imgcard" :src="require('@/assets/' + product.img)" alt="Card image cap">
    <h2 class="textcard">{{product.title}}</h2>
  </div>
</template>

<script>
export default {
  props: ['product']

}
</script>

<style>

.productcard {
  margin-top: 4rem;
  width: 20vw;
  display: grid;
  justify-content: center;
  border: 1px solid rosybrown;
  border-radius: 15px;
  box-shadow: 15px 10px 10px rosybrown;
}

.imgcard {
  margin-top: 1rem;
  height: 12rem;
  width: 85%;
  border-radius: 10px;
  justify-self: center;
}

.textcard {
  text-align: center;
  font-family: cursive;
}



</style>