import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-profile'>
                <img src='https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg' alt='' />

                <div className='profile-details'>
                    <Avatar />
                    <h4>Raju Palumaru</h4>
                    <p>Web Developer</p>
                </div>
                <div className='profile-stats'>
                    <span>Who Viwed profile</span>
                    <span className='stat-number'>20</span>
                </div>
                <div className='profile-stats'>
                    <span>Connection<br /><b>Grow your Network</b></span>
                    <span className='stat-number'>150</span>
                </div>

            </div>
            <div className='sidebar-recent'>
                <p>Recent</p>
                <p className='hash'><span>#</span>Branding</p>
                <p className='hash'><span>#</span>Marketing</p>
                <p className='hash'><span>#</span>Web Development</p>
                <p className='hash'><span>#</span>programming</p>
                <p className='hash'><span>#</span>reactjs</p>
                <p className='hash'><span>#</span>reduxtoolkit</p>
            </div>

        </div>
    )
}

export default Sidebar
