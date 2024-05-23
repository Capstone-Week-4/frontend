import { IceCream } from "../Beach/IceCream";
import { Palm } from "../Beach/Palm";
import { VolleyBall } from "../Beach/VolleyBall";
import Burger from "../Food/Burger";
import Cannon from "../Food/Cannon";
import { HotDog } from "../Food/HotDog";
import { TargetStand } from "../Food/TargetStand";
import { BookCase } from "../Haunted/BookCase";
import { Cauldron } from "../Haunted/Cauldron";
import { Fence } from "../Haunted/Fence";
import { Witch } from "../Haunted/Witch";
import { FerrisWheel } from "../Park/FerrisWheel";
import { Podium } from "../Park/Podium";
import { ShipLight } from "../Park/ShipLight";
import { Box, Cylinder,Float } from '@react-three/drei';
import {useSpring, animated} from "@react-spring/three";
import { CarouselModel } from "./CarouselModel";
import { Korean } from "../korean/Korean";
import { Hanguel } from "../Hanguel/Hanguel";
import { Haetae } from "../Haetae/Haetae";
import {useRef} from 'react';
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";


const STEP_DURATION = 2000;
const SPOTLIGHT_SPEED = 4;

export const Carousel = (props) => {


  
  const {carouselRotation, currentStep} = useSpring({
    from: {
      carouselRotation: 0,
      currentStep: 0,

    }, to : [{
      carouselRotation: -Math.PI/2,
      delay: STEP_DURATION,
      currentStep: 1,

    }, {
      carouselRotation: -Math.PI,
      delay: STEP_DURATION,
      currentStep: 2,

    }, {
      carouselRotation: -1.5 * Math.PI,
      delay: STEP_DURATION,
      currentStep: 3,

    
    }, {
      carouselRotation: -2*Math.PI,
      delay: STEP_DURATION,
      currentStep: 0,

    },],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: true,
    immediate: true, 

  });

  const spotLightRef = useRef();

  useFrame((_state, delta) => {
    const posX = currentStep.to([0, 1, 2, 3], [8, -6, 0, -9]).get();
    const posY = currentStep.to([0, 1, 2, 3], [5, 1, 12, 3]).get();
    const posZ = currentStep.to([0, 1, 2, 3], [12, 10, 5, 8]).get();

    const pos = new Vector3(posX, posY, posZ);

    spotLightRef.current.position.lerp(pos, delta * SPOTLIGHT_SPEED);

    const targetX = currentStep.to([0, 1, 2, 3], [-5, 0, 0, 3.5]).get();
    const targetZ = currentStep.to([0, 1, 2, 3], [5, 5, 5, 8]).get();

    const targetPos = new Vector3(targetX, 0, targetZ);

    spotLightRef.current.target.position.lerp(
      targetPos,
      delta * SPOTLIGHT_SPEED
    );

    spotLightRef.current.target.updateMatrixWorld();
  });
  
  return (
    <>

      <spotLight 
        ref = {spotLightRef}
        penumbra={0.4}
        intensity={10}
        angle={1.5}
        position={[0,20,16]}
        />

      <group rotation-y={-Math.PI / 4} position-y={-0.01}>
        <animated.group rotation-y={carouselRotation}> 
        <CarouselModel position ={[0,-2,0]}/>
 
          {/* PARK */}
          <>
            <Podium position={[1, 0, 10]} rotation-y={Math.PI / 2} />
            <FerrisWheel position={[6, 0, 2]} scale={[3, 3, 3]} />
            <Float speed={5} floatIntensity={0.3}>
            <ShipLight
              position={[5, 0.66, 6]}
              scale={[0.5, 0.5, 0.5]}
              rotation-x={-Math.PI / 16}
              rotation-y={-Math.PI}
            />

            </Float>
          </>





          {/* FOOD */}
          <>
            <Burger position={[3, 4, -10]} scale={[3, 3, 3]} />
            <Burger position={[3, 4, -3]} scale={[3, 3, 3]} />
            <Burger position={[10, 4, -3]} scale={[3, 3, 3]} />
            <Cannon
              position={[10, 0, -3]}
              scale={[2, 2, 2]}
              rotation-y={Math.PI / 2}
            />
            <TargetStand
              position={[2, 0, -3]}
              scale={[1, 1, 1]}
              rotation-y={Math.PI / 2}
            />
            <HotDog
              position={[4, 1, -7]}
              scale={[4, 4, 4]}
              rotation-y={-Math.PI / 8}
            />
          </>






          {/* HAUNTED */}
          <>
            <Korean
              position={[-3.9, 1, -3.8]}
              scale={[0.15, 0.15, 0.15]}
              rotation-y={Math.PI * 1.22}
            />


          <Float speed={1.7} floatIntensity={0.02}>

            <Hanguel
             position={[-14, -10.1, 5.7]}
              scale={[2.2, 2.2, 2.2]}
              rotation-y={Math.PI * 0.27}
            />

            </Float>
              
            <Haetae
              position={[-9.1, -0.2, -2.5]}
              scale={[0.165, 0.165, 0.165]}     
              rotation-y={Math.PI * 1.02}
              />


          </>







          {/* BEACH */}
          <>
            <Palm scale={[3, 3, 3]} position={[-1, 0, 1]} />
            <Palm
              scale={[2.8, 2.6, 2.6]}
              position={[-7, 0, 0]}
              rotation-y={Math.PI / 6}
            />
            <VolleyBall />
         
          </>
        </animated.group >
      </group>
    </>
  );
};
