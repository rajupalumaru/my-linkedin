import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'

const HeaderOptions = ({ Icon, Title, avatar }) => {
    return (
        <div className='header-option'>
            {
                Icon && <Icon />
            }
            {
                avatar && <Avatar name={avatar} />
            }
            <span>{Title}</span>
        </div>
    )
}

export default HeaderOptions
