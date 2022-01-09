/* eslint-disable */
import React from 'react'
import styles from "../css/Login.module.css";
import tripService from '../services/tripService'


const RestaurantList = ({restaurants, showRstForm, trip_id}) => {

  const deleteRst = async (id) => {
    console.log(id)
    const deleted = await tripService.deleteEntry("restaurant", id, trip_id)
    console.log(deleted)
    if(deleted){
      window.location.reload(false);
    }
  }

  return (
   <div>
      <br></br>
      <h3>Restaurants</h3>
        <table id={styles.tableview}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {restaurants.map(a =>
                    <tr key={a.id}>
                        <td>{a.name}</td>
                        <td>{a.address}</td>
                        <td>{a.date}</td>
                        <td><button id={styles.delete} onClick={() => deleteRst(a.id)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
            <button id='add' type="submit" onClick={showRstForm}>Add new</button>
    </div>
  )
}

export default RestaurantList