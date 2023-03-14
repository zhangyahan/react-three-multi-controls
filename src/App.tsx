import { CameraControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const { MathUtils } = THREE

function Controls() {
  return (
    <>
      <CameraControls verticalDragToForward={true} />
    </>
  )
}

function Scene() {
  return (
    <group>
      <mesh rotation={[MathUtils.degToRad(-90), 0, 0]}>
        <planeGeometry args={[10000, 10000]} />
        <meshStandardMaterial color={0x333333} />
      </mesh>
    </group>
  )
}

function App() {
  return (
    <Canvas camera={{ far: 10000, position: [10, 10, 10] }}>
      <Environment preset="sunset" background />
      <fog args={[0xDDDDDD, 1, 100]} />

      <Scene />

      <Controls />
    </Canvas>
  )
}

export default App

