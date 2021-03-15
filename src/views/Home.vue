<template>
  <div>
    <a class="text-gray-800 text-xl font-bold md:text-1xl">Tableau des Guérisons </a>
    <apexchart width="500" type="bar" :options="options" :series="seriesRecovery"></apexchart>
    <a class="text-gray-800 text-xl font-bold md:text-1xl">Tableau des Morts </a>
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
      const {data} = await CountryRepository.getAllCountry();
      // eslint-disable-next-line no-console
      console.log(data.response)
      this.seriesRecovery[0].data.push(
          data.response[220].cases.recovered, 
          data.response[211].cases.recovered, 
          data.response[212].cases.recovered, 
          data.response[206].cases.recovered, 
      )
      this.seriesDeaths[0].data.push(
          data.response[220].deaths.total, 
          data.response[211].deaths.total, 
          data.response[212].deaths.total, 
          data.response[206].deaths.total, 
      )
      this.options.xaxis.categories.push(
          data.response[220].country, 
          data.response[211].country, 
          data.response[212].country, 
          data.response[206].country, 
      )


    },
    async initFrance() {
      const {data} = await CountryRepository.getFrance();
      // eslint-disable-next-line no-console
      console.log('france')
      // eslint-disable-next-line no-console
      console.log(data.response[0])
      this.seriesRecovery[0].data.push(
          data.response[0].cases.recovered, 
      )
      this.seriesDeaths[0].data.push(
          data.response[0].deaths.total, 
      )
      this.options.xaxis.categories.push(
          data.response[0].country, 
      )

    },
    async initSpain() {
      const {data} = await CountryRepository.getSpain();
      // eslint-disable-next-line no-console
      console.log('france')
      // eslint-disable-next-line no-console
      console.log(data.response[0])
      this.seriesRecovery[0].data.push(
          data.response[0].cases.recovered, 

      )
      this.seriesDeaths[0].data.push(
          data.response[0].deaths.total, 

      )
      this.options.xaxis.categories.push(
          data.response[0].country, 

      )

    },
    async initItaly() {
      const {data} = await CountryRepository.getItaly();
      // eslint-disable-next-line no-console
      console.log('france')
      // eslint-disable-next-line no-console
      console.log(data.response[0])
      this.seriesRecovery[0].data.push(
          data.response[0].cases.recovered, 

      )
      this.seriesDeaths[0].data.push(
          data.response[0].deaths.total, 

      )
      this.options.xaxis.categories.push(
          data.response[0].country, 

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
