import React, { useEffect, useState } from 'react';
import '../static/style.css'
import { useNavigate, useLocation } from 'react-router-dom';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import ApexCharts from 'apexcharts';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#00cc00' : '#308fe8',
  },
}));

const CameraPage = () => {
  const [prediction, setPrediction] = useState('');
  const navigate = useNavigate();
  const [activeSpan, setActiveSpan] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [confirmButtonColor, setConfirmButtonColor] = useState('#3c403c');
  const [currentImageFilename, setCurrentImageFilename] = useState()
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const imageUrls = ['ㄱ.jpg', 'ㄴ.jpg', 'ㄷ.jpg', 'ㄹ.jpg','ㅁ.jpg','ㅂ.jpg','ㅅ.jpg','ㅇ.jpg','ㅈ.jpg','ㅊ.jpg','ㅋ.jpg','ㅌ.jpg','ㅍ.jpg','ㅎ.jpg'];



  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await fetch('http://localhost:5000/prediction_korean');
        const data = await response.text();
        setPrediction(data);
      } catch (error) {
        setPrediction('동작 없음');
      }
    };

    const intervalId = setInterval(fetchPrediction, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Check if the prediction matches the current image filename (excluding the file extension)
    setCurrentImageFilename(imageUrls[currentImageIndex].split('.')[0])
    console.log(currentImageFilename)
    console.log(prediction)
    if (prediction == currentImageFilename) {
      console.log("Set to green")
      setConfirmButtonColor('#00cc00');
      setPrediction(currentImageFilename)

    } 
  }, [prediction, currentImageIndex, imageUrls]);

  const handleSports = () => {
    // navigate('/sports');
    if(currentImageIndex == imageUrls.length - 1){
      navigate('/result', { state: { correctAnswer } });
    }
    else {
      setCurrentImageIndex((currentImageIndex + 1));
      setProgressValue(progressValue + 7.14);
      setConfirmButtonColor('#3c403c');
        console.log("Correct answer: " + correctAnswer)
        setCorrectAnswer(correctAnswer + 1);

  
      const imageContainerElement = document.getElementById('image-container');
      if (imageContainerElement) {
        imageContainerElement.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
      }
    }
   
  }
  const handleAnimals = () => {
    // navigate('/animals');
    if(currentImageIndex == imageUrls.length - 1){
      navigate('/result', { state: { correctAnswer } });
    }
    else {
      setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
      setProgressValue(progressValue + 7.14);
      setConfirmButtonColor('#3c403c');
    }


  }
  const handleFood = () => {
    navigate('/food');

  }
  const handleSpanClick = (id) => {
    setActiveSpan(id);
  };

  return (
    <div style={{display: 'grid', gridTemplateColumns: '12% 88%', height: '100vh', color: 'black'}}>
      <div>
        <ul >
        <span style={{marginTop: '30px', display: 'flex', alignItems: 'center'}}><a class="active" href="#home" style={{color: 'black', textDecoration: 'none'}}>LOGO</a></span>
          <span style={{
              marginTop: '30px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '12px',
              padding: '10px',
              border: '1px solid white',
              cursor: 'pointer',
              backgroundColor: activeSpan === 1 ? '#DDF4FF' : 'white',
            }}
            onClick={() => handleSpanClick(1)}><img style={{marginRight: '10px'}} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" /><a class="active" href="#home" style={{color: 'black', textDecoration: 'none'}}>학습</a></span>
          <span style={{
              marginTop: '30px',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',

              borderRadius: '12px',
              border: '1px solid white',
              cursor: 'pointer',
              backgroundColor: activeSpan === 2 ? '#DDF4FF' : 'white',
            }}
            onClick={() => handleSpanClick(2)}><img style={{marginRight: '10px'}} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg" /><a class="active" href="#home" style={{color: 'black', textDecoration: 'none'}}>퀴즈</a></span>
          <span style={{
              marginTop: '30px',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',

              borderRadius: '12px',
              border: '1px solid white',
              cursor: 'pointer',
              backgroundColor: activeSpan === 3 ? '#DDF4FF' : 'white',
            }}
            onClick={() => handleSpanClick(3)}><img style={{marginRight: '10px'}} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg" /><a class="active" href="#home" style={{color: 'black', textDecoration: 'none'}}>연습</a></span>
          <span style={{
              marginTop: '30px',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',

              borderRadius: '12px',
              border: '1px solid white',
              cursor: 'pointer',
              backgroundColor: activeSpan === 4 ? '#DDF4FF' : 'white',
            }}
            onClick={() => handleSpanClick(4)}><img style={{marginRight: '10px'}} src="https://simg-ssl.duolingo.com/avatars/671221893/JrE_lFPsGa/medium" /><a class="active" href="#home" style={{color: 'black', textDecoration: 'none'}}>프로필</a></span>
        </ul>
      </div>

  <div style={{backgroundColor: '#f7f8f9' ,marginLeft: '10px', padding: '1px', height: '100vh', border: '1px solid gray'}}>
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <BorderLinearProgress variant="determinate" value={progressValue} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginTop: '5%', width: '50%', marginLeft: '25%'}}/>

          <p style={{position: 'relative', marginTop: '50px',color:'black', textAlign: 'center' }}>손으로 해당 이미지를 따라해주세요.</p>
          <div id="container" style={{display: 'grid', gridTemplateColumns: '8fr 2fr', gridTemplateRows: 'repeat(3, 1fr)', height: '100vh', width: '80%', columnGap: '100px', marginLeft: '100px'}}>
            <div style={{backgroundColor: 'white' ,gridRow: '1',  border: '1px solid gray', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
              <img src="http://localhost:5000/video_korean" alt="Video Feed" style={{ width: '100%', height: '60vh' }} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gridRow: '1', gridColumn: '2',  }}>
              <div style={{backgroundColor: 'white' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundImage: `url(${imageUrls[currentImageIndex]})`, backgroundSize: 'contain',backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '60%',border: '1px solid gray', borderRadius: '12px'}}></div>
              <div id="answer_div" style={{backgroundColor: 'white' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',border: '1px solid gray', borderRadius: '12px', width: '100%', height: '20%'}}>
                <p id="answer_p" style={{color: 'black', marginTop: '0px'}}>결과: <span id="answer_span" style={{color: 'black'}}>    {confirmButtonColor  == '#00cc00' ? currentImageFilename : prediction}</span></p>
              </div>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-around', columnGap: '500px'}}>
            <button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '100px',  backgroundColor: '#3c403c'}} onClick={handleAnimals}>건너뛰기</button>
            <button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',width: '100px', backgroundColor: `${confirmButtonColor}`
              ,cursor: confirmButtonColor == '#00cc00' ? 'pointer' : 'default',
            }} onClick={handleSports}  disabled={confirmButtonColor != '#00cc00'}>확인</button>

          </div>

          </div>

        </div>

  </div>
    
    </div>
  );
  
};

export default CameraPage;