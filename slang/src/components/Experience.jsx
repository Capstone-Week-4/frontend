import { ContactShadows, OrbitControls } from "@react-three/drei";
import  React, { useRef, useState} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Carousel } from "./Carousel";
import { Carousel2 } from "./Carousel2";
import { Depth, LayerMaterial , Noise} from "lamina";
import * as THREE from "three";
import {CameraControls} from './Camera'
import { Canvas } from '@react-three/fiber'


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
          colorB="#35A29F"
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

  const [target, setTarget] = useState({x:18,y:10,z:15})

  const handleOnclick=() => {
    setPosition({ x:0, y:8, z:-77})  
  }

  return (
    <>
    <OrbitControls
      enableDamping={true}
      enableRotate={false}
    />
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 6]} intensity={3} color={'#e0ffff'} />
      <directionalLight position={[-4, 5, 6]} intensity={0.8} color={"#ffffff"} />
      <directionalLight position={[-20, 5, -40]} intensity={1.5} color={"#ffffff"} />

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