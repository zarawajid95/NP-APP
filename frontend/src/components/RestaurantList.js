/* eslint-disable */
import React from 'react'
import styles from "../css/Login.module.css";

const RestaurantList = ({restaurants, showRstForm}) => {
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
                </tr>
                </thead>
                <tbody>
                    {restaurants.map(a =>
                    <tr key={a.id}>
                        <td>{a.name}</td>
                        <td>{a.address}</td>
                        <td>{a.date}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <button id='add' type="submit" onClick={showRstForm}>Add new</button>
    </div>
  )
}

export default RestaurantList