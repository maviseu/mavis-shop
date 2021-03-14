import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

//this is actually called FireBaseData.js

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Number",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            scales: {
              yAxes: [{
                ticks:{min:0}
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        },
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        let basket = {}
        querySnapShot.forEach(doc => { 
          if (this.datacollection.labels.length == 0) {
            basket = doc.data()
            this.datacollection.labels = Object.keys(basket)
            //for (let i = 0; i < 6 ; i++) { 
              //this.datacollection.labels.push(Object.keys(doc.data())[i])
              //this.datacollection.datasets[0].data.push(parseInt(Object.values(doc.data())[i]))
            //}
          } else { //already populated with labels
            for (var food in doc.data()) {
              basket[food] += doc.data()[food]
            }
            //for (let i = 0; i < 6 ; i++) { 
            //  this.datacollection.datasets[0].data[i] = this.datacollection.datasets[0].data[i] + parseInt(Object.values(doc.data())[i])
            //}
          } 
          this.datacollection.datasets[0].data = Object.values(basket)

        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}