/* eslint-disable */
import React from 'react'

const BudgetForm = ({handleBudgetChange, submitBudget, budget}) => {

  return (
    <div>
      <h3>Enter the estimated budget </h3> 
      <form onSubmit={submitBudget}>
        <div>
          Budget (€) 
          <input
            id="budget"
            value={budget}
            onChange={handleBudgetChange}
          />
        </div>
        <br></br>
        <button id='login-button' type="submit">Save</button>
      </form>
    </div>
  )
}

export default BudgetForm