const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6bc9a1e9d73e1765f000319d6e66035c&query=' + latitude + ',' + longitude + '&units=f';

    request({ url: url, json: true }, (error, { body } = {}) => {

        if(error){
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find specified location.', undefined);
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. The current temperature is ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.');
        }
    });
}

module.exports = forecast;