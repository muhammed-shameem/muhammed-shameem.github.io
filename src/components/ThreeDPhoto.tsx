import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

const IMAGES = [
  '/profile.jpeg',
  '/profile2.jpeg',
  '/profile3.jpeg',
  '/profile4.jpeg',
];

function Carousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const groupRef = useRef<THREE.Group>(null!);
  
  // Load all textures
  const textures = useLoader(THREE.TextureLoader, IMAGES);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    const { x, y } = state.mouse;
    // Base rotation for the whole group based on mouse
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (activeIdx * -Math.PI * 2 / IMAGES.length) + (x * 0.2), 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.05);
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => {
        const angle = (i / IMAGES.length) * Math.PI * 2;
        const radius = 3.5;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, 0]}>
            <planeGeometry args={[3, 4]} />
            <meshStandardMaterial 
              map={texture} 
              transparent
              opacity={activeIdx === i ? 1 : 0.3}
              side={THREE.DoubleSide}
            />
            {/* Border glow */}
            <mesh position={[0, 0, -0.01]}>
              <planeGeometry args={[3.1, 4.1]} />
              <meshBasicMaterial 
                color={activeIdx === i ? "#00f2ff" : "#7000ff"} 
                transparent 
                opacity={activeIdx === i ? 0.4 : 0.1} 
              />
            </mesh>
          </mesh>
        );
      })}
    </group>
  );
}

export default function ThreeDPhoto() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00f2ff" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#7000ff" />
        <Carousel />
      </Canvas>
    </div>
  );
}

