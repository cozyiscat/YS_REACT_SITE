//파일 src/step11/Counter.jsx

//2. useState 샤용하는방법
import {useState} from "react";
export function Counter(props){
    //const[변수, 입력함수] = useState(초기값);
    const[count, setCount] = useState(0);
    return(
        <div>
            <p id="msg">총 {count}번의 클릭했습니다.</p>
            <button onClick={()=>{
            // count++; 읽기 전용이라 직접변경 불가능
            setCount(count+1);
            console.log('count=>',count);

            }}>클릭</button>
        </div>
    )
}

// 1. Dom 객체에 직접 값 변경하기
// export function Counter(props){
//     let count = 0;
//     return(
//         <div>
//             <p id="msg">총 {count}번의 클릭했습니다.</p>
//             <button onClick={()=>{count++;
//             let msgEle = document.getElementById('msg');
//             msgEle.innerText = `총 ${count}번의 클릭했습니다.`
//             console.log('count=>',count)

//             }}>클릭</button>
//         </div>
//     )
// }