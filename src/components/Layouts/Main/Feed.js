import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Feed.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';
import db from '../../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

const Feed = () => {

    const user = useSelector(selectUser);

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    const submitPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: 'This is test purpose',
            message: input,
            PhotoUrl: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");

    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()

            })))
        })

    }, [])


    return (
        <div className='feed'>
            <div className='feed-input'>
                <div className='feed-form'>
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input type='text' placeholder='Start a Post' value={input} onChange={e => setInput(e.target.value)} />
                        <input type='submit' />
                    </form>
                </div>

                <div className='feed-options'>
                    <div className='option'>
                        <InsertPhotoIcon style={{ color: '#70b5f9' }} />
                        <span> Photo</span>
                    </div>
                    <div className='option'>
                        <YouTubeIcon style={{ color: '#7fc15e' }} />
                        <span> Video</span>
                    </div>
                    <div className='option'>
                        <TodayIcon style={{ color: '#e7a33e' }} />
                        <span> Event</span>
                    </div>
                    <div className='option'>
                        <AssignmentIcon style={{ color: '#fc9295' }} />
                        <span> Write Article</span>
                    </div>

                </div>
            </div>


            {
                posts.map(({ id, data: { name, description, message, PhotoUrl, timestamp } }) => {
                    return (<Post key={id} name={name} description={description} message={message} PhotoUrl={PhotoUrl} />
                    )
                })
            }


        </div>
    )
}

export default Feed
