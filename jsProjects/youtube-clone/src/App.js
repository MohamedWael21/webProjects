import { Grid } from '@material-ui/core'
import React, { useState } from 'react'

import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', 
        {params: {
            part: 'snippet',
            maxResult: 5,
            key: 'AIzaSyA24HiO3TcYpmZSAKNjEMqwi_Ri_k0Y5h0',
            q: searchTerm
        }});
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }
    const handleSelect = (video) =>{
        setSelectedVideo(video);
    }
  return (  
    <Grid container spacing={3} justifyContent='center'>
        <Grid item xs={11}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SearchBar onFormSubmit={handleSubmit} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <VideoDetail video={selectedVideo}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <VideoList videos={videos} onVideoSelect={handleSelect}/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default App