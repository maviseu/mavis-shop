<template>
<div>
<button v-on:click="checkX">+</button>
<a> {{ counter }} </a>
<button v-on:click="checkY">-</button>
<br><br>


</div>
</template>

<script>


export default {
    name: 'QuantityCounter',
    data() {
        return{
            counter: 0,
        }
    },
    methods: {
        checkX: function() {
            if (this.counter >= 10) {
            alert("You cannot buy more than 10 items.")
            } else {
                this.counter++;
            }
            this.$emit('counter', this.item, this.counter)
        },
        checkY: function() {
            if (this.counter > 0) {
                this.counter--;
            } 
            this.$emit('counter', this.item, this.counter)
        }
    },
    props: {
        item: {
            type: Object
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