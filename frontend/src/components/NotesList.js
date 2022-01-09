/* eslint-disable */
import React from 'react'
import styles from "../css/Login.module.css";
import tripService from '../services/tripService'


const NotesList = ({notes, showNotesForm, trip_id}) => {

  const deleteNote = async (id) => {
    console.log(id)
    const deleted = await tripService.deleteEntry("note", id, trip_id)
    console.log(deleted)
    if(deleted){
      window.location.reload(false);
    }
  }

  return (
   <div>
      <br></br>
      <h3>Notes</h3>
        <table id={styles.tableview}>
                <thead>
                <tr>
                <th>Notes</th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                    {notes.map(a =>
                    <tr key={a.id}>
                        <td>{a.note}</td>
                        <td><button id={styles.delete} onClick={() => deleteNote(a.id)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
            <button id='add' type="submit" onClick={showNotesForm}>Add new</button>
    </div>
  )
}

export default NotesList