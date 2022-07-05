import React, { useMemo, useState } from 'react';

const calculate = ( number ) =>{
    console.log('복잡한 계산');
    for(let i = 0; i<1000000000; i++){}
    return number + 10000;
}
const calculate2 = ( number ) =>{
    console.log('단순한 계산');
    return number + 1;
}

//함수형 컴포넌트이기 때문에 값이 하나가 바뀌면 App2라는 함수 자체가 새로 그려지기 때문에 간단한 계산이라도 복잡한 계산 만큼 딜레이가 걸린다.
const App2 = () => {
    const [ number1, setNumber1 ] = useState(1)
    const [ number2, setNumber2 ] = useState(1)
    // const sum1 = calculate(number1)
    const sum1 = useMemo(()=>{
        return calculate(number1);
    },[number1]);
    const sum2 = calculate2(number2);
    return (
        <div>
            <h3>복잡한 계산기</h3>
            <input type='number' value={number1} onChange={(e)=>parseInt(setNumber1(e.target.value))} />
            <span>+ 10000 = {sum1}</span>
            <h3>단순한 계산기</h3>
            <input type='number' value={number2} onChange={(e)=>parseInt(setNumber2(e.target.value))} />
            <span>+ 1 = {sum2}</span>
        </div>
    );
};

export default App2;