<template>
<div>
  <ul>
  <p> Menu: </p>
  <li v-for="item in itemsSelected" v-bind:key="item.count"> 
  {{ item[0] + " x " + item[1]}}
  </li>
  </ul>

  <button v-on:click="findTotal(); sendOrder();">Calculate Total</button>
  <p v-show="check">Subtotal: ${{ count }} </p>
  <h2 v-show="check">Grand Total: ${{ gst }} </h2>
 </div>
</template>

<script>
import database from "../firebase.js"

export default {
    name: 'Basket',
    data() {
      return {
        count: 0,
        check: false,
      }
    },
    
    props: {
        itemsSelected: Array
    },

    methods: {
        findTotal: function() {
          this.check = true;
        for (let i = 0; i < this.itemsSelected.length; i++) { 
          const curr_item = this.itemsSelected[i];
          const item_qty = curr_item[1];
          const item_price = curr_item[2];
          this.count += item_qty * item_price;

        }
      },
      sendOrder: function () {
        let order = {"Prawn omelette": 0, "Dry Beef Hor Fun": 0, "Mapo Tofu": 0, "Pork Fried Rice": 0,
        "Cereal Prawn": 0, "Sambal KangKung": 0}

        for (let i = 0; i < this.itemsSelected.length; i ++) {
          const curr_item = this.itemsSelected[i];
          order[curr_item[0]] = curr_item[1];
        }
          
        database.collection('orders').add(order).then(() => {location.reload});
      },
        
      

    },

    computed: {
      gst:function() {
        return (this.count * 1.07).toFixed(2);
      }
    },
}

</script>

<style scoped>
button{
font-family: 'Avenir',Helvetica, Arial, sans-serif;
text-align: center;
color: red
}

</style>