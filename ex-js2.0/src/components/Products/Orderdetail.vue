<template>
<div>
  
  <div class="ordercard">
    <div v-for="product in order.cart" :key="product._id" :product="product">
      <div v-for="title in product" :key="title._id" :title="title">
        <h2 class="ordertextcard">{{title.title}}</h2>
      </div>
    </div>
    <p class="ordertextcard">Total ordersumma: {{order.totalPrice}}kr</p>
    <p class="ordertextcard">Ditt ordernummer: {{order._id}}</p> 
</div>
</div>  
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: ['order'],

  methods: {
    ...mapActions(['checkUser'])
  },

  computed: {
    ...mapGetters(['loggedInUserId'])
  }
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