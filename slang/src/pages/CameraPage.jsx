import React, { useEffect, useState } from 'react';
import '../static/style.css';
import { useNavigate } from 'react-router-dom';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import SuccessModal from './SuccessModal'; // Import the modal component

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [confirmButtonColor, setConfirmButtonColor] = useState('#3c403c');
  const [currentImageFilename, setCurrentImageFilename] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
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
  const imageUrls = ['ㄱ.jpg', 'ㄴ.jpg', 'ㄷ.jpg', 'ㄹ.jpg', 'ㅁ.jpg', 'ㅂ.jpg', 'ㅅ.jpg', 'ㅇ.jpg', 'ㅈ.jpg', 'ㅊ.jpg', 'ㅋ.jpg', 'ㅌ.jpg', 'ㅍ.jpg', 'ㅎ.jpg'];

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await fetch('http://localhost:5000/prediction_korean');
        // const response = await fetch('http://43.203.98.168:5000/prediction_korean');
        // const response = await fetch('http://116.121.105.235:8080/flask/prediction_korean');

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

  // useEffect(() => {
  //   setCurrentImageFilename(imageUrls[currentImageIndex].split('.')[0]);
  //   if (prediction === currentImageFilename) {
  //     setConfirmButtonColor('#00cc00');
  //     setPrediction(currentImageFilename);
  //   }
  // }, [prediction, currentImageIndex, imageUrls]);

  const handleSports = () => {
    if (currentImageIndex === imageUrls.length - 1) {
      setIsModalOpen(true); // Open the modal when reaching the last image
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
      setProgressValue(progressValue + 7.14);
      setConfirmButtonColor('#3c403c');
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  const handleAnimals = () => {
    if (currentImageIndex === imageUrls.length - 1) {
      setIsModalOpen(true); // Open the modal when reaching the last image
    } else {
      setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
      setProgressValue(progressValue + 7.14);
      setConfirmButtonColor('#3c403c');
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/main'); // Redirect to /main when modal closes
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '12% 88%', height: '100vh', color: 'black' }}>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
          <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }} onClick={() => handleSpanClick(0)}>
            LOGO
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
      <div style={{ backgroundColor: '#f7f8f9', marginLeft: '10px', padding: '1px', height: '100vh', border: '1px solid #ddd' }}>
        <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
          <BorderLinearProgress variant="determinate" value={progressValue} style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', marginTop: '5%', width: '50%', marginLeft: '25%' }} />

          <p style={{ position: 'relative', marginTop: '50px', color: 'black', textAlign: 'center' }}>손으로 해당 이미지를 따라해주세요.</p>
          <div id="container" style={{ display: 'grid', gridTemplateColumns: '8fr 2fr', gridTemplateRows: 'repeat(3, 1fr)', height: '100vh', width: '80%', columnGap: '100px', marginLeft: '100px' }}>
            <div style={{ backgroundColor: 'white', gridRow: '1', border: '1px solid #ddd', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
              <img src="http://localhost:5000/video_korean" alt="Video Feed" style={{ width: '100%', height: '60vh' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gridRow: '1', gridColumn: '2' }}>
              <div style={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundImage: `url(${imageUrls[currentImageIndex]})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '60%', border: '1px solid #ddd', borderRadius: '12px' }}></div>
              <div id="answer_div" style={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', border: '1px solid #ddd', borderRadius: '12px', width: '100%', height: '20%' }}>
                <p id="answer_p" style={{ color: 'black', marginTop: '0px' }}>결과: <span id="answer_span" style={{ color: 'black' }}>{confirmButtonColor === '#00cc00' ? currentImageFilename : prediction}</span></p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', columnGap: '500px' }}>
              <button style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '100px', backgroundColor: '#3c403c' }} onClick={handleAnimals}>건너뛰기</button>
              <button
                style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '100px', backgroundColor: `${confirmButtonColor}`, cursor: confirmButtonColor === '#00cc00' ? 'pointer' : 'default' }}
                onClick={handleSports}
                disabled={confirmButtonColor !== '#00cc00'}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CameraPage;
