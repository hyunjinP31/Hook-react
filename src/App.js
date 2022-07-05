import { useState, useEffect, useCallback } from 'react';
import './App.css';



function App() {
  const [ number, setNumber ] = useState(0);
  const [ name, setName ] = useState("");
  const myFunction = useCallback(()=>{
    console.log(`myFunction: number: ${number}`);
    return;
  }, [number]) //--> 여기에 들어가는 값이 바뀔 때만 새로 그려짐
  //상태값이 변경될 때 마다 새로 그려짐 -> useCallback으로 감싸면 함수가 새로 그려지지 않고 재사용 되기 때문에 처음 화면에 그려질 때 한 번만 호출이 되고 그 뒤는 불려진 함수를 재사용한다.(useCallback 의존성 배열을 빈 배열로 넣었을 때)

  useEffect(()=>{
    console.log("myFunction이 변경되었습니다.")
  },[myFunction]);
  return (
    <div className="App">
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} /> <br />
      <button onClick={myFunction}>함수호출</button> <br />
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  );
}

export default App;
