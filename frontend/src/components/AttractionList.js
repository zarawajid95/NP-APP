/* eslint-disable */
import styles from "../css/Login.module.css";
import React, { useState } from 'react'
import tripService from '../services/tripService'

const AttractionsList = ({attractions, showAttrForm, trip_id}) => {
  
  const deleteAttraction = async (id) => {
    console.log(id)
    const deleted = await tripService.deleteEntry("attraction", id, trip_id)
    console.log(deleted)
    if(deleted){
      window.location.reload(false);
    }
  }

  return (
   <div>
      <br></br>
      <h3>Attractions</h3>
        <table id={styles.tableview} >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {attractions.map(a =>
                    <tr key={a.id}>
                        <td>{a.name}</td>
                        <td>{a.date}</td>  
                        <td><button id={styles.delete} onClick={() => deleteAttraction(a.id)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
            <button type="submit" onClick={showAttrForm}>Add new</button>
    </div>
  )
}

export default AttractionsList