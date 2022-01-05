/* eslint-disable */
import axios from 'axios'
const baseUrl = 'https://localhost:5000/api/v1/forecast'
const destinationUrl = 'https://localhost:5000/api/v1/destination'
const usernameUrl = 'https://localhost:5000/api/v1/username'


const checkWeather = async data => {
  console.log(data);
  const response = await axios.post(baseUrl, data, {
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