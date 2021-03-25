<template>
    <div>
        <nav>
            <img src="@/assets/kissylips.png" class="kissylips">
            <router-link to="/"><h1>For Your Loved One</h1></router-link>

            <ul v-if="active">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <!-- Mina ordrar/profil -->
                <!-- Kundvagn -->
                <!-- Logga ut -->
            </ul>
            <ul v-else>
                <router-link to="/about">About</router-link>
                <router-link to="/LogIn">Logga in</router-link>
                <router-link to="/Reg">Registrera dig</router-link>
            </ul>
        </nav>
    </div>
</template>

<script>


export default {
  props: ['active']
}
</script>

<style scoped>
  nav {
    background: rgb(253, 200, 209);
    color: rgb(7, 7, 7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 4rem;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0;
    padding: 0;
    width: 20%;
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
      margin-top: 7rem;
      margin-left: 5rem;
      height: 10rem; 
  }
</style>