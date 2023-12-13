const fs = require('fs');

const data = fs.readFileSync('service.json', 'utf-8');



const getOptions = (location, city, service) => {
  console.log(JSON.parse(data)[location][city][service]);
};


getOptions("NYC", "Bronx", "Accomodation");

