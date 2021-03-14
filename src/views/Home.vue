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
    console.log("debut");
    //let france =  this.initFrance();
    console.log("fin");
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ["France", "Allemagne", "Italie"]
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
      let dataCountry = [];
      const {data} = await CountryRepository.getAllCountry();
      for (let i = 0; i < 5 ; i++) {
        dataCountry.push({
          name: data.response[i].country,
          case: data.response[i].cases.recovered,
        })
        //console.log(data.response[i].country)
        //console.log(data.response[i].cases.recovered)
      }
      this.series.data = [...this.series.data, ...dataCountry];
      console.log(this.series.data);
    }
  },
  mounted() {
    this.initCountry()
  }

}
</script>
