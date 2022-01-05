/* eslint-disable */
import React from 'react'
import styles from "../css/Login.module.css";

const AttractionsList = ({attractions, showAttrForm}) => {
  return (
   <div>
      <br></br>
      <h3>Attractions</h3>
        <table id={styles.tableview} >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                        {attractions.map(a =>
                    <tr key={a.id}>
                        <td>{a.name}</td>
                        <td>{a.date}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <button id='add' type="submit" onClick={showAttrForm}>Add new</button>
    </div>
  )
}

export default AttractionsList