import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'

const VideoDetail = ({video}) => {
  if(!video){
    return <h1>Loading.....</h1>
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Box>
      <Paper elevation={6} style={{height: '300px'}}>
        <iframe src={videoUrl}  height='100%' width='100%' title="video player" style={{border: '0px'}}></iframe>
      </Paper>
      <Paper elevation={6}  style={{padding: '15px'}}>
        <Typography variant='h4'>
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle1'>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle2'>
          {video.snippet.description}
        </Typography> 
      </Paper>
    </Box>
  )
}

export default VideoDetail