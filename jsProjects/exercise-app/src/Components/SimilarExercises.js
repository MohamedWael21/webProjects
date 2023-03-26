import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({similarExercises, similarEquipment}) => {
  return (
    <Box
        sx={{
            mt:{lg:'100px', xs:'0'},
            p: '20px'
        }}
    >
        <Typography variant='h3' mb={2}>
            Exercises that target the same muscle group
        </Typography>
        <Stack 
            direction='row'
            sx={{
                position: 'relative'
            }}
            mb="30px"
        >
            {similarExercises.length ? <HorizontalScrollbar data={similarExercises}/> : <Loader />}

        </Stack>
        <Typography variant='h3' mb={2}>
            Exercises that target the same Equipment
        </Typography>
        <Stack 
            direction='row'
            sx={{
                position: 'relative'
            }}
        >
            {similarEquipment.length ? <HorizontalScrollbar data={similarEquipment}/> : <Loader />}

        </Stack>
    </Box>
  )
}

export default SimilarExercises