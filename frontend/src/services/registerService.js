/* eslint-disable */
import axios from 'axios'
// const ip = "54.245.47.192"
const ip = "localhost"
const baseUrl = 'https://'+ip+':5000/api/v1/register'

const register = async user => {
  console.log("came here in register")
  console.log(user);
  const response = await axios.post(baseUrl, user, {
    withCredentials: true,
  })
  console.log("BE RESP: ", response)
  return response.data
}
export default {register}