<template>
<div class="cart-item">
    <div class="cartcart">
        <img class="cartimg" :src="require('@/assets/' + item.product.img)" alt="">
        <div class="gridcart">
          <div class="text"><strong>{{ item.product.title }}</strong></div>
          <div class="antal"><small>{{ item.quantity }} </small></div>
          <!-- x {{ item.product.price}} -->
          <button class="btn btn-primary"><i class="fas fa-trash"></i></button>
          <!-- <button class="btn btn-primary" @click="removeProductFromCart({ product, quantity })"><i class="fas fa-trash"></i></button> -->
        </div>
    </div>
      <!-- <div>
        <div class="btn-group btn-group-sm me-2" role="group" area-label="quantity">
          <button class="btn btn-dark" @click.stop="">-</button>
          <button class="btn btn-dark" @click.stop="">+</button>
        </div>
        <button class="btn btn-danger btn-sm " @click.stop=""><i class="fas fa-trash"></i></button>
      </div> -->
    <!-- <div class="dropdown-divider"></div> -->
</div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['item']
}



</script>

<style>
.cart-item {
    width: 10rem;
}

.cartimg {
    width: 2rem;
    height: 2rem;
    border-radius: 30px;
    margin-right: 1rem;
}

.cartcart {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 0.5rem;
}

.gridcart {
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
}



.text {
    color: black;
    margin: auto;
    padding-right: 1rem;
}

.antal {
    color: black;
    margin: auto;
    padding-right: 1rem;
}

</style>