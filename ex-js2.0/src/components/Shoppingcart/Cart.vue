<template>
<div class="carten">
    <cart-product v-for="item in shoppingCart" :key="item.product.id" :item="item" />

    <div style="justify-content: center; margin-top: 0.5rem;" class="d-flex">
        <p class="me-3" style="color: black;">Totalt antal varor:</p>
        <p style="color: black;">{{ cartItemCount }}</p>
    </div>

    

    <div class="knapp">
      <!-- <div>
        <div class="total-price">
          Totalt: <span class="ms-1">1000 SEK</span>
        </div>
      </div> -->
      <button class="btn btn-primary">Betala</button>
    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartProduct from './CartProduct.vue'
export default {
  components:{
    CartProduct
  },
  computed: {
      ...mapGetters(['shoppingCart', 'cartItemCount'])
  },
  }
</script>

<style>
.carten {
    width: 15rem;
    height: fit-content;
    background: #fff;
    border-radius: 10px;
}

.knapp {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
}



</style>