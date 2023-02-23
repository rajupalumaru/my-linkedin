import { Avatar } from '@mui/material';
import React from 'react';
import './Feed.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed-input'>
                <div className='feed-form'>
                <Avatar src='https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-1172207.jpg&fm=jpg' />
                <form>
                    <input type='text' placeholder='Start a Post' />
                    <input type='submit' />
                </form>
                </div>

                <div className='feed-options'>
                    <div className='option'>
                        <InsertPhotoIcon style={{color:'#70b5f9'}} />
                        <span> Photo</span>
                    </div>
                    <div className='option'>
                        <YouTubeIcon style={{color:'#7fc15e'}} />
                        <span> Video</span>
                    </div>
                    <div className='option'>
                        <TodayIcon style={{color:'#e7a33e'}}/>
                        <span> Event</span>
                    </div>
                    <div className='option'>
                        <AssignmentIcon style={{color:'#fc9295'}}/>
                        <span> Write Article</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Feed
