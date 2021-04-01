<template>
<div>
    <h2 class="textcard">{{order.totalPrice}}</h2>
    <h2 class="textcard">{{order.cart}}</h2>
    <h2 class="textcard">{{order.date}}</h2>
    <h2 class="textcard">{{order.orderNumber}}</h2>

</div>
    
</template>

<script>
export default {
  props: ['order']

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