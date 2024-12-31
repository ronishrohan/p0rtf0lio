import { OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";

const PixelImage = () => {
  const container = useRef(null);
  return (
    <div ref={container} className="size-full">
      <Canvas frameloop="always">
        <OrthographicCamera></OrthographicCamera>
        <Image></Image>
      </Canvas>
    </div>
  );
};

const Image = () => {
  const tex = useLoader(TextureLoader, "/images/hero.png");
  const imageAspect = tex.image.width / tex.image.height;
  const { viewport, mouse } = useThree();
  const [size, setSize] = useState({
    width: viewport.width,
    height: viewport.height,
  });

  const ShaderMaterial = {
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    void main() {
      vec2 gridSize = vec2(25.0, 15.0);
      vec2 gridUV = floor(vUv * gridSize) / gridSize;
      float pulse = sin(uTime + gridUV.x * 10.0 + gridUV.y * 10.0) * 0.5 + 0.5;
      vec4 texColor = texture2D(uTexture, vUv + uMouse);
      gl_FragColor = texColor * vec4(pulse, pulse, pulse, 1.0);
    }
  `,
  };

  useEffect(() => {
    if (viewport.height > viewport.width) {
      setSize({
        width: viewport.width,
        height: viewport.width / imageAspect,
      });
    } else {
      setSize({
        width: viewport.height * imageAspect,
        height: viewport.height,
      });
    }
  }, [viewport]);

  const shaderRef = useRef(null);
  const mouseRef = useRef([0, 0]);

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
      // shaderRef.current.uniforms.uMouse.value = mouse;
    }
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = [e.clientX, e.clientY];
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <mesh scale={[size.width, size.height, 1]}>
      <planeGeometry />
      <shaderMaterial
        ref={shaderRef}
        color="white"
        map={tex}
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: tex },
          uMouse: {value: mouse}
        }}
        vertexShader={ShaderMaterial.vertexShader}
        fragmentShader={ShaderMaterial.fragmentShader}
      />
    </mesh>
  );
};

export default PixelImage;
