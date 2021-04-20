import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={classes.size}>
                <img src='https://static-cse.canva.com/blob/194906/Swirling-Stars-and-Space-Video-Zoom-Virtual-Background-1.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;