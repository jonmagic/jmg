interface GameProps {
  endGame: () => void
}

function Game({ endGame }: GameProps) {
  return (
    <div>
      <button onClick={endGame}>End Game</button>
    </div>
  )
}

export default Game
