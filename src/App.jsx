import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import {Box,Text,Button} from "@chakra-ui/react"
import Puntaje from './components/Puntaje/Puntaje'

const posicionesGanadoras = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function App() {
  const [turn,setTurn] = useState("X")
  const [squares,setSquares] = useState(Array(9).fill(null))
  const [posicionGanadora,setPosicionesGanadora] = useState([])
  const [ganador,setGanador] = useState(null)
  const [score,setScore] = useState({
    X : 0,
    O : 0
  })
  
  const reset = () => {
    setTurn("X")
    setSquares(Array(9).fill(null));
    setPosicionesGanadora([]);
    setGanador(null)
  }

  const chequearGanador = newSquares => {
    for(let i = 0;i<posicionesGanadoras.length;i++){
      const [a,b,c] = posicionesGanadoras[i]
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){

        finalDelJuego(newSquares[a],posicionesGanadoras[i]);
        setGanador(turn === "X" ? "X" : "O")
        return
      }
    }
    if(!newSquares.includes(null)){
      setGanador("Un empate")
      finalDelJuego(null,Array.from(Array(10).keys()));
      return
    }
    setTurn(turn === "X" ? "O" : "X")
  }

  const handleClick = (square) => {
  let nuevosSquares = [...squares] // porque el state no se cambia de una, se le asigna un nuevo valor
  nuevosSquares.splice(square,1,turn)
  setSquares(nuevosSquares)
  chequearGanador(nuevosSquares)
  }

  const finalDelJuego = (result,posicionesGanadoras) => {
    setTurn(null)
    if(result !== null){
      setScore({
        ...score,
        [result] : score[result] + 1
      })
    }
    setPosicionesGanadora(posicionesGanadoras);
    setTimeout(() => {
      reset();
    }, 2000);
    
  }
  return ( 
    <Box 
    backgroundColor="mediumseagreen"
    h="100vh"
    w="100vw"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center "    >
      <Text fontSize="30px"
            color="whiteAlpha.700"
            fontWeight="bold">TA-TE-TI</Text>
      {ganador === null ? "" : <Box fontSize="20px">Ganó {ganador}</Box>}
      <Board posicionGanadora={posicionGanadora} turn={turn} squares={squares} handleClick={handleClick}/> 
      <Puntaje scoreO={score.O} scoreX={score.X}/>
      <Button margin="10px" onClick={() => reset()}>reset</Button>
    </Box>
  )
}

export default App


