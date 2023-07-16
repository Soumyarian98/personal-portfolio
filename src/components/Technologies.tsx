import SectionWrapper from "@/hoc/SectionWrapper";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { technologies } from "@/constants/data";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  PresentationControls,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Ball = ({ img }: { img: string }) => {
  const [decal] = useTexture([img]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="rgba(165,180, 252)"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.5}
          metalness={1}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ url }: { url: string }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <PresentationControls
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <Ball img={url} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

const Technologies = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container py-[60px] relative z-10">
        <motion.div
          variants={textVariant(0.5)}
          className="space-y-2 text-center">
          <p className="text-indigo-200">Tools I use in my day to day work</p>
          <h2 className="text-4xl lg:text-6xl uppercase font-extrabold text-lime-400">
            Technologies
          </h2>
        </motion.div>
        <div className="flex gap-4 mt-8 flex-wrap justify-center items-center">
          {technologies.map(t => {
            return (
              <div
                key={t.name}
                className="relative w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]">
                <BallCanvas url={t.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Technologies, "technologies");
