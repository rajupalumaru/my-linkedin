import React from 'react';
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';

const Widget = () => {
    return (
        <>
            <div className='widget'>
                <div className='widget-top'>
                    <div className='widget-header'>
                        <h4>Linkedin News</h4>
                        <InfoIcon />

                    </div>
                    <div className='widget-body'>
                        <ul className='widget-options'>
                            <li>
                                <h4>Slaying Job Search Fees</h4>
                                <p>6d ago * 4,55 readers</p>
                            </li>
                            <li>
                            <li>
                                <h4>A Two Pizza rule for Eating</h4>
                                <p>1d ago * 6,22 readers</p>
                            </li>
                                <h4>How to handle workplace breakup</h4>
                                <p>3d ago * 4,55 readers</p>
                            </li>
                            <li>
                                <h4>Flexi Leave Is the New flexi</h4>
                                <p>4d ago * 3,55 readers</p>
                            </li>
                            <li>
                                <h4>Shorter hour boost the productivity</h4>
                                <p>1d ago * 4,55 readers</p>
                            </li>

                        </ul>

                    </div>

                </div>
                <div className='widget-bottom'>
                    <div className='widget-header'>
                        <h4>Today's Top courses</h4>
                        <InfoIcon />

                    </div>
                    <div className='widget-body'>
                        <ul className='widget-options'>
                            <li>
                                <h4>Leading with Heavy heat</h4>
                                <p>Kay Coly</p>
                            </li>
                            <li>
                            <li>
                                <h4>Building Resillience</h4>
                                <p>Tatianan Kolovu</p>
                            </li>
                                <h4>Critical Thinkig for better judgement </h4>
                                <p>3d ago * 4,55 readers</p>
                            </li>
                            <li>
                                <h4>Flexi Leave Is the New flexi</h4>
                                <p>4d ago * 3,55 readers</p>
                            </li>
                            <li>
                                <h4>Shorter hour boost the productivity</h4>
                                <p>1d ago * 4,55 readers</p>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Widget
