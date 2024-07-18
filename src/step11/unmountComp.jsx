//파일명: src/step11/UnmountComp.jsc

import { useState, useEffect } from "react";

export function UnmountComp(){
    const [mounted, setMounted] = useState(true);
    useEffect(()=>{
        console.log('콤포넌트 마운팅 됨'); //마운팅된 뒤, 수정된 뒤 실행
        return ()=>{
            console.log('콤포넌트 언마운팅 전');
        }
    },[]);
    const Dounmounting = ()=> {
        setMounted(false);
    };
    if(mounted){
        return (
        <div>콤포넌트가 마운팅 됨
            <button onClick={Dounmounting}>Unmount</button>
        </div>
        )
    } else{
        return(
            <div>콤포넌트가 언 마운팅 됨</div>
        )
    }
    return (
        <div>
            <button onClick={Dounmounting}>Unmount</button>
        </div>
    );
}