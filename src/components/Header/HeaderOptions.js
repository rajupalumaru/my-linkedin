import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Header.css'
import firebase from 'firebase';

const HeaderOptions = ({ Icon, Title, avatar }) => {

    const user=useSelector(selectUser);

    return (
        <div className='header-option'>
            {
                Icon && <Icon />
            }
            {
                avatar && <Avatar name={avatar}  src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
            }
            <span>{Title}</span>
        </div>
    )
}

export default HeaderOptions
