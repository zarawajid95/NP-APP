/* eslint-disable */
import axios from 'axios'
const ip = "54.245.47.192"
const baseUrl = 'https://'+ip+':5000/api/v1/'
const forcastUrl = baseUrl+'/forecast'
const destinationUrl =  baseUrl+'/destination'
const usernameUrl =  baseUrl+'/username'


const checkWeather = async data => {
  console.log(data);
  const response = await axios.post(forcastUrl, data, {
    withCredentials: true,
  })
  return response.data
}

const getUserName = async () => {
  const response = await axios.get(usernameUrl, {
    withCredentials: true,
  })
  return response.data
}

const saveDestination = async data => {
  console.log("saving",data)
  const response = await axios.post(destinationUrl, data, {
    withCredentials: true,
  })
  return response.data
}

const getDestinations = async () => {
  const response = await axios.get(destinationUrl, {
    withCredentials: true,
  })
  return response.data
}

export default {checkWeather, saveDestination, getDestinations, getUserName}