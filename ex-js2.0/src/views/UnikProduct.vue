<template>
<div>
    <div class="place">
      <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>

      <div class="centrerad">
          <img class="unikimg" :src="require('@/assets/' + product.img)" alt="">
          <div class="produktbeskrivning">
              <p>{{product.category}}</p>
              <h1>{{product.title}}</h1>
              <p>{{product.description}}</p>
              <h3>{{product.price}}kr</h3>
          </div>
      </div>
    </div>
</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
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
    grid-template-columns: 1fr 1fr ;
    justify-content: center;
    margin: auto;
    width: 80%;
}

.unikimg {
    width: 20rem;
    margin: auto;
}


</style>