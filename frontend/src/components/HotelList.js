/* eslint-disable */
import React from 'react'
import {useSelector } from 'react-redux'
import styles from "../css/Login.module.css";


const HotelsList = ({showHotelFormHandler}) => {
  const h = []
  const hotels = useSelector(state => state.hotels)
  console.log("hotels", hotels)  

  const hotel_final = []
  for (let i = 0; i < hotels.length; i++) {
      hotel_final.push(hotels[i])
}
  console.log("hotel final", hotel_final)
    
  return (
   <div>
      <br></br>
      <h3>Hotels</h3>
        <table id={styles.tableview}>
          <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rent</th>
                </tr>
          </thead>
          <tbody>
            {hotel_final.map((a, index) =>
                    <tr key={index}>
                        <td>{a.name}</td>
                        <td>{a.address}</td>
                        <td>{a.rent}</td>
                    </tr>
                )}
                </tbody>
        </table>
        <button id='add' type="submit" onClick={showHotelFormHandler}>Add new</button>
    </div>
  )
}

export default HotelsList