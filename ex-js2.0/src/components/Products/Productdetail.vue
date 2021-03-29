<template>
    <router-link class="productcard" style="text-decoration:none;" :to="'/UnikProduct/' + product._id">
    <img class="imgcard" :src="require('@/assets/' + product.img)" alt="Card image cap">
    <h2 class="textcard">{{product.title}}</h2>
    </router-link>
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
  color: black;
  margin-bottom: 1rem;
}



</style>