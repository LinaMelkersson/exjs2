<template>
<div class="card">

  <h3 class="rubrik">
    <strong>Logga In</strong>
  </h3>


  <div class="form">

    <form class="text-center" @submit.prevent="handleSubmit">

      <div class="md-form">
        <label for="materialLoginFormEmail">E-mail:</label>
        <input type="email" id="materialLoginFormEmail" class="form-control" ref="email" @keyup="handleChange">
      </div>

      <div class="md-form">
        <label for="materialLoginFormPassword">Lösenord</label>
        <input type="password" id="materialLoginFormPassword" class="form-control" v-model="password">
      </div>

      <button class="subbtn" type="submit">Logga In</button>

      <!-- <div>{{ email }}</div>
      <div>{{ password }}</div> -->


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
.card {
  display: grid;
  justify-items: center;
  margin:auto;
  margin-top: 5rem;
  padding-bottom: 2rem;
  width: 50%;
}

.rubrik {
  padding: 2rem;
}

.md-form {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 1fr;
  text-align: left;
}

.text-center {
  display: grid;
  justify-items: center;
}

.subbtn {
  margin-top: 2rem;
  color: black;
  padding: 0.5rem;
  border-radius: 10px;
  background: rgb(253, 200, 209);
  border: none;
}

</style>