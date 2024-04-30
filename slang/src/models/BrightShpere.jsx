import React from 'react';
import {useThree} from '@react-three/fiber'

export default function BrightSphere() {
    return (
        <mesh position={[0,0,0]}> 
            <sphereGeometry args = {[600,32,32]} />  
            <meshStandardMaterial color="white" />
        </mesh>
    );
}
// 600: 구의 반지름 

