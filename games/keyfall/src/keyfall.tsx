import { useState } from 'react'
import Game from './game.tsx'

function Keyfall() {
  const [game, setGame] = useState<JSX.Element | null>(null)

  const endGame = () => {
    setGame(null)
  }

  const startGame = () => {
    setGame(<Game endGame={endGame} />)
  }

  if (game) {
    return game
  }

  return (
    <button onClick={startGame}>Start Game</button>
  )
}

export default Keyfall
