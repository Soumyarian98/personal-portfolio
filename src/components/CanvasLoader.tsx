import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <p className="font-medium text-lime-200">{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
