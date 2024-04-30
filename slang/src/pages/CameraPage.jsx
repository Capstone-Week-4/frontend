import React, { useEffect, useState } from 'react';
import '../static/style.css'
const CameraPage = () => {
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await fetch('http://localhost:5000/prediction');
        const data = await response.text();
        setPrediction(data);
      } catch (error) {
        setPrediction('에러ㅠ');
      }
    };

    const intervalId = setInterval(fetchPrediction, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <h1 id="title">Mediapipe를 활용한 수화 인식 demo</h1>
      <p style={{position: 'relative', marginTop: '50px',color:'black', textAlign: 'center' }}>오른손을 들어 손으로 숫자를 표현해주세요.</p>
      <div id="container">
        <div>
          <img src="http://localhost:5000/video" alt="Video Feed" style={{ width: '100%' }} />
        </div>
        <div id="answer_div">
          <p id="answer_p" style={{color: 'black'}}>Result: <span id="answer_span" style={{color: 'black'}}>{prediction}</span></p>
        </div>
      </div>
    </div>
  );
  
};

export default CameraPage;