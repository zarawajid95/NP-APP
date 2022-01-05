/* eslint-disable */

const initialState = false;

const showHotelListReducer = (state=initialState, action) => {
  switch(action.type){
      case 'SHOW': 
        return true
      case 'HIDE':
        return false
      default:
        return true
  }
}

  export const showHList = () => {
    return ({
        type: "SHOW",
      })
  }

  export const hideHList = () => {
    return ({
        type: "HIDE"
      })
  }
  
  export default showHotelListReducer