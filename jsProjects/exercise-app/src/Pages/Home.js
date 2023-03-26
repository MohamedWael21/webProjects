import React, {useState} from 'react'
import HeroBanner from '../Components/HeroBanner'
import { Box } from '@mui/system'
import SearchEercises from '../Components/SearchEercises'
import Exercises from '../Components/Exercises'
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  
  return (
    <Box>
      <HeroBanner />
      <SearchEercises 
      setBodyPart={setBodyPart} 
      setExercises={setExercises} 
      bodyPart={bodyPart}/>
      <Exercises 
      bodyPart={bodyPart} 
      setExercises={setExercises} 
      exercises={exercises}/>

    </Box>    
  )
}

export default Home