export interface KeyProps {
  id: string
  character: string
  x: number
  y: number
}

function Key({ character, x, y }: KeyProps) {
  return (
    <div
      key={character}
      style={{
        position: 'absolute',
        top: y,
        left: x,
        fontSize: '3em',
        color: '#000000',
      }}
    >
      {character}
    </div>
  )
}

export default Key
