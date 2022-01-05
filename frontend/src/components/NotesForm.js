/* eslint-disable */
import React from 'react'

const NotesForm = ({handleNoteChange, submitNote, note}) => {

  return (
    <div>
      <h3>Enter important notes and reminder </h3>
      <form onSubmit={submitNote}>
        <div>
          Note
          <input
            id="note"
            value={note}
            onChange={handleNoteChange}
          />
        </div>
        <br></br>
        <button id='login-button' type="submit">Save</button>
      </form>
    </div>
  )
}

export default NotesForm