/* eslint-disable */
import React from 'react'
import {useSelector } from 'react-redux'
import styles from "../css/Login.module.css";
import tripService from '../services/tripService'


const HotelsList = ({showHotelFormHandler, trip_id}) => {
  const h = []
  const hotels = useSelector(state => state.hotels)
  console.log("hotels", hotels)  

  const hotel_final = []
  for (let i = 0; i < hotels.length; i++) {
      hotel_final.push(hotels[i])
}
  console.log("hotel final", hotel_final)

  const deleteHotel = async (id) => {
    console.log(id)
    const deleted = await tripService.deleteEntry("hotel", id, trip_id)
    console.log(deleted)
    if(deleted){
      window.location.reload(false);
    }
  }
    
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
                    <th></th>
                </tr>
          </thead>
          <tbody>
            {hotel_final.map((a, index) =>
                    <tr key={index}>
                        <td>{a.name}</td>
                        <td>{a.address}</td>
                        <td>{a.rent}</td>
                        <td><button id={styles.delete} onClick={() => deleteHotel(a.id)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
        </table>
        <button id='add' type="submit" onClick={showHotelFormHandler}>Add new</button>
    </div>
  )
}

export default HotelsList