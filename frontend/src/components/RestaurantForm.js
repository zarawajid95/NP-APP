/* eslint-disable */
import React from 'react'

const RestaurantForm = ({submitRestaurant, handleAddressChange,
   handleDateChange, handleNameChange, name, date, address}) => {
  return (
    <div>
      <h3>Enter the Restaurant you wish you visit </h3>
      <form onSubmit={submitRestaurant}>
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
          Date
          <input id="date"
          type="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <br></br>
        <button id='login-button' type="submit">Save</button>
      </form>
    </div>
  )
}

export default RestaurantForm