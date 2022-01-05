/* eslint-disable */
import React from 'react'
import styles from "../css/Login.module.css";


const NotesList = ({notes, showNotesForm}) => {
  return (
   <div>
      <br></br>
      <h3>Notes</h3>
        <table id={styles.tableview}>
                <thead>
                <tr>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                    {notes.map(a =>
                    <tr key={a.id}>
                        <td>{a.note}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <button id='add' type="submit" onClick={showNotesForm}>Add new</button>
    </div>
  )
}

export default NotesList