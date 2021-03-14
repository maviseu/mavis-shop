<template>
<div>
    <div v-for="(key,value,index) in datapacket" v-bind:key="index"><br>
    <form>
      {{ value }} : {{ key }} <br>
  <input type="number" min="0" v-bind:id= index placeholder=0><br>
    </form>
  <br><br>
</div>
    <button v-on:click="updateOrder">Update Order</button>
  
 </div>
</template>

<script>

import database from "../firebase.js"

export default {
    name: 'Modify',
    
    props: ["id"],
    data() {
        return{
            datapacket: {},
        }
    },
    methods:{
      fetchItems:function(){
        database.collection('orders').get().then((querySnapShot)=>{
          querySnapShot.forEach(doc=>{
            if (doc.id === this.id) {
              this.datapacket = doc.data();
            }
          })
        }) 
      },
      updateOrder: function(){
          var copy = this.datapacket
          for (let i = 0; i < 6 ; i++) { //cannot be datapacket length 
              var item = document.getElementById(i)
              copy[Object.keys(copy)[i]] = parseInt(item.value)
          }
          database.collection('orders').doc(this.id).set(copy).then(
              () => this.$router.push({ path: '/orders' }))
          
          //then(() => location.reload())
          
          

      }
    },
    
    created(){
      this.fetchItems() 
    },
}
</script>