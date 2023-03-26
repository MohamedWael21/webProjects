import React from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
const ExercisesVideos = ({exerciseVideos, name}) => {
    if(!exerciseVideos.length){
        return <div>loading</div>
    }

  return (
    <Box
        sx={{
            mt: {lg: '200px', xs: '20px'}
        }}
        p='20px'
    >
        <Typography variant='h4' mb='33px'>
            watch <span style={{color: '#ff2625', textTransform:'capitalize'}}>{name}</span> Exercise Videos
        </Typography>
        <Stack
            justifyContent='flex-start'
            flexWrap='wrap'
            alignItems='center'
            sx={{
                flexDirection: {md: 'row'},

                gap:{md:'90px', xs:'0'}
            }}
        >
        {exerciseVideos.slice(0, 6).map((item, index) => (
            <a 
                key={index}
                className = "exercise-video"
                href= {`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='_blank'
            >
                <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                <Box>
                    <Typography variant='h5' color='#000'>
                        {item.video.title}
                    </Typography>
                    <Typography variant='h6' color='#000'>
                        {item.video.channelName}
                    </Typography>
                </Box>
            </a>
        ))}
        </Stack>
    </Box>
  )
}

export default ExercisesVideos