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

  if (game) {
    return (
      <>
        <button onClick={endGame}>End Game</button>
        {game}
      </>
    )
  }

  return (
    <button onClick={startGame}>Start Game</button>
  )
}

export default Keyfall
