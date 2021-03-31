<template>
  <div class="login">
    <form class="box123 text-center p-5 col-6 mx-auto" @submit.prevent="onSubmit">
      <p class="h4 mb-4">Logga In</p>
      
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control border-bottom" v-model="email"/>
        <label class="form-label" for="form2Example1">Email:</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control border-bottom" v-model="password"/>
        <label class="form-label" for="form2Example2">Lösenord:</label>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">Logga In</button>

      <div class="text-center">
        <p>Är du inte medlem? <router-link to="/Reg">Registrera Dig</router-link></p>
        
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }

        this.$router.push({ name: 'Home'});

        this.login({user})
        
      }
    }
  }
}
</script>

<style>
.login {
  display: grid;
  margin: auto;
  margin-top: 4rem;
}

.box123 {
  width: 30%;
}

.btn {
  color: black;
  background: rgb(253, 200, 209);
}

.btn:hover {
  color: #fff;
  background: rgb(253, 200, 209);
}

</style>