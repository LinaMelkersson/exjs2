<template>
  <div>
    <productdetail v-for="product in products" :key="product._id" :product="product" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Productdetail from '../components/Productdetail.vue'



export default {
  components: {
    Productdetail
  },

  methods: {
    ...mapActions(['getProducts'])
  },

  computed: {
    ...mapGetters(['products'])
  },

  mounted() {
    this.getProducts()
  }
}

</script>
