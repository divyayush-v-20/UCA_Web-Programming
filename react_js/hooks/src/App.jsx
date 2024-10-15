import './App.css'
import { useState } from 'react';
function App() {
  let [cnt, setCnt] = useState(0);
  const addVal = () => {
    setCnt(cnt + 1);
    console.log('addVal called, cnt = ' + cnt);
  }
  const decVal = () => {
    if(cnt == 0){
      return;
    }
    setCnt(cnt - 1);
    console.log('decVal called, cnt = ' + cnt);
  }
  return(
    <>
      <h1>Hooks in ReactJS</h1>
      <h2>value = {cnt}</h2>
      <button onClick={addVal}>inc</button>
      <br />
      <button onClick={decVal}>dec</button>
    </>
  )
}
export default App