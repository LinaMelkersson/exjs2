<template>
<div>
  <div class="ordercard">
    <h2 class="ordertextcard">{{order.cart}}</h2>
    <!-- Date.now funkar inte riktigt? -->
    <h2 class="ordertextcard">{{order.date}}</h2>
    <!-- Total price ska egentligen vara beroende av produktvärdet i kundvagnen...cartPriceCount eller något-->
    <p class="ordertextcard">Total ordersumma: {{order.totalPrice}}kr</p>
    <!-- ordernummer nedanför -->
    <p class="ordertextcard">Ditt ordernummer: {{order._id}}</p> 
</div>
</div>  
</template>

<script>
export default {
  props: ['order']

}
</script>

<style>

.ordercard {
  border: 2px solid rgb(253, 200, 209);
  border-radius: 10px;
  padding:1rem;
}

.ordertextcard {
  text-align: left;
  font-family: cursive;
  color: black;
  margin-bottom: 1rem;
}
</style>