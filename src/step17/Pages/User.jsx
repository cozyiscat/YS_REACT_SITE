import { useParams } from "react-router-dom"
const users = [
    {id:1, name:"홍길동",job:"백수"},
    {id:2, name:"손흥민",job:"축구선수"},
    {id:3, name:"김형준",job:"선수"},
]
export function User(){
    const {id} = useParams();
    const _user = users.find(user=> user.id ===Number(id));
    return(
        <div>
            { _user? (<> 
        <h2 >사용자 아이디 : {id} </h2>
        <p>이름: {_user.name}</p>
        <p>직업: {_user.job}</p>
        </>):(<p>자료없음</p>)}
        </div>
    )
}