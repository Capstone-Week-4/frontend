/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Starkosha (https://sketchfab.com/Starkosha)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-character-b0889531adc346e19b0bc075cfe58457
Title: Cute Character
*/

import React, { useRef, useState} from 'react';
import { useGLTF, Html} from '@react-three/drei';
import { User_Zone } from '../popup/User_Zone';

export function User(props) {
  const { nodes, materials } = useGLTF('./models/user/scene.gltf')
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCameraMoved, setIsCameraMoved] = useState(false);
  const [position, setPosition] = useState(); //  0,-2,0 -45,-20,25 camera =         //camera = {{fov:95, position: [0,10,20]}}

  const handleUserClick = () => {

    if (!isCameraMoved) 
      {
        setIsCameraMoved(true);
        setPosition({ x:-78, y: 20, z:-42}) ;
      }

      else{
      
        setIsPopupOpen(true);
        setIsCameraMoved(false);

      }
  }
  
  const closePopup=()=> {
    setIsPopupOpen(false);

  }
  
  return (
    <group onClick={() => handleUserClick()} >
      <Html>
        {isPopupOpen && <User_Zone onClose={closePopup} />}
        </Html>

    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={200}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Material004_0.geometry}
          material={materials['Material.004']}
          position={[0, -150.611, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[248.122, 248.122, 40.292]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_Material_0.geometry}
          material={materials.Material}
          position={[0, -105.689, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={242.857}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={200}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material003_0.geometry}
          material={materials['Material.003']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={93.947}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath009_Material_0.geometry}
          material={materials.Material}
          position={[-77.029, -82.946, -190.583]}
          rotation={[0.036, 0.59, 1.428]}
          scale={10.212}
        />
      </group>
    </group>
    </group>

  )
}

useGLTF.preload('./models/user/scene.gltf')


