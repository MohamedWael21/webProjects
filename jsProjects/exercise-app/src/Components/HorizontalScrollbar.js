import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'

function LeftArrow() {
    const {scrollPrev} = useContext(VisibilityContext);
    return (
        <Typography 
            onClick={()=>{
                scrollPrev();
            }}
            className='left-arrow'
        >
            <img src={LeftArrowIcon} alt="left arrow"/>
        </Typography>
    )
  }
  
function RightArrow() {
    const {scrollNext} = useContext(VisibilityContext);
    return (
        <Typography 
            onClick={()=>{
                scrollNext();
            }}
            className='right-arrow'
        >
            <img src={RightArrowIcon} alt="right arrow"/>
        </Typography>
    )
}
  

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box 
            key={item.id || item}
            itemId = {item.id || item}
            title={item.id || item}
            m="0 40px"
            >
                {isBodyPart ? <BodyPart item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
            </Box>
           )
        )}
    </ScrollMenu>
    
  )
}

export default HorizontalScrollbar