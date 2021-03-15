<template>
  <div id="chart">
    <apexchart type="bar" height="430" :options="chartOptions" :series="series"></apexchart>
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
  data: function() {
    return {
      series: [{
        name: 'Nombre de nouveau cas',
        data: []
      }, {
        name: 'Nombre de nouveau morts',
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [],
        },
      },
    }
  },
  methods: {
    async initFrance() {
      //let dataCountry = [];
      //let dataNameCountry = [];
      const {data} = await CountryRepository.getFrance();
      // eslint-disable-next-line no-console
      console.log(data.response)
      this.series[0].data.push(
          parseInt(data.response[0].cases.new.substr(1),10), // France
      )
      this.series[1].data.push(
          parseInt(data.response[0].deaths.new.substr(1),10), // France
      )
      this.chartOptions.xaxis.categories.push(
          data.response[0].country, // France
      )
    },
    async initSpain() {
      //let dataCountry = [];
      //let dataNameCountry = [];
      const {data} = await CountryRepository.getSpain();
      // eslint-disable-next-line no-console
      console.log(data.response)
      this.series[0].data.push(
          parseInt(data.response[0].cases.new.substr(1),10), // France
      )
      this.series[1].data.push(
          parseInt(data.response[0].deaths.new.substr(1),10), // France
      )
      this.chartOptions.xaxis.categories.push(
          data.response[0].country, // France
      )
    },
    async initItaly() {
      //let dataCountry = [];
      //let dataNameCountry = [];
      const {data} = await CountryRepository.getItaly();
      // eslint-disable-next-line no-console
      console.log(data.response)
      this.series[0].data.push(
          parseInt(data.response[0].cases.new.substr(1),10), // France
      )
      this.series[1].data.push(
          parseInt(data.response[0].deaths.new.substr(1),10), // France
      )
      this.chartOptions.xaxis.categories.push(
          data.response[0].country, // France
      )
    },
  },
  mounted() {
    this.initFrance();
    this.initSpain();
    this.initItaly()
  }

}
</script>
