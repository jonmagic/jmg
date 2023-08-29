import { useCallback, useEffect, useRef, useState } from 'react'

interface KeyProps {
  character: string
  x: number
  y: number
}

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const numbers = '0123456789'.split('')
const all = [...lowercase, ...uppercase, ...numbers]

function Game() {
  const { current: [width, height] } = useRef([window.innerWidth, window.innerHeight])
  const [keys, setKeys] = useState<Array<KeyProps>>([])
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const { key } = event
    setKeys((keys) => keys.filter((k) => k.character !== key))
  }, [])

  // Update key positions
  useEffect(() => {
    const interval = setInterval(() => {
      // remove key if it's off the screen
      setKeys((keys) => keys.filter((k) => k.y < height))

      // add key if there are less than current max
      if (keys.length < 1) {
        const character = all[Math.floor(Math.random() * all.length)]
        const x = Math.floor(Math.random() * width)
        const y = 0
        setKeys((keys) => [...keys, { character, x, y }])
      }

      // update key positions
      setKeys((keys) => keys.map((k) => ({ ...k, y: k.y + 1 })))
    }, 100)

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
    <div style={{
      width,
      height,
      display: 'block',
      position: 'absolute',
      backgroundColor: 'purple',
    }}>
      {keys.map((key) => (
        <div
          key={key.character}
          style={{
            position: 'absolute',
            top: key.y,
            left: key.x,
            fontSize: '2em',
            color: 'white',
          }}
        >
          {key.character}
        </div>
      ))}
    </div>
  )
}

export default Game
