/* eslint-disable */
import React, { useState, useEffect } from 'react'
import welcomeService from '../services/welcomeService'
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";


const Welcome = () => {
    const navigate = useNavigate();

    const [destination, setDestination] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [averagTemp, setAverageTemp] = useState('')
    const [username, setUsername] = useState('')

    
    useEffect(async () => {
        // if(!Cookies.get('UserID')){
        //     navigate('/')
        // }
        const username = await welcomeService.getUserName()
        console.log(username)
        setUsername(username)
      }, [])

    const CheckWeather = async (event) => {
        event.preventDefault()
        try {
         
            const forecast = await welcomeService.checkWeather({
              destination, startDate, endDate
            })
            console.log(Cookies.get('UserID'))
            console.log(forecast)
            setAverageTemp(forecast)
           
        } catch (exception) {
            console.log(exception)
        }

    }

    const confirmDestination = async (event) => {
        event.preventDefault()
        try{
            const trip_id = await welcomeService.saveDestination
                            ({destination, startDate, endDate})
            console.log(trip_id)
            navigate("/destination");
        }
        catch(exception){
            console.log(exception)
        }

    }

    const handleDestinationChange = ({target}) => setDestination(target.value) 

    const handleStartDateChange = ({target}) => setStartDate(target.value)

    const handleEndDateChange = ({target}) => setEndDate(target.value)
    
    const logout = (event) => {
        event.preventDefault
        Cookies.remove('UserID')
        navigate('/')
    }

    return (
        <div>
            <h3 id={styles.logout} onClick={logout}>Logout</h3>
            <h1 id={styles.centerh} id={styles.movedown}>Welcome {username}</h1>
            <h2  id={styles.centerh}>Check the next 4 days weather forecast of you desired destination</h2>

            <div>
             { averagTemp && <h3 id={styles.forcast}> The average temp for the next 4 days is {averagTemp}<sup>o</sup>c </h3>}
            </div>

            <form onSubmit={CheckWeather}>
            <div>
            <b>City</b>
            <input
                id="destination"
                value={destination}
                onChange={handleDestinationChange}
            />
            </div>
            
            <div>
            <b>Start date</b>
            <input
                id="startDate"
                value={startDate}
                type="date"
                onChange={handleStartDateChange}
            />
            </div>

            <div>
            <b>End date</b>
            <input
                id="endDate"
                value={endDate}
                type="date"
                onChange={handleEndDateChange}
            />
            </div>
        
            <button id='login-button' type="submit">Check</button>
            {averagTemp && <button id='login-button' onClick={confirmDestination}>Confirm</button>}
            <button id='login-button' type="submit" onClick={()=>navigate('/destination')}>Existing Trips</button>
            </form>
        </div>
    )
}

export default Welcome