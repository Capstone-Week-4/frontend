import { ContactShadows, OrbitControls, Sparkles } from "@react-three/drei";
import  React, { useRef, useState} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Carousel } from "./Carousel/Carousel";
import { Carousel2 } from "./Carousel/Carousel2";
import { Carousel3 } from "./Carousel/Carousel3";
import { User } from "./User";
import { Depth, LayerMaterial , Noise} from "lamina";
import * as THREE from "three";
import {CameraControls} from './Camera'
import { Canvas } from '@react-three/fiber';
import {Bloom, DepthField, DepthOfField, EffectComposer, Vignette} from '@react-three/postprocessing';
import {Float} from "@react-three/drei";


const Background = () => {
  const BG_SPEED = 0.15;
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.rotation.x += BG_SPEED * delta;
    ref.current.rotation.y += BG_SPEED * delta;
    ref.current.rotation.z += BG_SPEED * delta;
  });

  return (
    <mesh ref={ref} scale={200}>

      <sphereGeometry args={[1, 100, 100]} />
  
      <LayerMaterial side={THREE.BackSide}>
        
        <Depth
          colorA="#176B87"
          colorB="#135D66"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
   
      </LayerMaterial>

    </mesh>
  );
};


export const Experience = () => {
  const [position, setPosition] = useState({x:18,y:10,z:10}) //  0,-2,0 -45,-20,25 camera =         //camera = {{fov:95, position: [0,10,20]}}

  const [target, setTarget] = useState({x:18, y:10, z:10})

  const handleOnclick_1=() => {
    setPosition({ x:18, y:10, z:10})  
  }

  const handleOnclick_2=() => {
    setPosition({ x:2, y:5, z:-75})  
  }
// -33, 8, -33
// <group position={[40, -15, -10]}>

  const handleOnclick_3=() => {
    setPosition({ x:-70, y:1, z:40})  
  }

  const handleOnclick_4=() => {
    setPosition({ x:-78, y: 20, z:-42}) 
  
  }

  return (
    <>
    <OrbitControls
      enableDamping={true}
      enableRotate={false}
    />

          <Sparkles noise = {0} count={1200} speed={0.5} size = {2.2} color = {"#5DEBD7"} opacity={7} scale={[-300,-500,300]}></Sparkles>
          <Sparkles noise = {0} count = {1000} speed={0.6} size = {1.8} color = {"#E2F4C5"} opacity={6} scale = {[-300,-500,300]} ></Sparkles> 
          <Sparkles noise = {0} count={800} speed = {0.65} size ={2} color = {"#59D5E0"} opacity = {6} scale = {[-300,-500,300]}></Sparkles>
          <Sparkles noise = {0} count={800} speed = {0.5} size ={2.4} color = {"#F8E1F4"} opacity = {6} scale = {[-300,-500,300]}></Sparkles>
          <Sparkles noise = {0} count={500} speed = {0.7} size ={3.2} color = {"#A3FFD6"} opacity = {6} scale = {[-300,-500,300]}></Sparkles>
          <Sparkles noise = {0} count={500} speed = {0.8} size ={2.7} color = {"#B6FFFA"} opacity = {6} scale = {[-400,-200,200]}></Sparkles>

      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 6]} intensity={3} color={'#e0ffff'} />
      <directionalLight position={[-4, 5, 6]} intensity={0.8} color={"#ffffff"} />
      <directionalLight position={[-20, 5, -40]} intensity={1.5} color={"#ffffff"} />

      <EffectComposer>
        <Bloom intensity={0.4} luminanceThreshold={0.5} luminanceSmoothing={0.4} height={460}/>
        <DepthOfField focusDistance={0} focalLength={0.5} bokehScale={1.2} height={480} />
        <Vignette eskil={false} offset={.1} darkness={0.8} />
      </EffectComposer>

      <CameraControls position={position} target={target} />

      <group rotation-y={-Math.PI / 4} onClick={handleOnclick_1}>   
        <Carousel />
        </group>

        <group rotation-y={-Math.PI / 4} onClick={handleOnclick_2}>   
        <Carousel2 />
        </group>

        <group rotation-y={-Math.PI / 4} onClick={handleOnclick_3}>   
        <Carousel3 />
        </group>

      <group onClick={handleOnclick_4}>

      <Float speed={0.7} floatIntensity={0.3}>
        <User 
        scale={[4.5, 3.8, 4.5]}
        position={[-51.5, 11.5, -26.5]}
        rotation-y={-Math.PI/1.54}
        rotation-z={0.051}
        rotation-x={0.11}
         />
    
    </Float>
      </group>

        <ContactShadows scale={30} opacity={0.3} />
        <Background />
    </>
  );
};