<template>
<div>
  <h2 style="text-align:left; margin-left: 15rem; color:black; margin-top: 5rem;"> Dina Ordrar</h2>
  <div class="gridproducts" >
    <orderdetail style="margin-left: 5rem;" v-for="order in orders" :key="order._id" :order="order" />
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Orderdetail from '../components/Products/Orderdetail'



export default {
  components: {
    Orderdetail
  },

  methods: {
    ...mapActions(['getOrders'])
  },

  computed: {
    ...mapGetters(['orders'])
  },

  mounted() {
    this.getOrders()
  }
}

</script>

<style>
.gridproducts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 3rem;
  justify-items: center;
  margin-top: 4rem;
}
</style>