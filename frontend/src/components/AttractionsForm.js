/* eslint-disable */
import React, { useState } from 'react'
import tripService from '../services/tripService'

const AttractionsForm = ({handleNameChange, handleDateChange, SubmitAttraction, date, name}) => {
  return (
    <div>
      <h3>Enter an attraction </h3>
      <form onSubmit={SubmitAttraction}>
        <div>
          name
          <input
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          date
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

export default AttractionsForm