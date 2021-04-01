<template>
<div class="cart-item">
    <div class="cartcart">
        <img class="cartimg" :src="require('@/assets/' + item.product.img)" alt="">
        <div class="gridcart">
            <div class="produktgrid">
                <div class="text"><strong>{{ item.product.title }}</strong></div>
                <div class="antal"><small>{{ item.quantity }} </small></div>
            </div>
            <div class="btngrid">
                <button class="cartbtn" @click.stop="decrementQuantity(item)"><i class="fas fa-minus"></i></button>
                <button class="cartbtn" @click.stop="incrementQuantity(item)"><i class="fas fa-plus"></i></button>
                <button class="cartbtn" @click.stop="deleteProductFromCart(item.product._id)"><i class="fas fa-trash"></i></button>
            </div>

            



          
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
import { mapActions } from 'vuex'

export default {
  props: ['item'],
  methods: {
      ...mapActions (['decrementQuantity', 'deleteProductFromCart', 'incrementQuantity'])
  }
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
    grid-template-columns: 1fr 1fr;
}

.produktgrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 10rem;
}

.btngrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.cartbtn {
    background: rgb(253, 200, 209);
    outline: none;
    border: none;
    padding: 0.3rem;
    margin: 0.3rem;
    border-radius: 10px;
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