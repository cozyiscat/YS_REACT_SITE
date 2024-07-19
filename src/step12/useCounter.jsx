import { useState } from "react";

export function useCounter(iniValue){
    const [count, setCount] = useState(iniValue);
    const increaseCount = ()=>{setCount((count)=> count+1)}
    const decreaseCount = ()=>{setCount((count)=> Math.max(count-1,0))};//감소 시키되 0보다 큰값만 리턴(0에서 멈춤)
    return [count, increaseCount, decreaseCount];
}