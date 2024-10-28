import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useRef } from 'react'
import axios from "axios"
import './App.css'

function App(){

  let username = useRef(null);
  let [stats, setStats] = useState([]);

  const getStats = () => {
    axios.get(`https://leetcode-stats-api.herokuapp.com/${username.current.value}`)
    .then((res) => {
      setStats(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return(
    <>
      <input type="text" ref={username}/>
      <button onClick={getStats}>Submit</button>

      <p>Total : {stats.totalSolved}</p>
      <p>Easy : {stats.easySolved} </p>
      <p>Medium : {stats.mediumSolved} </p>
      <p>Hard : {stats.hardSolved}</p>
      <p>Ranking : {stats.ranking}</p>
    </>
  )
}

export default App
