import { useState } from 'react'
import Game from './game.tsx'

function Keyfall() {
  const [game, setGame] = useState<JSX.Element | null>(null)

  const endGame = () => {
    setGame(null)
  }

  const startGame = () => {
    setGame(<Game />)
  }

  return (
    <>
      <button
        onClick={!game ? startGame : endGame}
        style={{
          position: 'absolute',
          top: 5,
          left: 5,
          fontSize: '1em',
        }}
      >
        {!game ? "Start Game" : "End Game"}
      </button>
      {game}
    </>
  )
}

export default Keyfall
