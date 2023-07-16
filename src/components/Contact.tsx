import SectionWrapper from "@/hoc/SectionWrapper";
import React, { Suspense, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { BufferGeometry, Float32BufferAttribute } from "three";

const Model = () => {
  const model = useGLTF("/planet/scene.gltf");
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
      <primitive object={model.scene} scale={2} />
    </mesh>
  );
};

const Stars = () => {
  const ref = useRef<any>();
  const geometry = new BufferGeometry();
  const vertices = [];

  for (let count = 0; count < 5000; count++) {
    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push(x, y, z);
  }

  geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

  useFrame((_, delta) => {
    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y += delta / 15;
  });

  return (
    <group ref={ref}>
      <points args={[geometry]}>
        <pointsMaterial
          size={0.005}
          sizeAttenuation={true}
          alphaTest={0.5}
          transparent={true}
          color="rgb(190, 242, 100)"
        />
      </points>
    </group>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="relative min-h-screen" ref={ref}>
      {isInView && (
        <div className="container z-20 relative py-20 bg-transparent">
          <motion.div
            variants={slideIn({
              direction: "left",
              type: "tween",
              delay: 0.2,
              duration: 1,
            })}>
            <div className="flex  flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-900 bg-opacity-50 p-6 space-y-12 rounded-2xl">
                <div className="space-y-1">
                  <p className="text-indigo-200 text-sm">Get In Touch</p>
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-lime-300 uppercase">
                    Contact
                  </h2>
                </div>
                <form>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-indigo-200">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="bg-slate-900 border border-slate-700 text-indigo-100 text-sm rounded block w-full p-2.5 focus:outline-none focus:border-lime-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-indigo-200">
                        Your Email
                      </label>
                      <input
                        type="text"
                        id="em"
                        className="bg-slate-900 border border-slate-700 text-indigo-100 text-sm rounded block w-full p-2.5 focus:outline-none focus:border-lime-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-indigo-200">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="bg-slate-900 border border-slate-700 text-indigo-100 text-sm rounded block w-full p-2.5 focus:outline-none focus:border-lime-500"
                        placeholder="What do you want to say?"
                        rows={7}
                        required
                      />
                    </div>
                    <div className="flex justify-end ">
                      <button
                        type="button"
                        className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded text-sm px-5 py-2.5 text-center mb-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="relative h-[300px] lg:h-full">
                <Canvas
                  frameloop="demand"
                  camera={{ fov: 45 }}
                  gl={{ preserveDrawingBuffer: true }}>
                  <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                      enableZoom={false}
                      autoRotate={true}
                      maxPolarAngle={Math.PI / 2}
                      minPolarAngle={Math.PI / 2}
                    />
                    <Model />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <div className="absolute top-0 left-0 inset-0">
        <Canvas shadows frameloop="always" camera={{ fov: 45 }}>
          <Suspense fallback={<CanvasLoader />}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
