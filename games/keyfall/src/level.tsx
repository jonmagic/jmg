import { useFrame } from '@react-three/fiber'
import { v4 as uiidv4 } from 'uuid'
import Keycap from './keycap'
import { KeyState } from './game'

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const numbers = '0123456789'.split('')
const all = [...lowercase, ...uppercase, ...numbers]

interface LevelProps {
  keys: Array<KeyState>
  setKeys: React.Dispatch<React.SetStateAction<Array<KeyState>>>
  windowSize: {
    innerWidth: number
    innerHeight: number
  }
}

function Level({ keys, setKeys, windowSize }: LevelProps) {
  useFrame(() => {
    // Add key when there are no keys
    if (keys.length < 1) {
      setKeys([
        ...keys,
        {
          character: all[Math.floor(Math.random() * all.length)],
          position: {
            x: windowSize.innerWidth / 2,
            y: 0,
          },
          speed: 10,
          color: '#000000',
          size: 1,
          uuid: uiidv4(),
        },
      ])
    }

    // Remove key when it is out of bounds
    keys.forEach((key) => {
      if (key.position.y > windowSize.innerHeight) {
        setKeys(keys.filter((k) => k.uuid !== key.uuid))
      }
    })
  })

  return (
    <group>
      {keys.map((key) => (
        <Keycap
          key={key.uuid}
          character={key.character}
          position={key.position}
          speed={key.speed}
          color={key.color}
          size={key.size}
          uuid={key.uuid}
        />
      ))}
    </group>
  )
}

export default Level
