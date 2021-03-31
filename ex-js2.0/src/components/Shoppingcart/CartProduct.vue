<template>
  <div class="cart-item">
    <div>
      <div>
        <img :src="item.product.image" alt="">
        <div>
          <div><strong>{{ item.product.name }}</strong></div>
          <div><small>{{ item.quantity }} </small></div>
          <button><i class="fas fa-trash"></i></button>
          <!-- x {{ item.product.price}} -->
        </div>
      </div>
      <!-- <div>
        <div class="btn-group btn-group-sm me-2" role="group" area-label="quantity">
          <button class="btn btn-dark" @click.stop="">-</button>
          <button class="btn btn-dark" @click.stop="">+</button>
        </div>
        <button class="btn btn-danger btn-sm " @click.stop=""><i class="fas fa-trash"></i></button>
      </div> -->
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
export default {
  props: ['item']

}
</script>

<style scoped>
  /* .image-width {
    width: 90px;
  } */
</style>