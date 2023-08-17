import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import Key from './key.tsx'

// const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
// const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
// const numbers = '0123456789'.split('')
// const all = [...lowercase, ...uppercase, ...numbers]

function Game() {
  const [character, setCharacter] = useState<null | string>(null)

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const { key } = event
      setCharacter(key)
    })

    return () => {
      document.removeEventListener('keydown', () => {})
    }
  })

  return (
    <Canvas>
      {character && <Key character={character} />}
    </Canvas>
  )
}

export default Game
