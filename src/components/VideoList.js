import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    return (
        <Grid container direction="column" justify="flex-start" alignItems="flex-end">
            {listOfVideos}
        </Grid>

    )
}

export default VideoList;