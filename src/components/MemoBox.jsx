import React, { useState } from 'react'; // React와 useState import
import './MemoBox.css'
export function MemoBox(){
    // 상태(state) 변수들을 정의합니다.
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const [members, setMembers] = useState([]);

    // 추가 버튼을 클릭했을 때 실행될 함수
    const handleAdd = (event) => {
        event.preventDefault(); // 기본 이벤트 제거

        // 입력된 값들을 새로운 멤버 객체로 만들어 배열에 추가합니다.
        const newMember = {
            name: name,
            age: age,
            job: job
        };

        setMembers([...members, newMember]); // 기존 멤버들과 새로운 멤버를 합친 배열을 설정합니다.

        // 입력 필드 초기화
        setName('');
        setAge('');
        setJob('');
    };

    // 삭제 버튼을 클릭했을 때 실행될 함수
        const handleDelete = (index) => {
        const updatedMembers = [...members];
        updatedMembers.splice(index, 1);
        setMembers(updatedMembers);
    };

    return (
        <div>
        <form action="" className="topBox">
            <div className="check">
            <p>이름 : <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} className="name" ></input></p>
            <p>나이 : <input type="text" placeholder="나이" value={age} onChange={(e) => setAge(e.target.value)} className="old"></input></p>
            <p>직업 : <input type="text" placeholder="직업" value={job} onChange={(e) => setJob(e.target.value)} className="jab"></input></p>
            </div>
            <button className="addBtn" onClick={handleAdd}>추가</button>
        </form>
        <form action="" className="bottomBox">
        {members.map((member, index) => (
                    <div className='boxText' key={index}>
                        <span>{member.name}</span>
                        <span>{member.age}</span>
                        <span>{member.job}</span>
                        <button onClick={() => handleDelete(index)}>삭제</button>
                    </div>
                ))}
        </form>
    </div>
    )
}