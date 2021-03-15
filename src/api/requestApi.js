import axios from "axios";
export default  axios.create({
    headers: {
        'x-rapidapi-key': 'e42a44444fmsh33250968d99735ap1d5e08jsn2a372ce9267d',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
})