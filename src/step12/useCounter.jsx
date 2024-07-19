import { useState } from "react";

export function useCounter(iniValue){ //초기값
    const [count, setCount] = useState(iniValue);
    const increase = ()=>{setCount((count)=> count+1)}
    const decrease = ()=>{setCount((count)=> Math.max(count-1,0))};//감소 시키되 0보다 큰값만 리턴(0에서 멈춤)
    return [count, increase, decrease];
}