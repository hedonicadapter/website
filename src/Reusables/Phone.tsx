import * as THREE from 'three';
import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Bounds,
  Environment,
  OrbitControls,
  useGLTF,
  useVideoTexture,
} from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useSpring, animated, easings } from '@react-spring/three';

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

export default function Phone({ expanded }: { expanded: Boolean }) {
  // const { nodes, materials } = useGLTF('/phone.glb');
  const { nodes, materials } = useGLTF('/new.glb');

  // useGLTF.preload('/phone.glb');
  useGLTF.preload('/new.glb');
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 5, position: [-0.4, 4, 100] }}
      resize={{ scroll: false }}
    >
      {/* <ambientLight intensity={0.5} /> */}
      {/* <directionalLight position={[3, 5, 6]} intensity={1} /> */}
      {/* <spotLight position={[1, 1, -20]} intensity={2} /> */}
      <OrbitControls makeDefault />
      <Environment preset='lobby' />
      <Suspense fallback={null}>
        {/* <Model nodes={nodes} materials={materials} expanded={expanded} /> */}
        <New nodes={nodes} materials={materials} />
      </Suspense>
    </Canvas>
  );
}

function New({ nodes, materials }: { nodes: any; materials: any }) {
  return (
    <group
      position={[0, -3, 0]}
      scale={0.08}
      // position={[0, -0.15, 0]}
      rotation={[-0.52, 0.4, 0.12]}
      // scale={0.004}
      dispose={null}
    >
      <Bounds margin={1.85}>
        <group name='Sketchfab_model' position={[0, -2.59, 2.42]}>
          <group name='IP12PROfbx' rotation={[Math.PI / 2, 0, 0]}>
            <group
              name='iPhone__12_Pro'
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                name='Camera1_PacificBlue_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera1_PacificBlue_0.geometry}
                material={materials.PacificBlue}
              />
              <mesh
                name='Camera1_GrayGlossy_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera1_GrayGlossy_0.geometry}
                material={materials.GrayGlossy}
              />
              <mesh
                name='Camera1_FrontCamera_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera1_FrontCamera_0.geometry}
                material={materials.FrontCamera}
              />
              <mesh
                name='Camera1_Blackmatte_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera1_Blackmatte_0.geometry}
                material={materials.Blackmatte}
              />
              <mesh
                name='Camera1_Glass_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera1_Glass_0.geometry}
                material={materials.Glass}
              />
              <mesh
                name='Camera1_Cameralens_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera1_Cameralens_0.geometry}
                material={materials.Cameralens}
              />
              <mesh
                name='Flash_Flash2_0'
                castShadow
                receiveShadow
                geometry={nodes.Flash_Flash2_0.geometry}
                material={materials.Flash2}
              />
              <mesh
                name='Flash_Flash_0'
                castShadow
                receiveShadow
                geometry={nodes.Flash_Flash_0.geometry}
                material={materials.Flash}
              />
              <mesh
                name='LiDar_LiDar__0'
                castShadow
                receiveShadow
                geometry={nodes.LiDar_LiDar__0.geometry}
                material={materials.LiDar}
              />
              <mesh
                name='FrontCamera_FrontCamera_0'
                castShadow
                receiveShadow
                geometry={nodes.FrontCamera_FrontCamera_0.geometry}
                material={materials.FrontCamera}
              />
              <mesh
                name='FrontCamera_Glass_0'
                castShadow
                receiveShadow
                geometry={nodes.FrontCamera_Glass_0.geometry}
                material={materials.Glass}
              />
              <mesh
                name='FrontCamera_Cameralens_0'
                castShadow
                receiveShadow
                geometry={nodes.FrontCamera_Cameralens_0.geometry}
                material={materials.Cameralens}
              />
              <mesh
                name='FrontMic_GrayGlossy2_0'
                castShadow
                receiveShadow
                geometry={nodes.FrontMic_GrayGlossy2_0.geometry}
                material={materials.GrayGlossy2}
              />
              <mesh
                name='FrontMic_MicrophoneSpeaker_0'
                castShadow
                receiveShadow
                geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry}
                material={materials.MicrophoneSpeaker}
              />
              <mesh
                name='FrontCamera001_bezel001_0'
                castShadow
                receiveShadow
                geometry={nodes.FrontCamera001_bezel001_0.geometry}
                material={materials['bezel.001']}
              />
              <mesh
                name='Bezel_bezel_0'
                castShadow
                receiveShadow
                geometry={nodes.Bezel_bezel_0.geometry}
                material={materials.bezel}
              />
              <mesh
                name='Camera3_PacificBlue_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera3_PacificBlue_0.geometry}
                material={materials.PacificBlue}
              />
              <mesh
                name='Camera3_GrayGlossy_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera3_GrayGlossy_0.geometry}
                material={materials.GrayGlossy}
              />
              <mesh
                name='Camera3_FrontCamera_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera3_FrontCamera_0.geometry}
                material={materials.FrontCamera}
              />
              <mesh
                name='Camera3_Blackmatte_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera3_Blackmatte_0.geometry}
                material={materials.Blackmatte}
              />
              <mesh
                name='Camera3_Glass_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera3_Glass_0.geometry}
                material={materials.Glass}
              />
              <mesh
                name='Camera3_Cameralens_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera3_Cameralens_0.geometry}
                material={materials.Cameralens}
              />
              <mesh
                name='Camera2_PacificBlue_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera2_PacificBlue_0.geometry}
                material={materials.PacificBlue}
              />
              <mesh
                name='Camera2_GrayGlossy_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera2_GrayGlossy_0.geometry}
                material={materials.GrayGlossy}
              />
              <mesh
                name='Camera2_FrontCamera_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera2_FrontCamera_0.geometry}
                material={materials.FrontCamera}
              />
              <mesh
                name='Camera2_Blackmatte_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera2_Blackmatte_0.geometry}
                material={materials.Blackmatte}
              />
              <mesh
                name='Camera2_Glass_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera2_Glass_0.geometry}
                material={materials.Glass}
              />
              <mesh
                name='Camera2_Cameralens_0'
                castShadow
                receiveShadow
                geometry={nodes.Camera2_Cameralens_0.geometry}
                material={materials.Cameralens}
              />
              <mesh
                name='Screen_Wallpaper_0'
                castShadow
                receiveShadow
                geometry={nodes.Screen_Wallpaper_0.geometry}
                material-color={0x000000}
                // material={materials.Wallpaper}
              >
                <VideoMaterial url={url} />
              </mesh>
              <mesh
                name='Apple_Logo_Logo_0'
                castShadow
                receiveShadow
                geometry={nodes.Apple_Logo_Logo_0.geometry}
                material={materials.Logo}
              />
              <mesh
                name='CameraModule001_Glass_0'
                castShadow
                receiveShadow
                geometry={nodes.CameraModule001_Glass_0.geometry}
                material={materials.Glass}
              />
              <mesh
                name='CameraModule002_MicrophoneSpeaker_0'
                castShadow
                receiveShadow
                geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry}
                material={materials.MicrophoneSpeaker}
              />
              <mesh
                name='iPhone12_Pro_Body_0'
                castShadow
                receiveShadow
                geometry={nodes.iPhone12_Pro_Body_0.geometry}
                material={materials.Body}
              />
              <mesh
                name='VolumeButton_BodyFrame_0'
                castShadow
                receiveShadow
                geometry={nodes.VolumeButton_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                name='PowerButton_BodyFrame_0'
                castShadow
                receiveShadow
                geometry={nodes.PowerButton_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                name='Port_Blackmatte_0'
                castShadow
                receiveShadow
                geometry={nodes.Port_Blackmatte_0.geometry}
                material={materials.Blackmatte}
              />
              <mesh
                name='Port_BodyFrame_0'
                castShadow
                receiveShadow
                geometry={nodes.Port_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                name='SimTray_Blackmatte_0'
                castShadow
                receiveShadow
                geometry={nodes.SimTray_Blackmatte_0.geometry}
                material={materials.Blackmatte}
              />
              <mesh
                name='SimTray_BodyFrame_0'
                castShadow
                receiveShadow
                geometry={nodes.SimTray_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                name='MuteButton_BodyFrame_0'
                castShadow
                receiveShadow
                geometry={nodes.MuteButton_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                name='iPhone__12_Pro_BodyFrame_0'
                castShadow
                receiveShadow
                geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                name='iPhone__12_Pro_GrayGlossy2_0'
                castShadow
                receiveShadow
                geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry}
                material={materials.GrayGlossy2}
              />
              <mesh
                name='iPhone__12_Pro_Antenna_0'
                castShadow
                receiveShadow
                geometry={nodes.iPhone__12_Pro_Antenna_0.geometry}
                material={materials.Antenna}
              />
              <mesh
                name='iPhone__12_Pro_MicrophoneSpeaker_0'
                castShadow
                receiveShadow
                geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry}
                material={materials.MicrophoneSpeaker}
              />
            </group>
          </group>
        </group>
      </Bounds>
    </group>
  );
}

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url, {});
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.repeat.x = -1;
  return (
    <mesh
      name='Busta'
      scale={[0.448, 0.95, 0.44]}
      position={[0.008, 0.493, 0.0243]}
    >
      <planeGeometry />
      <meshPhysicalMaterial
        transmission={0.1}
        roughness={0}
        metalness={0.2}
        ior={2.3}
        map={texture}
        alphaTest={0.5}
      />
    </mesh>
  );
}

// : JSX.IntrinsicElements["group"]
function Model({
  nodes,
  materials,
  expanded,
}: {
  nodes: any;
  materials: any;
  expanded: Boolean;
}) {
  const phoneRef = useRef<Mesh>(null!);

  const { scale, rotation, position } = useSpring({
    scale: expanded ? 1 : 1.1,
    rotation: expanded ? [0.15, 0.8, -0.3] : [0, 0, 0],
    position: expanded ? [1.6, -0.2, 0] : [0, 0, 0],
    config: { duration: 500, easing: easings.easeInOutQuad },
  });

  return (
    <group
      position={[1.7, 0, 0]}
      rotation={[-0.11, 2.8, 0.07]}
      scale={[2.8, 3.15, 2.8]}
      dispose={null}
    >
      <Bounds margin={0.85}>
        <animated.mesh
          name='Phone'
          rotation={rotation as any}
          scale={scale as any}
          position={position as any}
          material-color='#211A1D'
          ref={phoneRef}
          castShadow
          receiveShadow
          geometry={nodes.Phone.geometry}
          material={materials.body}
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
            scale={[1, 1.4, 1]}
          />
        </animated.mesh>
      </Bounds>
    </group>
  );
}
