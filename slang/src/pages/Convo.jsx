import React, { useEffect, useState } from 'react';
import '../static/style.css'
import { useNavigate } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import ApexCharts from 'apexcharts';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Typewriter from 'typewriter-effect';

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

const ConvoPage = () => {
  const [prediction, setPrediction] = useState('');
  const [predictionsList, setPredictionsList] = useState([]);
  const [responseData, setResponseData] = useState('');


  const navigate = useNavigate();
  const [activeSpan, setActiveSpan] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [confirmButtonColor, setConfirmButtonColor] = useState('#00cc00');
  const [currentImageFilename, setCurrentImageFilename] = useState()

  useEffect(() => {
    let previousPrediction = null;
    let intervalId = null;
    let consecutiveMatches = 0;
  
    const fetchPrediction = async () => {
      try {
        const response = await fetch('http://localhost:5000/prediction_animals');
        const data = await response.text();
  
        if (data !== 'None!') { // Check if prediction is not None
          setPrediction(data)
          if (data === previousPrediction) {
            consecutiveMatches++;
            if (consecutiveMatches === 2) {
              // If the prediction remains the same for 3 seconds, add it to the list
              if (predictionsList.length === 0) {
                setPredictionsList(prevList => [...prevList, data]);
                
              }
              consecutiveMatches = 0; // Reset consecutiveMatches
            }
          } else {
            consecutiveMatches = 0; // Reset consecutiveMatches if the prediction changes
          }
        }
        else {
          setPrediction('None!')
        }
  
        previousPrediction = data; // Update previous prediction
  
        // Clear previous interval
        if (intervalId) {
          clearInterval(intervalId);
        }
  
        // Start a new interval to fetch predictions every second
        intervalId = setInterval(fetchPrediction, 1000);
      } catch (error) {
        setPrediction('동작 없음');
      }
    };
  
    // Initial call to fetch prediction
    fetchPrediction();
  
    // Cleanup function to clear the interval
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
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
  // useEffect(() => {
  //   // Check if the prediction matches the current image filename (excluding the file extension)
  //   setCurrentImageFilename(imageUrls[currentImageIndex].split('.')[0])
  //   console.log(currentImageFilename)
  //   console.log(prediction)
  //   if (prediction == currentImageFilename) {
  //     console.log("Set to green")
  //     setConfirmButtonColor('#00cc00');
  //     setPrediction(currentImageFilename)

  //   } 
  // }, [prediction, currentImageIndex, imageUrls]);

  const handleWord = () => {
    // navigate('/sports');
    // if(currentImageIndex == imageUrls.length - 1){
    //       navigate('/result');
    // }

   
  }
  const handleAddPrediction = () => {
    if (confirmButtonColor === '#00cc00') {
      setPredictionsList([...predictionsList, prediction]);
    }
  };
  const handleTranslate = async () => {
    console.log("Prediction List: ", predictionsList);
    
    // Define the URL to your backend endpoint
    const url = 'http://43.203.98.168:8080/gpt/chat'; // Replace with your backend URL
    const data = {
      // id: userId,
      words: predictionsList
    };
    console.log(JSON.stringify(data))
    // Set up the request options
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    
    try {
      console.log(predictionsList)
      // Send the request to the backend
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      
      // Handle the response data
      setResponseData(data.choices[0].message.content);

      console.log('Response from backend:', data.choices[0].message.content);
      
      // Optionally, handle navigation or further processing here
      
    } catch (error) {
      // Handle any errors
      console.error('Error sending prediction list:', error);
    }
  };
  const handleDeleteLastPrediction = () => {
    setPredictionsList(predictionsList.slice(0, -1));
  };

  const handleClearPredictions = () => {
    setPredictionsList([]);
  };
  const handleFood = () => {
    navigate('/food');

  }


  return (
    <div style={{display: 'grid', gridTemplateColumns: '10% 90%', height: '100vh', color: 'black'}}>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
      <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }}>
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
        backgroundColor: activeSpan === 1 ? '#DDF4FF' : 'white',
        marginBottom: '30px',
      }}
      onClick={() => handleSpanClick(1)}
    >
      <img style={{ marginRight: '10px' }} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" />
      <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }}>
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
        backgroundColor: activeSpan === 2 ? '#DDF4FF' : 'white',
        marginBottom: '30px',
      }}
      onClick={() => handleSpanClick(2)}
    >
      <img style={{ marginRight: '10px' }} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg" />
      <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }}>
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
        backgroundColor: activeSpan === 3 ? '#DDF4FF' : 'white',
        marginBottom: '30px',
      }}
      onClick={() => handleSpanClick(3)}
    >
      <img style={{ marginRight: '5%' }} src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg" />
      <a className="active" href="#home" style={{ color: 'black', textDecoration: 'none' }}>
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

  <div style={{marginLeft: '1%', padding: '1px', height: '100vh', border: '1px solid #ddd'}}>
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>

          <p style={{position: 'relative', marginTop: '50px',color:'black', textAlign: 'center' }}>문장을 만들어보세요.</p>
          <div id="container" style={{display: 'grid', gridTemplateColumns: '7fr 3fr', gridTemplateRows: '3fr 7fr', height: '100%', width: '90%', columnGap: '100px', marginLeft: '5%'}}>
            <div style={{gridRow: '1 / span 2',  border: '1px solid #ddd', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
              <img src="http://localhost:5000/video_animals" alt="Video Feed" style={{ width: '100%', height: '80vh', borderRadius: '12px' }} />
            </div>
            {/* <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundImage: `url(${imageUrls[currentImageIndex]})`, backgroundSize: 'contain',backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', gridRow: '1', gridColumn: '2',  border: '1px solid gray', borderRadius: '12px'}}>
            </div> */}
            <div id="answer_div1" style={{display: 'flex', flexDirection: 'column',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', gridRow: '1', gridColumn: '2', border: '1px solid #ddd', borderRadius: '12px', width: '100%', height: '100%'}}>
                <div style={{flexGrow: '4'}} ><p id="answer_p" style={{color: 'black', paddingTop: '5%', flexGrow: '5'}}>결과: <span id="answer_span" style={{color: 'black'}}>  
                <p></p>
                {prediction}
                {/* {prediction !== 'None!' ? predictionsList[predictionsList.length - 1] : 'None'} */}
                </span></p></div>

                <div style={{ display: 'flex', flexGrow: '1',justifyContent: 'space-around', columnGap: '15%',  gridRow: '1', gridColumn: '2', position: 'relative'}}>
                  <BackspaceIcon style={{color: '#ddd', margin: 'auto', cursor: 'pointer'}} onClick={handleDeleteLastPrediction}/>
                  <RefreshIcon style={{color: '#ddd', margin: 'auto', cursor: 'pointer'}} onClick={handleClearPredictions}/>
                  {/* <AddIcon style={{color: '#ddd', margin: 'auto', cursor: 'pointer'}} onClick={handleAddPrediction}/>, */}
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '5%'}}>
            <div id="answer_div2" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', gridRow: '1 / span 2', gridColumn: '2', border: '1px solid #ddd', borderRadius: '12px', width: '100%', height: '80%', position: 'relative', marginTop: '0%',
              overflow: 'hidden'
             }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p id="answer_p" style={{ color: 'black', marginTop: '3%' }}>단어: </p>
                <div style={{ overflowX: 'auto', flexGrow: 1, padding: '10px 0' }}>
                  <ul id="predictions_list" style={{ display: 'flex', padding: 0, margin: 0, listStyleType: 'none', color: 'black' }}>
                    {predictionsList.map((item, index) => (
                      <li key={index} style={{
                        margin: '0 3%',
                        color: 'black',
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        padding: '10px',
                        backgroundColor: 'white',
                        flex: '0 0 auto'
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button style={{
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  width: '100px',
                  backgroundColor: '#21dc6d',
                  position: 'relative',
                  right: 0,
                  cursor: confirmButtonColor === '#00cc00' ? 'pointer' : 'default',
                }}
                onClick={handleTranslate}
                >번역</button>
              </div>
            </div>
              <div id="answer_div2" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', gridRow: '1 / span 2', gridColumn: '2', border: '1px solid #ddd', borderRadius: '12px', width: '100%', height: '76%', position: 'relative', marginTop: '5%'}}>
        <Typewriter
          options={{
            strings: [responseData],
            autoStart: true,
            loop: true,
          }}
        />
              </div>
            </div>
              {/* <button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '100px',  backgroundColor: '#3c403c'}} onClick={handleAnimals}>건너뛰기</button> */}



          </div>

        </div>

  </div>
    
    </div>
  );
  
};

export default ConvoPage;