import React, { useEffect, useState, useRef } from 'react';
import '../static/style.css'
import { useNavigate, useLocation } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import ApexCharts from 'apexcharts';
import Dashboard from './Dashboard';



const Result = () => {
  const [activeSpan, setActiveSpan] = useState(null);
  const handleSpanClick = (id) => {
    setActiveSpan(id);
  };
  const navigate = useNavigate();
  const [confirmButtonColor, setConfirmButtonColor] = useState('#00cc00');
  const location = useLocation();
  // const { correctAnswer } = location.state;
  // console.log("Correct AnsweR: " + correctAnswer)

  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [75],
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px',
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Percent'],
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  const handleSports = () => {
    navigate('/camera');

   
  }

  return (
    <div style={{display: 'grid', gridTemplateColumns: '10% 90%', height: '100vh', color: 'black'}}>
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

  <div style={{marginLeft: '100px', padding: '1px', height: '100vh', border: '1px solid gray'}}>
  </div>
    <h1>TEST</h1>
    </div>
  );
  
};

export default Result;