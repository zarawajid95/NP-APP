/* eslint-disable */
import {React, useState} from 'react'
import { AddHotel } from '../reducer/HotelReducer'
import { useDispatch } from 'react-redux'
import tripService from '../services/tripService'
import { hideHForm } from '../reducer/showHotelFormReducer'
import { showHList } from '../reducer/showHotelListReducer'


const HotelForm = ({trip_id }) => {
const dispatch = useDispatch()
const [name, setName] = useState('')
const [startDate, setStartDate] = useState('')
const [endDate, setEndDate] = useState('')
const [address, setAddress] = useState('')
const [rent, setRent] = useState('')
const [bookingCode, setBookingCode] = useState('')


const handleNameChange=({ target }) => setName(target.value)

const handleStartDateChange=({ target }) => setStartDate(target.value)

const handleEndDateChange=({ target }) => setEndDate(target.value)

const handleAddressChange=({ target }) => setAddress(target.value)

const handleRentChange=({ target }) => setRent(target.value)

const handleBookingCodeChange=({ target }) => setBookingCode(target.value)

        
const submitHotel = async (event) => {
  event.preventDefault()
  try {
    const hotel = await tripService.saveHotel({name, address, rent, startDate, endDate, bookingCode, trip_id})
    console.log(hotel)     
    dispatch(AddHotel({name, address, rent, startDate, endDate, bookingCode }))
    window.location.reload(false);
    // dispatch(showHList())
  } catch (exception) {
    console.log(exception)
  }
}
  return (
    <div>
      <h3>Enter the hotels you have booked </h3>
      <form onSubmit={submitHotel}>
        <div>
          name
          <input
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Address
          <input id="addr"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          Rent
          <input id="rent"
            value={rent}
            onChange={handleRentChange}
          />
        </div>
        <div>
          Booking Code
          <input id="code"
            value={bookingCode}
            onChange={handleBookingCodeChange}
          />
        </div>
        <div>
          Start Date
          <input id="sdate"
            type='date'
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          End Date
          <input id="edate"
            type='date'
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <br></br>
        <button id='login-button' type="submit">Save</button>
      </form>
    </div>
  )
}

export default HotelForm