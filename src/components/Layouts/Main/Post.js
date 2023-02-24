import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name,description,message,PhotoUrl}) => {
    return (
        <div className='posts'>
            <div className='post-header'>
                <div className='post-headerLeft'>
                    <Avatar src={PhotoUrl}/>
                    <div className='post-profile-detail'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <MoreVertIcon />
            </div>
            <div className='post-body'>
                <p>
                    {message}
                </p>
            </div>
            <div className='post-footer'>
                <div className='post-footer-options'>
                        <ThumbUpIcon/>
                        <span>Like</span>
                </div>
                <div className='post-footer-options'>
                        <CommentIcon/>
                        <span>comment</span>
                </div>
                <div className='post-footer-options'>
                        <ShareIcon/>
                        <span>share</span>
                </div>
                <div className='post-footer-options'>
                        <SendIcon/>
                        <span>send</span>
                </div> 

            </div>
        </div>
    )
}

export default Post
