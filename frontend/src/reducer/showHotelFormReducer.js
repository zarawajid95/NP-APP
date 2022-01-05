/* eslint-disable */

const initialState = false;

const showHotelFormReducer = (state=initialState, action) => {
  switch(action.type){
      case 'SHOW': 
        return true
      case 'HIDE':
        return false
      default:
        return true
  }
}

  export const showHForm = () => {
    return ({
        type: "SHOW",
      })
  }

  export const hideHForm = () => {
    return ({
        type: "HIDE"
      })
  }
  
  export default showHotelFormReducer