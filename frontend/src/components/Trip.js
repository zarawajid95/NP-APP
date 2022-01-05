/* eslint-disable */
import React, {useState, useEffect } from 'react'
import tripService from '../services/tripService'
import AttractionsForm from './AttractionsForm'
import AttractionsList from './AttractionList'
import HotelList from './HotelList'
import Selection from './Selection'
import HotelForm from './HotelForm'
import RestaurantForm from './RestaurantForm'
import NoteForm from './NotesForm'
import { useDispatch } from 'react-redux'
import { AddHotel, clearState } from '../reducer/HotelReducer'
import NotesList from './NotesList'
import RestaurantList from './RestaurantList'
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import BudgetForm from './BudgetForm'
import styles from "../css/Login.module.css";
import { hideHList, showHList } from '../reducer/showHotelListReducer'
import { hideHForm, showHForm } from '../reducer/showHotelFormReducer'


const Trip = () => {
const navigate = useNavigate();
const dispatch = useDispatch()
const [trip_id, setTripId] = useState('')
const [info, setTripInfo] = useState({})

const [attractions, setAttractions] = useState([])
const [restaurants, setRestaurants] = useState([])
const [notes, setNotes] = useState([])
const [budget, setBudget] = useState('')
const [showbudget, setshowBudget] = useState(false)


const [showHotelForm, setshowHotelForm] = useState(false)
const [showAttractionForm, setshowAttractionForm] = useState(false)
const [showRestaurantForm, setshowRestaurantForm] = useState(false)
const [showNotesForm, setshowNotesForm] = useState(false)
const [showAttractionList, setshowAttractionList] = useState(false)
const [showHotelList, setshowHotelList] = useState(false)
const [showRestaurantList, setshowRestaurantList] = useState(false)
const [showNoteList, setshowNoteList] = useState(false)
const [showBudgetForm, setshowBudgetForm] = useState(false)


const [option, setOption] = useState('')
const [name, setName] = useState('')
const [date, setDate] = useState('')
const [address, setAddress] = useState('')
const [note, setNote] = useState('')

const options = [
  {
    id:1,
    value:'attraction'
  },
  {
    id:2,
    value:'hotel'
  },
  {
    id:3,
    value:'restaurant'
  },
  {
    id:4,
    value:'note'
  },
  {
    id:5,
    value:'budget'
  }
]

useEffect(async () => {
    if(!Cookies.get('UserID')){
      navigate('/')
    }
    let id = localStorage.getItem("trip_id")
    setTripId(id)
    const tripInfo = await tripService.getTripInfo(id)
    setTripInfo(tripInfo[0])
}, [])


const handleNameChange=({ target }) => setName(target.value)

const handleDateChange=({ target }) => setDate(target.value)

const handleAddressChange=({ target }) => setAddress(target.value)

const handleNoteChange=({ target }) => setNote(target.value)

//handles the budget change in the form
const handleBudgetChange=({ target }) => setBudget(target.value)

const SubmitAttraction = async (event) => {
  event.preventDefault()
  try {
    const attraction = await tripService.saveAttraction({name, date, trip_id})
    console.log(attraction)     
    
    const info = await tripService.getInfo(trip_id, option)
    setAttractions(info)
    setshowAttractionForm(false)
    setshowAttractionList(true)
    setName('')
    setDate('')
  } catch (exception) {
    console.log(exception)
  }
}

const submitRestaurant = async (event) => {
  event.preventDefault()
  try {
    const restaurant = await tripService.saveRestaurant({name, date, address, trip_id})
    console.log(restaurant)     
    const info = await tripService.getInfo(trip_id, option)
    setRestaurants(info)
    setshowRestaurantForm(false)
  } catch (exception) {
    console.log(exception)
  }
}

const submitNote = async (event) => {
  event.preventDefault()
  try {
    const notes = await tripService.saveNote({note, trip_id})
    console.log(notes)     
    const info = await tripService.getInfo(trip_id, option)
    setNotes(info)
    setshowNotesForm(false)
  } catch (exception) {
    console.log(exception)
  }
}

const submitBudget = async (event) => {
  event.preventDefault()
  try {
    console.log(budget)
    const b = await tripService.saveBudget({budget, trip_id})
    console.log(b)     
    const info = await tripService.getInfo(trip_id, option)
    setshowBudgetForm(false)
    setshowBudget(true)
  } catch (exception) {
    console.log(exception)
  }
}

const handleInfo = async (event) => {
  event.preventDefault()
  try {
    console.log(option)
    if(option !== ''){
    console.log(trip_id)
    const info = await tripService.getInfo(trip_id, option)
    if(option == 'attraction'){
      setAttractions(info)
      console.log(attractions)
      if(info.length == 0){
        setshowAttractionForm(true)
        setshowAttractionList(false)
        setshowHotelForm(false)
        setshowHotelList(false)
        setshowRestaurantForm(false)
        setshowRestaurantList(false)
        setshowNoteList(false)
        setshowNotesForm(false)
        setshowBudgetForm(false)
      }
      else{
      setshowAttractionForm(false)
      setshowAttractionList(true)
      setshowHotelForm(false)
      setshowHotelList(false)
      setshowRestaurantForm(false)
      setshowRestaurantList(false)
      setshowRestaurantList(false)
      setshowNoteList(false)
      setshowNotesForm(false)
      setshowBudgetForm(false)
      }
    } 
    if(option == 'hotel'){
      
      //setHotels(info)
      console.log(info)
      if(info.length == 0){
        console.log("show form")
        setshowHotelForm(true)
        setshowAttractionList(false)
        setshowAttractionForm(false)
        setshowHotelList(false)
        setshowRestaurantForm(false)
        setshowRestaurantList(false)
        setshowNoteList(false)
        setshowNotesForm(false)
        setshowBudgetForm(false)
        dispatch(showHotelForm())
        dispatch(hideHotelList())
      }
      else {
      console.log(info)
      setshowHotelForm(false)
      setshowAttractionForm(false)
      setshowAttractionList(false)
      setshowHotelList(true)
      setshowNoteList(false)
      setshowNotesForm(false)
      setshowRestaurantForm(false)
      setshowRestaurantList(false)
      setshowBudgetForm(false)
      dispatch(showHList())
      dispatch(hideHForm())
      dispatch(clearState())
      dispatch(AddHotel(info))
      }
    } 
    if(option == 'restaurant'){
     if(info.length == 0){
      console.log("came here")
      setshowRestaurantForm(true)
      setshowHotelForm(false)
      setshowAttractionList(false)
      setshowAttractionForm(false)
      setshowHotelList(false)
      setshowNoteList(false)
      setshowNotesForm(false)
      setshowBudgetForm(false)
     }
     else{
      setRestaurants(info)
      setshowHotelForm(false)
      setshowAttractionList(false)
      setshowAttractionForm(false)
      setshowHotelList(false)
      setshowRestaurantList(true)
      setshowNoteList(false)
      setshowNotesForm(false)
      setshowBudgetForm(false)
     }
    }
    if(option === 'note'){
      console.log("came in notes")
      if(info.length == 0){
       console.log("came in notes")
       setshowNotesForm(true)
       setshowRestaurantForm(false)
       setshowHotelForm(false)
       setshowAttractionList(false)
       setshowAttractionForm(false)
       setshowHotelList(false)
       setshowBudgetForm(false)
      }
      else{
       setNotes(info)
       setshowHotelForm(false)
       setshowAttractionList(false)
       setshowAttractionForm(false)
       setshowHotelList(false)
       setshowRestaurantForm(false)
       setshowRestaurantList(false)
       setshowNoteList(true)
       setshowBudgetForm(false)
      }
    }
    if(option === 'budget'){
      console.log("came in budget")
      if(info.length == 0){
       console.log("no budget exists")
       setshowNotesForm(false)
       setshowRestaurantForm(false)
       setshowHotelForm(false)
       setshowAttractionList(false)
       setshowAttractionForm(false)
       setshowHotelList(false)
       setshowBudgetForm(true)
      }
      else{
       setBudget(info[0]['budget'])
       setshowBudget(true)
       setshowNotesForm(false)
       setshowRestaurantForm(false)
       setshowHotelForm(false)
       setshowAttractionList(false)
       setshowAttractionForm(false)
       setshowHotelList(false)
       setshowBudgetForm(false)
       setshowNoteList(false)
      }
     }
    }
  } catch (exception) {
    console.log(exception)
  }
}

const handleOptionChange = ({target}) => {
  setOption(target.value)
}

const showAttrForm =  async (event) => {
  event.preventDefault()
  setshowAttractionForm(true)
  setshowAttractionList(false)
}

const showRstForm =  async (event) => {
  event.preventDefault()
  setshowRestaurantForm(true)
}

const showNoteForm =  async (event) => {
  event.preventDefault()
  setshowNotesForm(true)
}

const showHotelFormHandler =  async (event) => {
  event.preventDefault()
  console.log('i am called')
  // setshowHotelList(false)
  setshowHotelForm(true)
  // dispatch(showHForm())
  // dispatch(hideHList())
}

const logout = (event) => {
  event.preventDefault
  Cookies.remove('UserID')
  navigate('/')
}

return (
  <div>
    <div>
    <h3 id={styles.logout} onClick={logout}>Logout</h3>
     <h1 id={styles.centerinfo}> {info['destination']} Trip Plan</h1>
     <h3 id={styles.centerinfo}>Trip Duration: {info['start_date']} - {info['end_date']} </h3> 
     {showbudget && <h3 id={styles.centerinfo}>Total Estimated Budget: {budget} € </h3>} 

    </div> 
    <div>
      <Selection options={options} handleOptionChange={handleOptionChange} handleInfo={handleInfo} />
    </div>
    {showAttractionForm == true && <AttractionsForm handleDateChange={handleDateChange} 
    handleNameChange={handleNameChange} SubmitAttraction={SubmitAttraction} name={name} date={date}/> }
    {showHotelForm == true && <HotelForm trip_id={trip_id} /> }
    {showHotelList == true && <HotelList showHotelFormHandler={showHotelFormHandler}/>}
    {attractions.length > 0 && showAttractionList == true  && <AttractionsList attractions={attractions} showAttrForm={showAttrForm} /> } 
    {showRestaurantForm == true && <RestaurantForm handleDateChange={handleDateChange} 
    handleNameChange={handleNameChange} handleAddressChange={handleAddressChange} submitRestaurant={submitRestaurant} name={name} date={date} address={address}/> }
    {showNotesForm == true && <NoteForm handleNoteChange={handleNoteChange} submitNote={submitNote} note={note}/> }
    {showRestaurantList == true && <RestaurantList restaurants={restaurants} showRstForm={showRstForm}/> }
    {showNoteList == true && <NotesList notes={notes} showNotesForm={showNoteForm}/> }
    {showBudgetForm == true && <BudgetForm handleBudgetChange={handleBudgetChange} submitBudget={submitBudget} budget={budget} />}

  </div>
)
}

export default Trip