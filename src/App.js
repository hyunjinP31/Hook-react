import { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [ number, setNumber ] = useState(0);
  const myFunction = ()=>{
    console.log(`myFunction: number: ${number}`);
    return;
  }
  useEffect(()=>{
    console.log("myFunction이 변경되었습니다.")
  },[myFunction]);
  return (
    <div className="App">
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} /> <br />
      <button onClick={myFunction}>함수호출</button>
    </div>
  );
}

export default App;
