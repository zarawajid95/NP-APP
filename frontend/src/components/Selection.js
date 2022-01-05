/* eslint-disable */
import React from 'react'

const Selection = ({options, handleOptionChange, handleInfo}) => {
  return (
    <form onSubmit={handleInfo}>
    <h4>Select to see the information </h4>
    <select name="info" id="info" onChange={handleOptionChange} >
    { options.map(d => <option value={d.value} key={d.id}> {d.value} </option>)}
    </select>
    <br></br>
    <br></br>
    <input type="submit"></input>
    </form>
  )
}

export default Selection