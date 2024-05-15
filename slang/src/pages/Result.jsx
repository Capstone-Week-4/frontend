import React, { useEffect, useState } from 'react';
import '../static/style.css'
import { useNavigate } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import ApexCharts from 'apexcharts';



const Result = () => {
  const [activeSpan, setActiveSpan] = useState(null);
  const handleSpanClick = (id) => {
    setActiveSpan(id);
  };
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [67],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  });

  useEffect(() => {
    const chartElement = document.getElementById('chart');
    const chart = new ApexCharts(chartElement, chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [chartOptions]);


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

  <div style={{marginLeft: '100px', padding: '1px', height: '100vh', border: '1px solid gray'}}>
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>

          {/* <p style={{position: 'relative', marginTop: '50px',color:'black', textAlign: 'center' }}>손으로 해당 이미지를 따라해주세요.</p> */}
          <div id="container" style={{display: 'grid', gridTemplateColumns: '8fr 2fr', gridTemplateRows: 'repeat(3, 1fr)', height: '100%', width: '1300px', columnGap: '100px', marginLeft: '100px'}}>
            
          <div id="chart"></div>

          </div>

        </div>

  </div>
    
    </div>
  );
  
};

export default Result;