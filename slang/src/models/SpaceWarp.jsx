import React, {useMemo} from 'react';
import {useFrame} from '@react-three/fiber';
import * as THREE from 'three';

const SPACE_WARP_LINES_NUM = 1300;  
const SPACE_WARP_LINE_LENGTH = 18000; 

const SPACE_WARP_Y_MAX = 100000; 
const SPACE_WARP_Y_MIN = 0; 
const SPACE_WARP_XZ_MAX = 10000; 
const SPACE_WARP_XZ_MIN = -10000; 

const SPACE_WARP_LINE_COLORS = [

	"#0c4542",
	'#3A5AFF',
	'#6D3AFF',
	'#9734FF',
	'#EFE0FF',
    '#71b2d0',
    '#cde9ee',
    '#f2caf6',
	'#DDDDDD',
	'#FDFFE2',
];


export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  export const getRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
  };


const getSpaceWarpLinesInfo = () => {
    const positions = Array.from({ length: SPACE_WARP_LINES_NUM }, () => {
      const x = getRandomFloat(SPACE_WARP_XZ_MIN, SPACE_WARP_XZ_MAX)
      const y = getRandomFloat(SPACE_WARP_Y_MIN, SPACE_WARP_Y_MAX)
      const z = getRandomFloat(SPACE_WARP_XZ_MIN, SPACE_WARP_XZ_MAX)
  
      return [x, y, z, x, y - SPACE_WARP_LINE_LENGTH, z]
    }).flat()
  
    const colors = Array.from({ length: SPACE_WARP_LINES_NUM }, () => {
      const color = new THREE.Color(
        SPACE_WARP_LINE_COLORS[getRandomInt(0, SPACE_WARP_LINE_COLORS.length)]
      )
  
      return [color.r, color.g, color.b]
    }).flat()
  

    return [new Float32Array(positions), new Float32Array(colors)]
  }



export default function SpaceWarp({ setIsSwitching}) {

   
const [positions, colors] = useMemo(() => getSpaceWarpLinesInfo(), []) // positions, colors에 결과 getSpaceWarpLinesInfo 결과값 할당



useFrame((state, delta)=> {

    if (state.camera.position.y <= SPACE_WARP_Y_MIN) {
        state.scene.background = new THREE.Color(0x63a8ab);
        setIsSwitching('fade');
        return
    }

    state.camera.position.y -= 75000 * delta;

});

return (
    <lineSegments>
        <bufferGeometry attach="geometry">
            <bufferAttribute
                attach = "attributes-position"
                count = {SPACE_WARP_LINES_NUM}
                array = {positions}
                itemSize={3}
                
                />

            <bufferAttribute 
                attach="attributes-color"
                count = {SPACE_WARP_LINES_NUM}
                array = {colors}
                itemSize={3}
                />
        </bufferGeometry>

        <lineBasicMaterial attach="material" vertexColors = {true}/>
    </lineSegments>
);
}

