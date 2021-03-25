<template>
  <div >
    <navbar />
    <router-view/>
    <Footer/>
    
  </div>
</template>

<script>
import Footer from './components/Navigation/Footer.vue'
import Navbar from './components/Navigation/Navbar'


export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  width: 80%;
  display: flex;
  justify-content: center;
}

.gridcontainer {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
}
</style>
