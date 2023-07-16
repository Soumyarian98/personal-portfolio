import { useGLTF, OrbitControls, Preload, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import useMediaQuery from "@/hooks/useMediaQuery";

const Model = () => {
  const { isMobile } = useMediaQuery();
  const model = useGLTF("/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <spotLight
        position={[-20, 50, 10]}
        intensity={1}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.7 : 0.8}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0.0, -0.2, -0.1]}
      />
    </mesh>
  );
};

const HeroSectionModel = () => {
  return (
    <Canvas
      className="w-full h-full"
      frameloop="always"
      shadows
      camera={{ position: [20, 2, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeroSectionModel;
