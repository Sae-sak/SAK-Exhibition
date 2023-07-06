import * as THREE from "three";

import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";

export default function Hall() {
  // 전시장 gltf 파일 로드
  const GLTFModel = () => {
    const { scene } = useLoader(GLTFLoader, "model/HallV2.gltf");
    const hallRef = useRef(null);

    useFrame(() => {
      if (hallRef.current) {
        hallRef.current.rotation.y += 0.001; // 회전 속도를 조절합니다.
      }
    });

    return (
      <mesh receiveShadow>
        {scene ? <primitive ref={hallRef} object={scene} /> : <boxGeometry />}
      </mesh>
    );
  };

  const directionalCtl = useControls("Directional Light", {
    visible: true,
    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
    },
    castShadow: true,
  });

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  return (
    <div className="w-full h-full">
      <Canvas shadows="variance">
        {/* 카메라 설정 */}
        <OrthographicCamera
          makeDefault
          position={[-90, 90, 90]}
          zoom={30}
          left={windowWidth / -2}
          right={windowWidth / 2}
          top={windowHeight / 2}
          bottom={windowHeight / -2}
          near={0.1}
          far={1000}
        />

        {/*  기본 조명 설정 */}
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={3}
          visible={directionalCtl.visible}
          position={[
            directionalCtl.position.x,
            directionalCtl.position.y,
            directionalCtl.position.z,
          ]}
          castShadow={directionalCtl.castShadow}
        />
        {/* <pointLight intensity={0.5} position={[0, 0, 8]} castShadow /> */}

        <Suspense fallback={null}>
          {/*  GLTF 모델 */}
          <GLTFModel />
        </Suspense>
        <meshStandardMaterial
          shadowSide={THREE.DoubleSide}
          flatShading
          attach="material"
          wireframe
        />
        <OrbitControls target={[0, 3, 0]} />
      </Canvas>
    </div>
  );
}
