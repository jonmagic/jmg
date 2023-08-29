import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import Level from './level.tsx'

export interface KeyState {
  character: string
  position: {
    x: number
    y: number
  }
  speed: number
  color: string
  size: number
  uuid: string
}

function Game() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  })
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        innerWidth: window.innerWidth * 2,
        innerHeight: window.innerHeight * 2,
      });
    };

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  const [keys, setKeys] = useState<Array<KeyState>>([])
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const { key } = event
      setKeys((keys) => keys.filter((k) => k.character !== key))
    })

    return () => {
      document.removeEventListener('keydown', () => {})
    }
  })

  return (
    <Canvas style={{ width: windowSize.innerWidth, height: windowSize.innerHeight }}>
      <Level keys={keys} setKeys={setKeys} windowSize={windowSize} />
    </Canvas>
  )
}

export default Game
