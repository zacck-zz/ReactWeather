//data fetching lib
var axios  = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=00ba80c61a7a528db2ef3f60d105dc76&units=metric';


module.exports = {
  getTemp: function (location){
    //encode the url
    var encodedLocation = encodeURIComponent(location);
    //build the url
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //do the actual call (chaining the promises)
    return axios.get(requestUrl).then(function(res){
      //some error checking
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }
      else  {
        return res.data.main.temp;
      }

    }, function (res) {
      throw new Error(res.data.message);
    });

  }
}
