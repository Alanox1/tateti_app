import { Box } from "@chakra-ui/react"


const Puntaje = ({scoreX,scoreO}) => (
   <Box
    width="320px"
    display="grid"
    gridAutoFlow="column"
    marginTop="5px"

   >
       <Box
         color="white"
         textAlign="center"
         fontSize="2em"
         padding="5px"
         fontWeight="bold"
         backgroundColor="red.700"
       >X Ganó: {scoreX}</Box>
       <Box
       color="white"
       textAlign="center"
       fontSize="2em"
       padding="5px"
       fontWeight="bold"
       backgroundColor="blue.700"
       
       >O Ganó: {scoreO}</Box>
   </Box>
)

export default Puntaje;