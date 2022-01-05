/* eslint-disable */

const initialState = [];

const HotelReducer = (state=initialState, action) => {
  switch(action.type){
      case 'ADD_HOTELS': 
        return state.concat(action.data)
      case 'CLEAR':
        return []
      default:
        return state
  }
}

  export const AddHotel = (hotel) => {
    return ({
        type: "ADD_HOTELS",
        data: hotel
      })
  }

  export const clearState = () => {
    return ({
        type: "CLEAR"
      })
  }
  
  export default HotelReducer