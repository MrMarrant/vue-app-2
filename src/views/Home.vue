<template>
  <div>
    <a class="text-gray-800 text-xl font-bold md:text-1xl">Tableau Guérisons </a>
    <apexchart width="500" type="bar" :options="options" :series="seriesRecovery"></apexchart>
    <a class="text-gray-800 text-xl font-bold md:text-1xl">Tableau Morts </a>
    <apexchart width="500" type="bar" :options="options" :series="seriesDeaths"></apexchart>
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
      seriesRecovery: [{
        name: 'Nombre de personne ayant récupéré du Covid',
        data: []
      }],
      seriesDeaths: [{
        name: 'Nombres de personnes morte du Covid',
        data: []
      }],

    }
  },
  methods: {
    async initCountry() {
      //let dataCountry = [];
      //let dataNameCountry = [];
      const {data} = await CountryRepository.getAllCountry();
      // eslint-disable-next-line no-console
      console.log(data.response)
      this.seriesRecovery[0].data.push(
          //name: data.response[i].country,
          data.response[220].cases.recovered, // France
          data.response[211].cases.recovered, // Italie
          data.response[212].cases.recovered, // Espagne
          data.response[206].cases.recovered, // Poland
      )
      this.seriesDeaths[0].data.push(
          //name: data.response[i].country,
          data.response[220].deaths.total, // France
          data.response[211].deaths.total, // Italie
          data.response[212].deaths.total, // Espagne
          data.response[206].deaths.total, // Poland
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

    },
    async initFrance() {
      const {data} = await CountryRepository.getFrance();
      // eslint-disable-next-line no-console
      console.log('france')
      // eslint-disable-next-line no-console
      console.log(data.response[0])
      this.seriesRecovery[0].data.push(
          data.response[0].cases.recovered, // France
          /*data.response[211].cases.recovered, // Italie
          data.response[212].cases.recovered, // Espagne
          data.response[206].cases.recovered, // Poland */
      )
      this.seriesDeaths[0].data.push(
          data.response[0].deaths.total, // France
         /* data.response[211].deaths.total, // Italie
          data.response[212].deaths.total, // Espagne
          data.response[206].deaths.total, // Poland */
      )
      this.options.xaxis.categories.push(
          data.response[0].country, // France
          /*data.response[211].country, // Italie
          data.response[212].country, // Espagne
          data.response[206].country, // Poland */
      )

    },
    async initSpain() {
      const {data} = await CountryRepository.getSpain();
      // eslint-disable-next-line no-console
      console.log('france')
      // eslint-disable-next-line no-console
      console.log(data.response[0])
      this.seriesRecovery[0].data.push(
          data.response[0].cases.recovered, // France

      )
      this.seriesDeaths[0].data.push(
          data.response[0].deaths.total, // France

      )
      this.options.xaxis.categories.push(
          data.response[0].country, // France

      )

    },
    async initItaly() {
      const {data} = await CountryRepository.getItaly();
      // eslint-disable-next-line no-console
      console.log('france')
      // eslint-disable-next-line no-console
      console.log(data.response[0])
      this.seriesRecovery[0].data.push(
          data.response[0].cases.recovered, // France

      )
      this.seriesDeaths[0].data.push(
          data.response[0].deaths.total, // France

      )
      this.options.xaxis.categories.push(
          data.response[0].country, // France

      )

    },
  },
  mounted() {
    //this.initCountry();
    this.initFrance();
    this.initSpain();
    this.initItaly()
  }

}
</script>
