<template>
<div class="carten">
    <cart-product v-for="item in shoppingCart" :key="item.product.id" :item="item" />

    <div>
        <div style="justify-content: center; margin-top: 0.5rem;" class="d-flex">
            <p class="me-3" style="color: black;">Totalt antal varor:</p>
            <p style="color: black;">{{ cartItemCount }}</p>
        </div>
        <div style="justify-content: center;" class="d-flex">
            <p class="me-3" style="color: black;">Totalt pris:</p>
            <p style="color: black;">{{ cartPriceCount }}kr</p>
        </div>

        <div class="knapp">
            <button type="submit" class="btn btn-primary"><router-link style="text-decoration: none; color: black;" to="/User">Betala</router-link></button>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex' 
import shoppingCart from '@/store/shoppingcart/cart.js'
import cartPriceCount from '@/store/shoppingcart/cart.js'

import CartProduct from './CartProduct.vue'
export default {
    data() {
        return {
            order: {
                shoppingCart,
                cartPriceCount,
            }
        }
    },
    methods: {
        ...mapActions(['saveOrder']),
        onSubmit(){
            this.saveOrder(this.order)
            console.log(this.order)
        }
    },

    components:{
    CartProduct
  },
  computed: {
      ...mapGetters(['shoppingCart', 'cartItemCount', 'cartPriceCount'])
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