import React, { useEffect, useState } from 'react';
import '../static/style.css'
import { useNavigate } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

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

const IndoorSportTest = () => {
  const [prediction, setPrediction] = useState('');
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [confirmButtonColor, setConfirmButtonColor] = useState('#3c403c');
  const [currentImageFilename, setCurrentImageFilename] = useState()
  const [countdown, setCountdown] = useState(5);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [activeSpan, setActiveSpan] = useState(null);

  const handleSpanClick = (id) => {
    setActiveSpan(id);
    switch (id) {
      case 1:
        navigate('/camera');
        break;
      case 2:
        navigate('/animals');
        break;
      case 3:
        navigate('/convo');
        break;
      case 4:
        navigate('/convo');
      default:
        break;
    }
  };

  const imageUrls = ['농구.jpg', '배구.jpg', '탁구.jpg', '태권도.jpg', '씨름.jpg', '유도.jpg', '수영.jpeg', '스케이트.jpg','사격.jpg', '팬싱.jpg', '검도.jpg' ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          setConfirmButtonColor("red")
          clearInterval(timer);
          return 0; // Set the countdown to 0 when it reaches 1
        }
        return prevCountdown - 1;
      });
    }, 1000);


    return () => clearInterval(timer);
  }, [progressValue]);
  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await fetch('http://localhost:5000/prediction_sports');
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
    setCurrentImageFilename(imageUrls[currentImageIndex].split('.')[0]);
    if (prediction === 'None!') {
      setPrediction('');
    } else if (prediction === currentImageFilename) {
      setConfirmButtonColor('#00cc00');
      setPrediction(currentImageFilename);
    }
  }, [prediction, currentImageIndex, imageUrls]);

  const handleSports = () => {
    // navigate('/sports');
    if(currentImageIndex == imageUrls.length - 1){
      navigate('/result', { state: { correctAnswer, category: 'sports' } });
    }
    else {
      setCurrentImageIndex((currentImageIndex + 1));
      setProgressValue(progressValue + (100 / (imageUrls.length - 1)));
      setConfirmButtonColor('#3c403c');
      if(confirmButtonColor == '#00cc00'){
        setCorrectAnswer(correctAnswer + 1);
      }
      setCountdown(5)

  
      const imageContainerElement = document.getElementById('image-container');
      if (imageContainerElement) {
        imageContainerElement.style.backgroundImage = `url(${process.env.PUBLIC_URL}/${imageUrls[currentImageIndex]})`;
      }
    }
   
  }
  const handleAnimals = () => {
    // navigate('/animals');
    if(currentImageIndex == imageUrls.length - 1){
      navigate('/result',  { state: { correctAnswer } });
    }
    else {
      setCountdown(5)
      setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
      setProgressValue(progressValue + (100 / (imageUrls.length - 1)));
      setConfirmButtonColor('#3c403c');
    }


  }
  const handleFood = () => {
    navigate('/food');

  }


  return (
    <div style={{display: 'grid', gridTemplateColumns: '12% 88%', height: '100vh', color: 'black'}}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
          <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }} onClick={() => handleSpanClick(0)}>
            {/* LOGO */}
          </a>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '12px',
            padding: '10px',
            border: '1px solid white',
            cursor: 'pointer',
            backgroundColor: activeSpan === 2 ? '#DDF4FF' : 'white',
            marginBottom: '30px',
          }}
          onClick={() => handleSpanClick(1)}
        >
          <img style={{ marginRight: '10px' }} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" />
          <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }} onClick={() => handleSpanClick(1)}>
            학습
          </a>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '12px',
            border: '1px solid white',
            cursor: 'pointer',
            backgroundColor: activeSpan === 3 ? '#DDF4FF' : 'white',
            marginBottom: '30px',
          }}
          onClick={() => handleSpanClick(2)}
        >
          <img style={{ marginRight: '10px' }} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg" />
          <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }} onClick={() => handleSpanClick(2)}>
            퀴즈
          </a>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            borderRadius: '12px',
            border: '1px solid white',
            cursor: 'pointer',
            backgroundColor: activeSpan === 4 ? '#DDF4FF' : 'white',
            marginBottom: '30px',
          }}
          onClick={() => handleSpanClick(3)}
        >
          <img style={{ marginRight: '5%' }} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg" />
          <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }} onClick={() => handleSpanClick(3)}>
            연습
          </a>
        </li>
        <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        borderRadius: '12px',
        border: '1px solid white',
        cursor: 'pointer',
        backgroundColor: activeSpan === 4 ? '#DDF4FF' : 'white',
      }}
      onClick={() => handleSpanClick(4)}
    >
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
        <img
          src="https://simg-ssl.duolingo.com/avatars/671221893/JrE_lFPsGa/medium"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }}>
        프로필
      </a>
    </li>
      </ul>
    </div>

  <div style={{marginLeft: '10px', padding: '1px', height: '100vh', border: '1px solid #ddd'}}>
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <BorderLinearProgress variant="determinate" value={progressValue} style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginTop: '3%', width: '50%', marginLeft: '25%'}}/>
        <h1 style={{position: 'relative',color:'black', textAlign: 'center', }}>{countdown}</h1>

          <p style={{position: 'relative', marginTop: '0px',color:'black', textAlign: 'center' }}>손으로 해당 이미지를 따라해주세요.</p>
          <div id="container" style={{display: 'grid', gridTemplateColumns: '7fr 3fr', gridTemplateRows: 'repeat(3, 1fr)', height: '100vh', width: '80%', columnGap: '50px', marginLeft: '100px'}}>
              <div style={{gridRow: '1 ',  border: '1px solid #ddd', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                <img src="http://localhost:5000/video_sports" alt="Video Feed" style={{ width: '100%', height: '60vh' }} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gridRow: '1', gridColumn: '2',  }}>
                <div style={{backgroundColor: 'white' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundImage: `url(${process.env.PUBLIC_URL}/${imageUrls[currentImageIndex]})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '60%',border: '1px solid #ddd', borderRadius: '12px'}}></div>
                <div id="answer_div" style={{backgroundColor: 'white' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',border: '1px solid #ddd', borderRadius: '12px', width: '100%', height: '20%'}}>
                  <p id="answer_p" style={{color: 'black', marginTop: '0px'}}>결과: <span id="answer_span" style={{color: 'black'}}>    {confirmButtonColor  == '#00cc00' ? currentImageFilename : prediction}</span></p>
                </div>
              </div>

            <div style={{display: 'flex', justifyContent: 'space-around', columnGap: '50px'}}>
            <button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '100px',  backgroundColor: '#3c403c'}} onClick={handleAnimals}>건너뛰기</button>
            <button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',width: '100px', backgroundColor: `${confirmButtonColor}`
              ,cursor: confirmButtonColor == '#00cc00' ? 'pointer' : 'default' && confirmButtonColor == 'red' ? 'pointer' : 'default',
            }} onClick={handleSports}    disabled={confirmButtonColor != '#00cc00' && confirmButtonColor != 'red'}            >확인</button>

          </div>

          </div>

        </div>

  </div>
    
    </div>
  );
  
};

export default IndoorSportTest;