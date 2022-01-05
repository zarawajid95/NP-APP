/* eslint-disable */
import axios from 'axios'
const baseUrl = 'https://localhost:5000/api/v1/info'
const tripInfoUrl = 'https://localhost:5000/api/v1/tripInfo'
const attractionUrl = 'https://localhost:5000/api/v1/attraction'
const hotelUrl = 'https://localhost:5000/api/v1/hotel'
const noteUrl = 'https://localhost:5000/api/v1/note'
const restaurantUrl = 'https://localhost:5000/api/v1/restaurant'
const budgetUrl = 'https://localhost:5000/api/v1/budget'


const getTripInfo = async (trip_id) => {
  const response = await axios.get(tripInfoUrl+"?id="+trip_id, {
    withCredentials: true,
  })
  return response.data
}
const getInfo = async (id, option) => {
  const response = await axios.get(baseUrl+"?info="+option+"&id="+id, {withCredentials: true})
  return response.data
}

const saveAttraction = async data => {
  console.log("saving",data)
  const response = await axios.post(attractionUrl, data, {
    withCredentials: true,
  })
  return response.data
}

const saveHotel = async data => {
  console.log("saving",data)
  const response = await axios.post(hotelUrl, data, {
    withCredentials: true,
  })
  return response.data
}

const saveRestaurant = async data => {
  console.log("saving",data)
  const response = await axios.post(restaurantUrl, data, {
    withCredentials: true,
  })
  return response.data
}

const saveNote = async data => {
  console.log("saving",data)
  const response = await axios.post(noteUrl, data, {
    withCredentials: true,
  })
  return response.data
}

const saveBudget = async data => {
  console.log("saving",data)
  const response = await axios.post(budgetUrl, data, {
    withCredentials: true,
  })
  return response.data
}
export default {getTripInfo, getInfo, saveAttraction, saveHotel, saveRestaurant, saveNote, saveBudget}