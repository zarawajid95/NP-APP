/* eslint-disable */
import React, { useState, useEffect } from 'react'
import welcomeService from '../services/welcomeService'
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";



const Destination = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [destinations, setDestinations] = useState([])
    const [option, setOption] = useState('')


    useEffect(async () => {
        // if(!Cookies.get('UserID')){
        //     navigate('/')
        // }
        const destinations = await welcomeService.getDestinations()
        console.log(destinations)
        setDestinations(destinations)
      }, [])
    
    const logout = (event) => {
        event.preventDefault
        Cookies.remove('UserID')
        navigate('/')
    }
    const hanldeDestination = (event) => {
        event.preventDefault()
        console.log(" i am pressed ")
        console.log("option is", option)
        // dispatch(setTripId(option))
        localStorage.setItem('trip_id', option);
        // window.open(`/trip`); 
        navigate('/trip')
    }

    const handleOptionChange = ({target}) => {
        setOption(target.value)
    }

return (
    <div>
       <h3 id={styles.logout} onClick={logout}>Logout</h3>
       <h1 id={styles.movedown} > Select your destination to see the plan </h1>
       <div>
       <form onSubmit={hanldeDestination}>
       <select name="dst" id="dst" onChange={handleOptionChange} >
        { destinations.map(d => <option value={d.id} key={d.id}> {d.destination} </option>)
        }
        </select>
        <br></br>
        <br></br>
        <input type="submit"></input>
        </form>
       </div>
    </div>
)



}

export default Destination