import React from 'react';
import './Header.css';
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Header() {
    const user=useSelector(selectUser);
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='header-logo'>
                    <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt='' />
                </div>
                <div className='header-search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>

            </div>
            <div className='header-right'>
                <HeaderOptions Icon={HomeIcon} Title="Home" />
                <HeaderOptions Icon={PeopleIcon} Title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} Title="Jobs" />
                <HeaderOptions Icon={MessageIcon} Title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} Title="Notifications" />
                <HeaderOptions avatar={Avatar} Title={user.displayName} />
            </div>
        </div>
    )
}

export default Header
