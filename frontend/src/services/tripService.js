/* eslint-disable */
import axios from 'axios'
const ip = "54.245.47.192"
// const ip = "localhost"
const baseUrl = 'https://'+ip+':5000/api/v1/'
const infoUrl = baseUrl+'/info'
const delUrl = baseUrl+'/delete'
const tripInfoUrl = baseUrl+'/tripInfo'
const attractionUrl = baseUrl+'/attraction'
const hotelUrl = baseUrl+'/hotel'
const noteUrl = baseUrl+'/note'
const restaurantUrl = baseUrl+'/restaurant'
const budgetUrl = baseUrl+'/budget'


const getTripInfo = async (trip_id) => {
  const response = await axios.get(tripInfoUrl+"?id="+trip_id, {
    withCredentials: true,
  })
  return response.data
}
const getInfo = async (id, option) => {
  const response = await axios.get(infoUrl+"?info="+option+"&id="+id, {withCredentials: true})
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

const deleteEntry = async (table, id, trip_id) => {
  console.log("I am called service")
  const response = await axios.get(delUrl+"?table="+table+"&id="+id+"&trip_id="+trip_id, {withCredentials: true})
  return response.data
}
export default {getTripInfo, getInfo, saveAttraction, saveHotel, saveRestaurant, saveNote, saveBudget, deleteEntry}