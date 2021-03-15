import Repository from './requestApi.js'

export default{
    getAllCountry(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics')
    },
    getFrance(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=france')
    },
    getSpain(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=spain')
    },
    getItaly(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=italy')
    }
}