import SectionWrapper from "@/hoc/SectionWrapper";
import React, { Suspense, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
import {
  AmbientLight,
  IcosahedronGeometry,
  MeshStandardMaterial,
  DirectionalLight,
} from "three";

const geometry = new IcosahedronGeometry(1, 1);
const material = new MeshStandardMaterial({
  color: 0xa5b4fc,
  polygonOffset: true,
  polygonOffsetFactor: -5,
  flatShading: true,
  roughness: 0.5,
  metalness: 1,
});

const Ball = ({ img }: { img: string }) => {
  const [decal] = useTexture([img]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        geometry={geometry}
        material={material}>
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
    <Canvas frameloop="always" dpr={1} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Ball img={url} />
      </Suspense>
    </Canvas>
  );
};

const Technologies = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container py-[60px] relative z-10">
        <div className="space-y-2 text-center">
          <p className="text-indigo-200">Tools I use in my day to day work</p>
          <h2 className="text-4xl lg:text-6xl uppercase font-extrabold text-lime-400">
            Technologies
          </h2>
        </div>
        <div className="flex gap-4 mt-8 flex-wrap justify-center items-center">
          {technologies.map(t => {
            return (
              <div
                key={t.name}
                className="relative w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]">
                <Suspense fallback={<CanvasLoader />}>
                  <BallCanvas url={t.icon} />
                </Suspense>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
