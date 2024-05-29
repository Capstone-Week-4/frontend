import React, { useEffect, useState } from 'react';
import '../static/style.css'
import { useNavigate, useLocation } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import ApexCharts from 'apexcharts';
import axios from 'axios'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  // background: 'linear-gradient(to right, #FFD700, #FFC200, #FFB000)',
    [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'gold' : '#308fe8',
  },
}));

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const Result = () => {


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
  const location = useLocation();
  const navigate = useNavigate();
  const [progressValue, setProgressValue] = useState(50);

  const { correctAnswer } = location.state;
  const [confirmButtonColor, setConfirmButtonColor] = useState('#00cc00');


  // Use the correctAnswer data in your Result component

  // Use the correctAnswer data in your Result component
  console.log('Correct Answers:', correctAnswer);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 380,
      type: "radialBar",
    },
    series: [(correctAnswer / 14) * 100], // Calculate the accuracy percentage
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px",
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true,
            formatter: function (val) {
              return val.toFixed(1) + "%"; // Format the value as a percentage
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["정답률"],
  });

  useEffect(() => {
    const chartElement = document.getElementById('chart');
    const chart = new ApexCharts(chartElement, chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [chartOptions]);


  const options = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690,]
    }],
    chart: {
      type: 'bar',
      height: 350,
      
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: false,
      
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['월','화','수','목','금','토','일'
      ],
    }
    ,
    colors:['#00cc00']
  };

  useEffect(() => {
    const chartElement = document.getElementById('week');
    const chart = new ApexCharts(chartElement, options);
    chart.render();

    // Clean up function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once after mount

  const handleSports = () => {
    const currentDate = getDate();
    console.log(currentDate);
    const data = {
      userId: "aa",
      point: correctAnswer,
      category: "sports",
    };
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      // 'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    axios.post('http://43.203.98.168:8080/updatePoint', data, { headers })
      .then(response => {
        console.log('Result submitted successfully:', response.data);
        navigate('/camera');
      })
      .catch(error => {
        console.error('Error submitting result:', error);
        if (error.response && error.response.status === 401) {
          navigate('/result');
        }
      });
  };


  return (
    <div style={{display: 'grid', gridTemplateColumns: '12% 88%', height: '100vh', color: 'black'}}>
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

  <div style={{backgroundColor: '#f7f8f9', marginLeft: '10px', padding: '1px', height: '100vh', border: '1px solid gray'}}>
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>

          {/* <p style={{position: 'relative', marginTop: '50px',color:'black', textAlign: 'center' }}>손으로 해당 이미지를 따라해주세요.</p> */}
          <div id="container" style={{ display: 'grid', gridTemplateColumns: '5fr 5fr', gridTemplateRows: 'repeat(3, 1fr)', height: '100vh', width: '80%', columnGap: '100px', marginLeft: '100px', marginTop: '3%', rowGap: '40px'}}>
          <div style={{gridColumn: '1 / span 2', }}>
          <b style={{marginLeft: '10%', paddingBottom: '20px', color: '#ec9a00', fontWeight: 'bold'}}>GOLD 111</b>
          <BorderLinearProgress variant="determinate" value={progressValue} style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginTop: '80px', width: '80%', margin: 'auto', height:' 40px'}}/>

          </div>

            <div style={{backgroundColor:'white', display: 'flex', flexDirection: 'column', marginTop: '5%', border: '1px solid black', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',padding: '30px', height: '90%'}}>
              <h2 style={{margin:'auto'}}>퀴즈 결과</h2>
              <div id="chart"></div>
              <button style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',width: '100px', backgroundColor: `${confirmButtonColor}`
              ,cursor: confirmButtonColor == '#00cc00' ? 'pointer' : 'default',
            }} onClick={handleSports}>확인</button>

            </div>
              <div style={{backgroundColor:'white', display: 'flex', flexDirection: 'column', marginTop: '5%', border: '1px solid black', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',padding: '30px', height: '90%'}}>
                  <h2 style={{margin:'auto'}}>이번 주 학습</h2>
                  <div id="week"></div>

            </div>
          </div>
           
        </div>

  </div>
    
    </div>
  );
  
};

export default Result;