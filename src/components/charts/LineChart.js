import { Line } from 'vue-chartjs'
import axios from 'axios'
// this is actually called CallAPI.js

export default {
    extends: Line,
    data: function () {
      return {
        dataAPI: {
            labels: [],
            datasets: [{
                label: "",
                fill: false,
                backgroundColor: "#3e95cd",
                data: [],
                borderColor:"#3e95cd",
              },
              {
                label: "",
                fill: false,
                backgroundColor: "#8e5ea2",
                borderColor: "#8e5ea2",
                data: []
              },
              {
                label: "",
                fill: false,
                backgroundColor: "#3cba9f",
                borderColor: "#3cba9f",
                data: []
              },
              {
                label: "",
                fill: false,
                backgroundColor: "#e8c3b9",
                borderColor: "#e8c3b9",
                data: []
              },
              {
                label: "",
                fill: false,
                backgroundColor: "#c45850",
                borderColor: "#c45850",
                data: []
              },
              {
                label: "",
                fill: false,
                backgroundColor: "#f3c9cb",
                borderColor: "#f3c9cb",
                data: []
              },
              {
                label: "",
                fill: false,
                backgroundColor: "#4f8fff",
                borderColor: "#4f8fff",
                data: []
              },
            ]
        },
          options: {
              legend: { display: true },
              title: {
                display: true,
                text: 'PSI Twenty Four Hourly (By Region)'
              },
              responsive: true,
              maintainAspectRatio: false
          }
      }
    },
    methods: {
      fetchItems: function () {
          axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
          .then(response => {            

            for (var i = 0; i < response.data.region_metadata.length; i++) {
                this.dataAPI.datasets[i].label = response.data.region_metadata[i].name //array of objects.
            }

            this.results = response.data.items
            for (var key of this.results) { //of not in
                this.dataAPI.labels.push(key.timestamp)
        
            //if (this.results[key]["timestamp"]) {
            //    this.dataAPI.labels.push(this.results[key]["timestamp"])
            //}
                var psi = key.readings.psi_twenty_four_hourly
                for (var k = 0; k < this.dataAPI.datasets.length; k ++) {
                    var values = Object.values(psi)
                    this.dataAPI.datasets[k].data.push(values[k])
                }
            }    

         
            //for(let key in this.results[0]){
            //this.chartdata.datasets[0].data.push(this.results[key])
            //this.chartdata.labels.push(key)
        //}
    
              //response.data.forEach(data => { 
                  //this.dataAPI.labels.push(data[0])
                  //this.dataAPI.datasets[0].data.push(data[1])
              //})
              this.renderChart(this.dataAPI, this.options)
          })
      }
    },
    created () {
      this.fetchItems()
    }
  }