import { Pagination, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, {useEffect, useState} from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({bodyPart, setExercises, exercises}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const EXERCISESPERPAGE = 9;
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top:1000, behavior:'smooth'})
  }
  const indexOfLastExercises = currentPage * EXERCISESPERPAGE;
  const indexOfFirstExercises = indexOfLastExercises - EXERCISESPERPAGE;
  const currentExercises = exercises.slice(indexOfFirstExercises, indexOfLastExercises);

  useEffect(() =>{
    const fetchExercisesData = async () =>{
      let exercisesData = [];
      if(bodyPart == 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  },[bodyPart])

  return (
    <Box
      id="exercises"
      sx={{
        mt:{ lg: '110px'}
      }}
      mt='50px'
      p='20px'
    >
      <Typography 
      variant='h3'
      mb='46px'>
        Show Results
      </Typography>
      <Stack 
        direction='row'
        sx={{
          gap: { lg: '120px', xs: '50px'},
        }}
        flexWrap ='wrap'
        justifyContent='center'
        >
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
      </Stack>
      <Stack
        mt='100px' 
        alignItems='center'
      >
        {exercises.length > EXERCISESPERPAGE && (
          <Pagination 
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length/EXERCISESPERPAGE)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises