import React from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import BrightSphere from '../models/BrightShpere';
import SpaceWarp from '../models/SpaceWarp';




const fadeout=keyframes`
    0% {
        opacity : 1;
    }
    100% {
        opacity : 0;
        diplay: none;
    }
    `;

const FadeoutScreen = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    z-index: 101;
    background-color: white;
    animation" ${fadeout} 0.5s linear forwards;
    `;



function GoingPage( {isSwitching , setIsSwitching }) {
    
    // 해당 페이지는 정말 멋을 위한 ... 페이지. ...
    // 정육면체에 선들은 고정되어서 있고, 카메라가 위에서부터 아래까지 이동하면서 빨려들어가는 느낌을 준다. (Space warp 검색)
    

    const camera = {
        position: [0,100000,0],//xyz y축 10000만큼 올라와있는위치에 있따. 카메라 위에서부터 아래로 가기 위해서
        up: [0,0,1],// 카메라 상단이 z축 향하고 있다. 
        far: 100000, // 100000만큼 먼것까지 볼수 o
    };


    const canvasStyle = {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        zIndex: 999, // 다음 화면 렌더링할 때 덮어주는 역할 (로딩화면의 효과) 를 하기 위해서 abosolute+zindex 999
        backgroundColor: '#669985',
    };

    
if (isSwitching === 'end') return null // 이건 차후에 main page로 넘어가야함

if(isSwitching === 'fade') return <FadeoutScreen onAnimationEnd={() => setIsSwitching('end')} />;


return(

    <Canvas camera={camera} style={canvasStyle}>
        <EffectComposer>
            <Bloom 
                intensity={2}
                mipmapBlur={true}
                luminanceThreshold = {0.55} // 적용되는 픽셀의 최소 밝기값 (그 이하의 밝기 가진 픽셀은 효과 적용 x )
                luminanceSmoothing={0} // 밝기의 부드러움
            />
        </EffectComposer>
        <BrightSphere/>
        <SpaceWarp setIsSwitching={setIsSwitching} />  // Corrected prop name
        <ambientLight intensity = {15} />



    </Canvas>

);
}


export default GoingPage;