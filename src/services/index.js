const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
const  client = new CoinMarketCap(apiKey)


function getCoinsList(){
    let result = [];
    client.getGlobal()
    .then((response) => {
       result = response  
       }
    ).catch((error) => result = error);

    return result;
}


export default {getCoinsList};