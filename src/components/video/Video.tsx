// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {useRef, useState} from 'react';
import {Card, CardMedia, IconButton} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type Props = {
    src: string;
    srcPoster?: string;
    cardClassName?: string;
};
export const VideoComponent = ({src, srcPoster}: Props) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current && videoRef.current.play && videoRef.current.pause) {
            if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <Card sx={{position: 'relative'}} elevation={0} style={{width: '100%'}}>
            <CardMedia
                component="video"
                height="auto"
                alt="Sample video"
                controls={isPlaying}  // Show controls only when video is playing
                ref={videoRef}
                poster={srcPoster || "./1-min.jpg"}
                sx={{maxHeight: '800px', objectFit: 'cover', backgroundColor: '#E0E6DE', borderRadius: '10px'}}
            >
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </CardMedia>
            {!isPlaying && (
                <IconButton
                    aria-label="play"
                    onClick={handlePlay}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#E0E6DE',
                        backgroundColor: '#768471',
                        '&:hover': {
                            backgroundColor: '#768471',
                            opacity: 1
                        },
                    }}
                >
                    <PlayArrowIcon sx={{fontSize: 60}}/>
                </IconButton>
            )}
        </Card>
    );
}
