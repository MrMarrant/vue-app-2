<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import {RepositoryFactory} from "@/api/RepositoryFactory";

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

const CountryRepository = RepositoryFactory.get('country')

export default {
  name: "home",
  data: function () {
    //let france =  this.initFrance();
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: []
        }
      },
      series: [{
        name: 'series-1',
        data: []
      }]
    }
  },
  methods: {
    async initCountry() {
      //let dataCountry = [];
      //let dataNameCountry = [];
      const {data} = await CountryRepository.getAllCountry();
      // eslint-disable-next-line no-console
      console.log(data.response)
      this.series[0].data.push(
          //name: data.response[i].country,
          data.response[220].cases.recovered, // France
          data.response[211].cases.recovered, // Italie
          data.response[212].cases.recovered, // Espagne
          data.response[206].cases.recovered, // Poland
      )
      this.options.xaxis.categories.push(
          //name: data.response[i].country,
          data.response[220].country, // France
          data.response[211].country, // Italie
          data.response[212].country, // Espagne
          data.response[206].country, // Poland
      )
      //console.log(data.response[i].country)
      //console.log(data.response[i].cases.recovered)
      //this.blueBarChart.chartData.datasets[0].data = [...this.blueBarChart.chartData.datasets[0].data, ...dataCountry];
      //this.blueBarChart.chartData.labels = [...this.blueBarChart.chartData.labels, ...dataNameCountry];

    }
  },
  mounted() {
    this.initCountry()
  }

}
</script>
