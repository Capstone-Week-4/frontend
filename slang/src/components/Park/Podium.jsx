import Bear from "./Bear";
import Dog from "./Dog";
import Duck from "./Duck";
import { Box } from '@react-three/drei'; // Box 컴포넌트 import
import {animated, useSpring} from '@react-spring/three';

const ANIMAL_SCALE = 1.36;
const ANIMAL_SCALE_GROW = 2;



export const Podium = (props) => {

  const {
    bearScale,
    bearPositionY,
    bearPodiumRotation,
    bearPodiumScale,
    bearPodiumColor,
    dogScale,
    dogPositionY,
    dogPodiumColor,
    dogPodiumRotation,
    dogPodiumScale,
    duckPodiumColor,
    duckPodiumRotation,
    duckPodiumScale,
    duckPositionY,
    duckScale
  } = useSpring({
    from: {
      bearScale: ANIMAL_SCALE,
      bearPositionY: 0.25,
      bearPodiumScale: 0.5,
      bearPodiumRotation: 0,
      bearPodiumColor: "#906efa",
      dogScale: ANIMAL_SCALE,
      dogPositionY: 0.25,
      dogPodiumScale: 0.5,
      dogPodiumRotation: 0,
      dogPodiumColor: "#906efa",
      duckScale: ANIMAL_SCALE,
      duckPositionY: 0.25,
      duckPodiumScale: 0.5,
      duckPodiumRotation: 0,
      duckPodiumColor: "#906efa",
    },
    to: [
      {
        bearScale: ANIMAL_SCALE_GROW,
        bearPositionY: 0.5,
        bearPodiumScale: 1,
        bearPodiumRotation: Math.PI,
        bearPodiumColor: "#6f2f23",
      },
      {
        dogScale: ANIMAL_SCALE_GROW,
        dogPositionY: 0.5,
        dogPodiumScale: 1,
        dogPodiumRotation: Math.PI,
        dogPodiumColor: "#cea77d",
      },
      {
        duckScale: ANIMAL_SCALE_GROW,
        duckPositionY: 0.5,
        duckPodiumScale: 1,
        duckPodiumRotation: Math.PI,
        duckPodiumColor: "yellow",
      },
      {
        duckScale: ANIMAL_SCALE,
        duckPositionY: 0.25,
        duckPodiumScale: 0.5,
        duckPodiumRotation: 0,
        duckPodiumColor: "#906efa",
        dogScale: ANIMAL_SCALE,
        dogPositionY: 0.25,
        dogPodiumScale: 0.5,
        dogPodiumRotation: 0,
        dogPodiumColor: "#906efa",
        bearScale: ANIMAL_SCALE,
        bearPositionY: 0.25,
        bearPodiumScale: 0.5,
        bearPodiumRotation: 0,
        bearPodiumColor: "#906efa",
      },
    ],
    config: {
      mass: 4,
      tension: 700,
      friction: 40,
    },
    loop: true,
  });


  return (
    <group {...props}>
      <animated.group
        position-y={bearPositionY}
        scale-x={bearScale}
        scale-y={bearScale}
        scale-z={bearScale}
      >
        <Bear />
      </animated.group>
      <Box scale-y={bearPodiumScale} rotation-y={bearPodiumRotation}>
        <animated.meshStandardMaterial color={bearPodiumColor} />
      </Box>

      <group position={[3, 0, 0]}>
        <animated.group
          position-y={dogPositionY}
          scale-x={dogScale}
          scale-y={dogScale}
          scale-z={dogScale}
        >
          <Dog />
        </animated.group>
        <Box scale-y={dogPodiumScale} rotation-y={dogPodiumRotation}>
          <animated.meshStandardMaterial color={dogPodiumColor} />
        </Box>
      </group>
      <group position={[6, 0, 0]}>
        <animated.group
          position-y={duckPositionY}
          scale-x={duckScale}
          scale-y={duckScale}
          scale-z={duckScale}
        >
          <Duck />
        </animated.group>
        <Box scale-y={duckPodiumScale} rotation-y={duckPodiumRotation}>
          <animated.meshStandardMaterial color={duckPodiumColor} />
        </Box>
      </group>
    </group>
  );
};
