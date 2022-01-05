/* eslint-disable */
const fetch = require('node-fetch');
const Trip = require('../models/trip');
const appId = process.env.APPID || '5f9e2721684034438c706e84445de732';
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';

let startDate = '';
let endDate = '';

const fetchWeather = async (type, targetCity) => {
    // type parameter can either be weather or forecast to construct the url
    const endpoint = `${mapURI}/${type}?q=${targetCity}&appid=${appId}`;
    const response = await fetch(endpoint);
    return response ? response.json() : {};
  };

const format = (data) => {
  let result = {}
  let temp = 0
  let counter = 0
  for (let i = 0; i < data.length; i++) {
    // const date = data[i].dt_txt.split(' ')[0]
    temp= temp + data[i].main.temp
    counter++
  }
  return result['average_temp'] = Math.round((temp/counter) - 273.15)
}

  exports.forecast = async (req, res) => {
    const targetCity = req.body.destination
    startDate = req.body.startDate
    endDate = req.body.endDate

    const weatherData = await fetchWeather('forecast', targetCity);
    const forecast = format(weatherData.list)
    res.json(forecast)
  }

  exports.saveDestination = async (req, res) => {
    const user_id = getIdfromcookie(req.headers.cookie)
    console.log("user id", user_id)
    console.log("req body", req.body);
    const trip_obj = new Trip(req.body)
    Trip.saveDestination(trip_obj, user_id, function(err, trip) {
      if(!err){
        console.log(trip);
        res.json(trip)
      }
    });
  }

  exports.getDestination = async (req, res) => {
    const user_id = getIdfromcookie(req.headers.cookie)
    console.log("user id", user_id)
    Trip.getDestination(user_id, function(err, dst) {
      if(!err){
        console.log(dst);
        res.json(dst)
      }
    });
  }

  function getIdfromcookie(cookie) {
    return cookie.split('=')[1];
  }