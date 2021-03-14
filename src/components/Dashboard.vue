<template>
<div>

<ul>  
  <li><router-link to="/" exact>Home</router-link></li>
  <li><router-link to="/orders" exact>Orders</router-link></li>
  <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
</ul>

  <bar-chart></bar-chart>
  <line-chart></line-chart>

</div>
</template>

<script>
import database from "../firebase.js"
import BarChart from './charts/BarChart.vue'
import LineChart from './charts/LineChart.vue'

export default {
    name: 'Dashboard',
    data() {
        return{
            orders: [],
        }
    },
    components: {
      BarChart,
      LineChart
    },
    methods:{
      fetchItems:function(){
        database.collection('orders').get().then((querySnapShot)=>{
          let item={}
          querySnapShot.forEach(doc=>{
            item=doc.data()
            this.orders.push([doc.id, item])
          })
        }) 
      }
    },
    created(){
      this.fetchItems() 
    },
}

</script>

<style>


ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 105px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>
