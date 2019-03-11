<template>
  <div class="hello container-fluid">
    <HeaderNav/>
    <MainContent/>
    <Products/>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import MainContent from './MainContent.vue'
import Products from './Products.vue'

export default {
  name: 'Layout',
  components: {
    HeaderNav,
    MainContent,
    Products
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
