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
    },
    getEurope(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=europe')
    },
    getNA(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=north-america')
    },
    getSA(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=south-america')
    },
    getAfrica(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=africa')
    },
    getAsia(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=asia')
    },
    getAustralia(){
        return Repository.get('https://covid-193.p.rapidapi.com/statistics?country=australia')
    }
}