import { Box } from "@chakra-ui/react"
import classNames from "classnames"
const Square = ({value,onClick,turn}) => {

    const handleClick = () => {
      (turn !== null &&  value === null) && onClick()
    }
   
    let squareClass = classNames({
        square:true,
        [`square-${value}`] : value !== null
    })

    return(
        <Box className={squareClass}
         height="100px"
         w="100px"
         
         margin="10px"
         borderRadius="0"
         clipPath="polygon(36% 0, 0 0; 0 29% , 0 57%, 0 100%,30% 100%,73% 100%, 100% 100%, 100% 59%,100% 31%,100% 0,74% 0)"
         onClick={() => handleClick()}
        ></Box>
    )
}

export default Square