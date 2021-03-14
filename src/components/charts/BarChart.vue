<template>
  <div class="chart">
    <h2>Bar Chart</h2>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>

h2 {
  color: white;
  font-family: Century Gothic;
  text-align:center;
  background-color: burlywood;
  padding: 10px;
}
</style>