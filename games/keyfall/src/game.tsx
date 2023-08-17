import { Canvas } from '@react-three/fiber'
import Key from './key.tsx'

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const numbers = '0123456789'.split('')
const all = [...lowercase, ...uppercase, ...numbers]

function Game() {
  return (
    <Canvas>
      <Key character={all[Math.floor(Math.random() * all.length)]} />
    </Canvas>
  )
}

export default Game
