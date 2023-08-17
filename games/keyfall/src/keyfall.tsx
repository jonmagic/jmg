import { useState } from "react"
import Game from "./game.tsx"

function Keyfall() {
  const [currentGame, setCurrentGame] = useState<null | JSX.Element>(null)

  const startGame = () => {
    setCurrentGame(<Game />)
  }

  if (currentGame) {
    return currentGame
  }

  return <button onClick={startGame}>Start</button>
}

export default Keyfall
