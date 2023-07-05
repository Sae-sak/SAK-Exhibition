import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Hall() {
  const Model = () => {
    const { scene } = useGLTF("model/hall.gltf");
    return <primitive object={scene} />;
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
