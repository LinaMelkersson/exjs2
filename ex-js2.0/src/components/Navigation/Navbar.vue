<template>
    <div>
        <nav>
            <img src="@/assets/kissylips.png" class="kissylips">
            <router-link to="/"><h1>For Your Loved One</h1></router-link>

<!-- Inloggad -->
            <ul class="inloggad" v-if="loggedIn">
              <li><router-link to="/about">Om oss</router-link></li>

              <li><router-link to="/user">Dina Ordrar</router-link></li>

              <li class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <cart />
                  </div>
              </li>

              <li class="nav-item" v-if="loggedIn">
                <a  href="#" class="nav-link pb-0" @click="logout">Logout</a>
              </li>

            </ul>

<!-- Ej inloggad -->
            <ul class="ejloggad" v-if="!loggedIn">
                <router-link to="/about">Om oss</router-link>
                <router-link to="/LogIn">Logga in</router-link>
                <router-link to="/Reg">Registrera dig</router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cart from '../Shoppingcart/Cart.vue'

export default {
  components: {
    Cart

  },
  computed: {
    ...mapGetters(['loggedIn'])
  },
    methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: rgb(253, 200, 209);
    color: #fff;
    height: 5rem;
    padding-bottom: 1rem;
    padding-top: 0.5rem;
  }

  .dropdown-menu {
    width: 20rem;
  }

  #dropdownMenuButton {
    background: none;
    box-shadow: none;

  }

  .ejloggad {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
  }


  .inloggad {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0;
    padding: 0;
    width: 30%;
  }
  a {
    text-decoration: none;
    color: rgb(7, 7, 7);
    padding: 1rem;
    display: inline-block;
  }
  a:hover {
    color: rgb(255, 255, 255);
  }

  .kissylips {
      padding: 0;
      height: 10rem; 
      margin: auto;
  }

  .fa-shopping-cart {
    font-size: 15pt;
    margin-top: 0.7rem;
  }

</style>