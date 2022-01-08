/* eslint-disable */

import axios from 'axios'
const ip = "54.245.47.192"
const baseUrl = 'https://'+ip+':5000/api/v1/login'

let axiosConfig = {
  withCredentials: true,
}

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials, axiosConfig)
  console.log(response)
  return response.data
}
export default {login}