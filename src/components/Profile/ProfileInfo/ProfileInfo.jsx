import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.size}>
                <img src='https://static-cse.canva.com/blob/194906/Swirling-Stars-and-Space-Video-Zoom-Virtual-Background-1.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;