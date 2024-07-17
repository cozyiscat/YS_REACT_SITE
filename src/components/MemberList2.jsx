import { useState } from 'react'
import './MemberList.css'

export function MemberList(){
    const [users, setUsers] = useState([
        {id:1,name:'홍길동',age:34,job:'무직'},
        {id:2,name:'이순신',age:60,job:'군인'},
        {id:3,name:'세종대왕',age:28,job:'정치인'},
    ]
    );

    const [name, setName] = useState('');
    const changeName = (e)=>{setName(e.target.value);}
    const [age, setAge] = useState('');
    const changeAge = (e)=>{setAge(e.target.value);}
    const [job, setJob] = useState('');
    const changeJob = (e)=>{setJob(e.target.value);}

    const addUser = (e)=> {
        e.preventDefault();
        console.log(name);
        alert(`${name} ${age} ${job}`)
        const newUser = {id:users.length+1, name:name,age:age,job:job};
        setUsers([...users,newUser]);
    }
    return(
        <>
        <div className="input-container">
            <form onSubmit={addUser}>
            <table >
                <tr>
                <td>이름</td>
                <td><input type="text" placeholder="이름" id="nameInput" onChange={changeName} value={name}/></td>
                <td rowspan="3"><button id="addBtn" type="submit">추가</button></td>
                </tr>
                <tr>
                <td>나이</td>
                <td><input type="text" placeholder="나이" id="ageInput" onChange={changeAge}/></td>
                </tr>
                <tr>
                <td>직업</td>
                <td><input  type="text" placeholder="직업" id="jobInput" onChange={changeJob}/></td>
                </tr>
            </table>
            </form>
        </div>
        <div class="list-container">
            <ul id="userList">
                {users.map(
                    (user)=>(
                        <li key={user.id}>{user.name}({user.age}세) {user.job}
                        <button className="delBtn">삭제</button></li>
                    )
                )}
            {/* <li>홍길동(34세) 무직 <button className="delBtn">삭제</button></li>
            <li>이순신(54세) 군인 <button className="delBtn">삭제</button></li>
            <li>세종대왕(74세) 정치인 <button className="delBtn">삭제</button></li> */}
            </ul>
      </div>
      </>
    )
}