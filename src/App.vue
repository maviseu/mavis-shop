<template>
  <div> 
    <h1>Mavis' Shop</h1>
  
    <router-view></router-view>
    
  </div>
</template>

<script>
//import QuantityCounter from "./components/QuantityCounter.vue"

export default {
  //components: {QC: QuantityCounter,},
  data() {
    return {
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

 h1 {
   font-family: Century Gothic;
   color: rgb(253, 159, 70);
   text-align:center;
   background-color:rgb(138, 71, 71);
   padding: 10px;
}
</style>
