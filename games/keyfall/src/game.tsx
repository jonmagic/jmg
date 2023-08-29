import { useCallback, useEffect, useRef, useState } from 'react'
import Key, { KeyProps } from './key.tsx'

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const numbers = '0123456789'.split('')
const all = [...lowercase, ...uppercase, ...numbers]

const randomString = (length: number) => {
  let result = ''
  const charactersLength = all.length
  for (let i = 0; i < length; i++) {
    result += all.join().charAt(Math.floor(Math.random()*charactersLength))
  }
  return result
}

function Game() {
  const windowSize = useRef({ width: window.innerWidth, height: window.innerHeight })
  const startTime = useRef(Date.now())
  const [keys, setKeys] = useState<Array<KeyProps>>([])
  const [level, setLevel] = useState<number>(1)
  const [hits, setHits] = useState<number>(0)
  const [misses, setMisses] = useState<number>(0)

  const removeKey = useCallback((id: string) => {
    setKeys((keys) => keys.filter((k) => k.id !== id))
  }, [])

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const { key, shiftKey } = event

    if (shiftKey && key === 'Shift') return

    const keyIndex = keys.findIndex((k) => k.character === key)
    const k = keys[keyIndex]
    if (k) {
      removeKey(k.id)
      setHits((hits) => hits + 1)
    } else {
      setMisses((misses) => misses + 1)
    }
  }, [keys, removeKey])

  // Update key positions
  useEffect(() => {
    const interval = setInterval(() => {
      // increase level every 30 seconds
      if (Date.now() - startTime.current > 30000) {
        setLevel((level) => level + 1)
        startTime.current = Date.now()
      }

      // remove key if it's off the screen
      keys.forEach((k) => {
        if (k.y > windowSize.current.height) {
          removeKey(k.id)
          setMisses((misses) => misses + 1)
        }
      })

      // add key if there are less than current max
      if (keys.length < level) {
        const character = all[Math.floor(Math.random() * all.length)]
        const x = Math.floor(Math.random() * (windowSize.current.width - 100)) + 25
        const y = -20
        const id = randomString(6)
        setKeys((keys) => [...keys, { character, x, y, id }])
      }

      // update key positions, increase speed with level
      setKeys((keys) => keys.map((k) => ({ ...k, y: k.y + (2**(level/2))/10 })))
    }, 10)

    return () => clearInterval(interval)
  })

  // Handle keyboard input
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <>
      <ul
        style={{
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: 5,
          right: 5,
          fontSize: '1em',
        }}>
        <li>Level: {level}</li>
        <li>Hits: {hits}</li>
        <li>Misses: {misses}</li>
      </ul>
      {keys.map((key) => (
        <Key key={key.id} id={key.id} character={key.character} x={key.x} y={key.y} />
      ))}
    </>
  )
}

export default Game
