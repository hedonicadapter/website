import * as THREE from 'three';
import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, useGLTF, useVideoTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useSpring, animated } from '@react-spring/three';

import url from '../assets/roubineDemo.webm';
import { Mesh } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Phone: THREE.Mesh;
    Cam_module: THREE.Mesh;
    Circle: THREE.Mesh;
    flash: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Cylinder007: THREE.Mesh;
    Cylinder007_1: THREE.Mesh;
    Cylinder007_2: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    Cylinder008_1: THREE.Mesh;
    Cylinder008_2: THREE.Mesh;
    Power_switch: THREE.Mesh;
    Screen: THREE.Mesh;
    Volume_rocker: THREE.Mesh;
  };
  materials: {
    body: THREE.MeshStandardMaterial;
    logo: THREE.MeshStandardMaterial;
    flash: THREE.MeshStandardMaterial;
    ['inner lens']: THREE.MeshStandardMaterial;
    ['focal lens']: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
  };
};

export default function Phone() {
  const { nodes, materials } = useGLTF('/phone.glb');

  useGLTF.preload('/phone.glb');
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 6]} intensity={1} />
      <spotLight position={[1, 1, -20]} intensity={2} />
      <Suspense fallback={null}>
        <Model nodes={nodes} materials={materials} />
      </Suspense>
    </Canvas>
  );
}

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url, {});
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  return (
    <mesh name='Busta' scale={[0.96, 1.87, 1]} position={[0, 0, -0.081]}>
      <planeGeometry />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// : JSX.IntrinsicElements["group"]
function Model({ nodes, materials }: { nodes: any; materials: any }) {
  const phoneRef = useRef<Mesh>(null!);
  const [expanded, setExpanded] = useState(false);

  const { scale, rotation } = useSpring({
    scale: expanded ? 0.9 : 1,
    rotation: expanded ? [0, 0.5 / 1, 0] : [0, -0.1, 0],
  });

  return (
    <group rotation={[0.1, 2.9 / 1, 0]} dispose={null}>
      <Bounds fit clip observe margin={1.2}>
        <animated.mesh
          onClick={() => setExpanded(!expanded)}
          ref={phoneRef}
          rotation={rotation as any}
          scale={scale}
          material-color='black'
          name='Phone'
          castShadow
          receiveShadow
          geometry={nodes.Phone.geometry}
          material={materials.body}
          position={[0, 1.01, 0]}
        >
          {/* <mesh
            name="Cam_module"
            castShadow
            receiveShadow
            geometry={nodes.Cam_module.geometry}
            material={materials.logo}
            position={[-0.27, 0.71, 0.07]}
            scale={1.19}
          /> */}
          <mesh
            name='Circle'
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.logo}
            position={[0, 0.03, 0.07]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.15}
          />
          <mesh
            name='flash'
            castShadow
            receiveShadow
            geometry={nodes.flash.geometry}
            material={materials.flash}
            position={[-0.15, 0.85, 0.1]}
            scale={0.37}
          />
          <group name='lens' position={[-0.35, 0.79, 0.09]} scale={1.47}>
            <mesh
              name='Cylinder'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              material={materials.logo}
            />
            <mesh
              name='Cylinder_1'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_1.geometry}
              material={materials['inner lens']}
            />
            <mesh
              name='Cylinder_2'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_2.geometry}
              material={materials['focal lens']}
            />
          </group>
          <group name='lens001' position={[-0.35, 0.62, 0.09]} scale={1.47}>
            <mesh
              name='Cylinder007'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007.geometry}
              material={materials.logo}
            />
            <mesh
              name='Cylinder007_1'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_1.geometry}
              material={materials['inner lens']}
            />
            <mesh
              name='Cylinder007_2'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_2.geometry}
              material={materials['focal lens']}
            />
          </group>
          <group name='lens002' position={[-0.19, 0.71, 0.09]} scale={1.47}>
            <mesh
              name='Cylinder008'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008.geometry}
              material={materials.logo}
            />
            <mesh
              name='Cylinder008_1'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008_1.geometry}
              material={materials['inner lens']}
            />
            <mesh
              name='Cylinder008_2'
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008_2.geometry}
              material={materials['focal lens']}
            />
          </group>
          <mesh
            name='Power_switch'
            castShadow
            receiveShadow
            geometry={nodes.Power_switch.geometry}
            material={materials.body}
            position={[-0.53, 0.23, 0]}
            scale={[1, 1.99, 1]}
          />

          <VideoMaterial url={url} />

          <mesh
            name='Volume_rocker'
            castShadow
            receiveShadow
            geometry={nodes.Volume_rocker.geometry}
            material={materials.body}
            position={[0.53, 0.43, 0]}
            scale={[1, 1.3, 1]}
          />
        </animated.mesh>
      </Bounds>
    </group>
  );
}
