import Repository from './requestApi.js'

export default{
  getAllCountry(){
    return Repository.get('https://covid-193.p.rapidapi.com/statistics')
  }
} 
