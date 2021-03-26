<template>
<div>
    <div class="back">
        <router-link style="text-decoration:none;" to="/">Backa</router-link>
    </div>

    <one-product/>
    
</div>
</template>

<script>
import OneProduct from '../components/Products/OneProduct.vue'

export default {
  components: { OneProduct },

}
</script>

<style>
.back {
    margin-left: 22rem;
    margin-top: 2rem;
}

</style>