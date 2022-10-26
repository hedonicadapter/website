import * as THREE from 'three';
import { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, useGLTF, useVideoTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useSpring, animated, easings } from '@react-spring/three';

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

export default function Phone({
  expanded,
  secondPhone = false,
  play,
  video,
}: {
  expanded: boolean;
  secondPhone?: boolean;
  play: boolean;
  video: string;
}) {
  const { nodes, materials } = useGLTF('/new.glb');

  useEffect(() => {
    console.log({ play });
  }, [play]);

  useGLTF.preload('/new.glb');
  return (
    <Canvas
      resize={{ scroll: false, offsetSize: true }}
      style={{
        zIndex: 100,
      }}
      dpr={[1, 2]}
      camera={{ fov: 5, position: [-0.4, 4, 100] }}
    >
      {/* <ambientLight intensity={0.5} /> */}
      {/* <directionalLight position={[3, 5, 6]} intensity={1} /> */}
      {/* <spotLight position={[1, 1, -20]} intensity={2} /> */}
      <Environment preset='apartment' />
      {/* studio or apartment or warehouse */}
      <Suspense fallback={null}>
        <Model
          nodes={nodes}
          materials={materials}
          expanded={expanded}
          secondPhone={secondPhone}
          play={play}
          video={video}
        />
      </Suspense>
    </Canvas>
  );
}

function Model({
  nodes,
  materials,
  expanded,
  secondPhone,
  play,
  video,
}: {
  nodes: any;
  materials: any;
  expanded: boolean;
  secondPhone: boolean;
  play: boolean;
  video: string;
}) {
  const { viewport } = useThree();

  const { scale, rotation, position } = useSpring({
    scale: secondPhone ? 0.075 : expanded ? 0.074 : 0.09,
    rotation: secondPhone
      ? [-0.52, -0.4, -0.12]
      : expanded
      ? [-0.52, 0.4, 0.12]
      : [-0.42, -0.4, -0.1],
    position: secondPhone
      ? [2.2, -3.5, 0]
      : expanded
      ? [-1.92, -4.21, 0]
      : [2.1, -4.1, 0],
    config: { duration: 500, easing: easings.easeInOutQuad },
  });

  return (
    <animated.group
      scale={viewport.width / 11}
      position={position as any}
      dispose={null}
    >
      <animated.group
        rotation={rotation as any}
        scale={scale as any}
        name='Sketchfab_model'
      >
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
              <VideoMaterial video={video} play={play} />
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
      </animated.group>
    </animated.group>
  );
}

function VideoMaterial({ video, play }: { video: string; play: boolean }) {
  const texture = useVideoTexture(video, { loop: true, preload: 'metadata' });

  useEffect(() => {
    play ? texture.source.data.play() : texture.source.data.pause();
  }, [play, texture.source.data]);

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
