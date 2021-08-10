/* var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
  params: {q: '48.8567,2.3508'},
  headers: {
    'x-rapidapi-key': 'deb1bb0445msh75e4a249702a91ap132fccjsnfd0574bae906',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); */

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  params: {query: 'Stockholm'},
  headers: {
    'x-rapidapi-key': 'deb1bb0445msh75e4a249702a91ap132fccjsnfd0574bae906',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});