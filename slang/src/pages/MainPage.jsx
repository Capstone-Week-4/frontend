import { Experience } from '../components/Experience';
import { Canvas } from '@react-three/fiber';
import {Sparkles} from '@react-three/drei';


export default function MainPage() {
    return ( 
    <Canvas camera = {{fov:95, position: [20,30,50]}} > 
        <Experience/>
   </Canvas>
 )
};