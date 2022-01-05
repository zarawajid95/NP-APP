/* eslint-disable */
import LoginForm from './components/Login'
import RegisterForm from './components/Register'
import Welcome from './components/Welcome'
import Destination from './components/Destination'
import Trip from './components/Trip'


import { BrowserRouter as Router, 
        Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div >
      <Router>
      <Routes>
      <Route path='/' element={<LoginForm/>} />
      <Route path='/register' element={<RegisterForm/>} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/trip' element={<Trip/>} />
      </Routes>
      </Router>      
    </div>
  );
}

export default App;
