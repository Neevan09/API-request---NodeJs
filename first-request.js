
const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users/1')
    .then((body) => {
        const parsedData = JSON.parse(body);
        //console.log(parsedData);
       console.log(`I am ${parsedData.name} from ${parsedData.address.city}`);
    })
    .catch((err)=> {
        console.log(err);
    });
