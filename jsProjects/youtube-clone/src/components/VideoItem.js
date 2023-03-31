import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <Grid item xs={12}>
        <Paper 
            sx={{
            display: 'flex',
            alignItems: 'center',
            direction: 'column',
        }}
            onClick={() => onVideoSelect(video)}
            style={{cursor: 'pointer'}}
        >
            <img src={video.snippet.thumbnails.medium.url} style={{marginRight: '20px', width:'100%'}} alt='thumbnail'/>
            <Typography variant='subtitle1' style={{padding: '12px'}}>
                <b>
                    {video.snippet.title}
                </b>
            </Typography>
        </Paper>
    </Grid>
  )
}

export default VideoItem