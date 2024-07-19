import React, { useState } from 'react';

function Grade(props) {
  if (props.score >= 60) {
    return <p>합격입니다.</p>;
  } else {
    return <p>불합격입니다.</p>;
  }
}

export function ScoreComp2(props) {
  const [kor, setKor] = useState('');
  const [eng, setEng] = useState('');
  const [math, setMath] = useState('');
  const [totalScore, setTotalScore] = useState(0); //총 점수를 저장하는 state
  const [average, setAverage] = useState(0); //평균점수를 저장
  const [isFailed, setIsFailed] = useState(false); //과목중 하나라도 40점 미만인 경우

  const handleKorChange = (event) => {
    const korScore = Number(event.target.value);
    setKor(korScore); //value가 kor인 객체의 이벤트를 처리
  };

  const handleEngChange = (event) => {
    const engScore = Number(event.target.value);
    setEng(engScore);
  };

  const handleMathChange = (event) => {
    const mathScore = Number(event.target.value);
    setMath(mathScore);
  };

  const calculateScores = () => { //parseFloat()를 사용해서 각 과목 점수를 숫자로 변환
    const korNumber = parseFloat(kor);
    const engNumber = parseFloat(eng);
    const mathNumber = parseFloat(math);

    const total = korNumber + engNumber + mathNumber;
    setTotalScore(total); //총 점수를 계산하고 totalSocore 상태를 업데이트

    const avg = total / 3; //총 점수를 3으로 나눠 평균점수 계산
    setAverage(avg.toFixed(2)); //toFixed(2)를 사용하여 소수점 둘째자리까지 반올림

    // 과목 점수가 40점 미만인 경우 불합격 처리
    if (korNumber < 40 || engNumber < 40 || mathNumber < 40) {
      setIsFailed(true);
    } else {
      setIsFailed(false);
    }//이중 하나가 40점 밑으로 내려갈 때 setISFailed를 false로 변경
  };

  return (
    <>
      <div>
        <div>
          국어 : <input type="text" value={kor} onChange={handleKorChange} />
        </div>
        <div>
          영어 : <input type="text" value={eng} onChange={handleEngChange} />
        </div>
        <div>
          수학 : <input type="text" value={math} onChange={handleMathChange} />
        </div>
        <br />
        <button onClick={calculateScores}>점수 계산</button>
      </div>
      <div>
        <p>국어{kor}, 영어 {eng}, 수학{math}</p>
        <p>총점: {totalScore}</p>
        <p>평균 점수: {average}</p>
        {isFailed && <p>과락으로 인해 불합격입니다.</p>}
        {!isFailed && average >= 60 && <p>합격입니다.</p>}
        {!isFailed && average < 60 && <p>불합격입니다.</p>}
      </div>
    </>
  );
}
