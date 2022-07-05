import React,{ useState,useEffect, useMemo } from 'react';

const App3 = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
    //객체 타입이 가지고 있는 건 값이 아닌 값이 있는 주소 -> 함수가 호출될 때마다 주소가 바뀜 -> useEffect가 안에 있는 실질적인 값이 변경되지 않아도 다른 값을 변경해주느라 함수가 새로 호출되면 값이 바뀌었다고 판단 계속 새로 그려줌
    // const location = {
    //     country : isKorea ? '한국' : '외국',
    // }
    const location = useMemo(()=>{
        return {
            country: isKorea? '한국': '외국',
        }
    },[isKorea])
    useEffect(()=>{
        console.log('useEffect 호출')
    },[location])

    return (
        <div>
            <h1>어떤 숫자를 좋아하세요</h1>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <h1>어느나라에 있어요</h1>
            <p>나라 : {location.country}</p>
            <button onClick={()=>setIsKorea(!isKorea )}>여행가자</button>
        </div>
    );
};

export default App3;