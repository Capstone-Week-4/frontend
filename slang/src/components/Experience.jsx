import { ContactShadows, OrbitControls, Sparkles } from "@react-three/drei";
import  React, { useRef, useState} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Carousel } from "./Carousel";
import { Carousel2 } from "./Carousel2";
import { Depth, LayerMaterial , Noise} from "lamina";
import * as THREE from "three";
import {CameraControls} from './Camera'
import { Canvas } from '@react-three/fiber';
import {Bloom, DepthField, DepthOfField, EffectComposer, Vignette} from '@react-three/postprocessing';


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

  const [target, setTarget] = useState({x:18,y:5,z:15})

  const handleOnclick=() => {
    setPosition({ x:0, y:8, z:-77})  
  }

  return (
    <>
    <OrbitControls
      enableDamping={true}
      enableRotate={false}
    />

    
          <Sparkles noise = {0} count={1000} speed={0.7} size = {3} color = {"#5DEBD7"} opacity={7} scale={[-300,-500,300]}></Sparkles>
          <Sparkles noise = {0} count = {1000} speed={1} size = {1.8} color = {"#E2F4C5"} opacity={6} scale = {[-300,-500,300]} ></Sparkles> 
          <Sparkles noise = {0} count={800} speed = {1} size ={2} color = {"#59D5E0"} opacity = {6} scale = {[-300,-500,300]}></Sparkles>
          <Sparkles noise = {0} count={800} speed = {0.5} size ={2.4} color = {"#F8E1F4"} opacity = {6} scale = {[-300,-500,300]}></Sparkles>



      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 6]} intensity={3} color={'#e0ffff'} />
      <directionalLight position={[-4, 5, 6]} intensity={0.8} color={"#ffffff"} />
      <directionalLight position={[-20, 5, -40]} intensity={1.5} color={"#ffffff"} />

      <EffectComposer>
        <Bloom intensity={0.4} luminanceThreshold={0.5} luminanceSmoothing={0.4} height={460}/>
        <DepthOfField focusDistance={0} focalLength={0.5} bokehScale={1.2} height={480} />
        <Vignette eskil={false} offset={.1} darkness={0.8} />
      </EffectComposer>



        <Carousel />
   
        <CameraControls position={position} target={target} />
        
        <group rotation-y={-Math.PI / 4} onClick={handleOnclick}>   
        <Carousel2 />
        </group>
     
        <ContactShadows scale={30} opacity={0.3} />
        <Background />
    </>
  );
};