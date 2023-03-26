import { Box, Stack } from '@mui/system'
import { Typography, Button } from '@mui/material'
import React from 'react'
import bannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{ lg:'212px', xs:'70px'},
        ml:{ sm: '50px', xs:'30px'},
    }}>
       <Typography variant="body1" sx={{
            color: '#FF2625',
            mb: '20px',
            textTransform: 'capitalize',
            fontSize:{lg:'50px'}
        }} fontWeight={600}>
         fitness club
        </Typography>
        <Typography variant="h3" sx={{
            mb: '30px',
            fontSize: {lg: '80px'}
        }}>
         Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography variant="body2" sx={{
            mb: '20px',
            fontSize: {lg: '20px'}
        }}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained" sx={{
            backgroundColor: '#FF2625',
            fontSize: {lg: '30px'},
            '&:hover': {
                   backgroundColor: '#ee2524'           
            }
        }} href='#exercies'>Explore Exercises</Button>
        <Typography sx={{
            fontWeight: '600',
            color: '#FF2625',
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'},
            fontSize: '200px'
        }}>
            Exercise
        </Typography>
        <img src={bannerImage} className='hero-banner-img'/>
    </Box>

  )
}

export default HeroBanner