import { Canvas } from '@react-three/fiber'
import React, {useState,Suspense} from 'react'
import PlantScene from './components/PlantScene'
import Loader from './components/Loader'

function App() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <Suspense fallback={<Loader />}>
          <PlantScene/>
      </Suspense>
    </Canvas>
  )
}

export default App