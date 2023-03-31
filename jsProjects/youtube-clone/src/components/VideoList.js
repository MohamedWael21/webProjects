import { Grid } from '@material-ui/core'
import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {

  return (
    <Grid container spacing={6}>
      {videos && videos.map((video, index) => (
        <VideoItem key={index} video={video} onVideoSelect={onVideoSelect}/>
      ))}
    </Grid>
  )
}

export default VideoList