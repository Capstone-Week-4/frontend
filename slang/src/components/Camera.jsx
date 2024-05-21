import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CameraControls = ({ position, target }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  function cameraAnimate() {
    if (controlsRef.current) {
      gsap.timeline().to(
        camera.position,
        {
          duration: 2,
          repeat: 0,
          x: position.x,
          y: position.y,
          z: position.z,
          ease: "power3.inOut",
        }
      );


      gsap.to(camera, {
        duration: 2,
        onUpdate: () => camera.updateProjectionMatrix(),
        ease: "power3.inOut",
      });
    }
  }

  useEffect(() => {
    cameraAnimate();
  }, [target, position]);

  return (
    <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />
  );
};
