import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import HotelReducer from './reducer/HotelReducer'
import showHotelFormReducer from './reducer/showHotelFormReducer';
import showHotelListReducer from './reducer/showHotelListReducer';


const reducer = combineReducers({
  hotels: HotelReducer,
  showHotelFormReducer:showHotelFormReducer,
  showHotelListReducer: showHotelListReducer
});

const store = createStore(reducer, composeWithDevTools()
)

export default store