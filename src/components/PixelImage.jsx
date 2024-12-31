import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";

const Scene = () => {
  
  const meshRef = useRef();

  const texture = useLoader(TextureLoader, "/images/hero.png");

  const margin = 0.2;

  const plane = useRef();

  useEffect(() => {
    console.log(plane.current);
  }, [plane]);

  // Adjust the orthographic camera settings

  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry
          ref={plane}
          rotateX={90}
          rotateY={90}
          rotateZ={90}
          args={[5, 5]}
          
        ></planeGeometry>{" "}
        {/* Adjust size of the plane */}
        <meshBasicMaterial map={texture}></meshBasicMaterial>
      </mesh>
      
    </>
  );
};

export const Fiber = () => {
  return (
    <Canvas
      camera={{
        position: [10, 0, 0],
        fov: 45,
        near: 0.1,
        far: 1000,
      }}
      style={{ height: "100%" }}

    >
        
      <OrbitControls />

      <OrthographicCamera
        makeDefault
        zoom={50}
        top={200}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={2000}
        position={[0, 0, 10]}
      />
      <Scene />
    </Canvas>
  );
};

export default Fiber;
