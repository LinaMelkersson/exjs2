<template>
<div class="card">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>


  <div class="card-body px-lg-5 pt-0">

    <form class="text-center" style="color: #757575;" @submit.prevent="handleSubmit">

      <div class="md-form">
        <input type="email" id="materialLoginFormEmail" class="form-control" ref="email" @keyup="handleChange">
        <label for="materialLoginFormEmail">E-mail</label>
      </div>

      <div class="md-form">
        <input type="password" id="materialLoginFormPassword" class="form-control" v-model="password">
        <label for="materialLoginFormPassword">Password</label>
      </div>

      <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

      <div>{{ email }}</div>
      <div>{{ password }}</div>


    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleChange() {
      this.email = this.$refs.email.value
    },
    handleSubmit() {
    this.email = ''
    this.password = ''
    }
  }
  
}
</script>

<style>

</style>