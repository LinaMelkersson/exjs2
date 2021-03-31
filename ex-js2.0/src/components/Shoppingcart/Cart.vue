<template>
  <div class="carten">
    <cart-product v-for="item in shoppingCart" :key="item.product.id" :item="item" />

    <div v-if="shoppingCart.length < 1" class="cart-item">
      <div>
        Din kundvagn är tom.
      </div>
    </div>

    <div>
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
      ...mapGetters(['shoppingCart'])
  }
}
</script>

<style>


</style>