import {Box} from "@chakra-ui/react"

import Square from "../Square/Square"
const Board = ({squares,handleClick,turn,posicionGanadora}) => {

  const createSquares = values => (
    values.map(value => 
       <Square 
           turn={turn}
           onClick={() => handleClick(value)}
           key={`square_${value}`}
           value={squares[value]}/> 
    )
  );
  return(
    <Box className="board"
     display="flex"
     flexDirection="column"
    >
        <Box className="row"
         display="flex"
        >
          {createSquares([0,1,2])}
        </Box>
        <Box className="row"
        display="flex"
        >
          {createSquares([3,4,5])}
        </Box>
        <Box className="row"
        display="flex"
        >
          {createSquares([6,7,8])}
        </Box>
    </Box>
    
  )
}

export default Board;