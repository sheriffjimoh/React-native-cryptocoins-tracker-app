

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