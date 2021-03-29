<template>
<div>
    <div class="place">
      <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>

      <div class="centrerad">
          <p>{{product.category}}</p>
          <div class="produktbeskrivning">
              <h1>{{product.title}}</h1>
              <p>{{product.description}}</p>
              <h3>{{product.price}}kr</h3>
          </div>
          <img :src="require('@/assets/' + product.img)" alt="">
      </div>
    </div>
</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
// import OneProduct from '../components/Products/OneProduct.vue'

export default {
//   components: { OneProduct },
  props:['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.id)
  }
}



</script>

<style>
.fa-arrow-left {
    font-size: 20pt;
    color: black;
    padding: 2rem;
    margin-left: 10rem;
}

.fa-arrow-left:hover {
    color: rgb(253, 200, 209);
}

.place {
    margin: auto;
    width: 80%;
}

.centrerad {
    display: grid;
    justify-content: center;
}


</style>