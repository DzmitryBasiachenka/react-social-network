import React from 'react';
import stules from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: '', followed: false, fullName: 'Dzmitry Voron', status: 'I\'m sleeping', location: { city: 'Vitebsk', country: 'Belarus' } },
            { id: 2, photoUrl: '', followed: true, fullName: 'AKrasava', status: 'Do not disturb', location: { city: 'Moskov', country: 'Russia' } },
            { id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: false, fullName: 'Logka', status: ':-)', location: { city: 'Grodno', country: 'Belarus' } }
        ])
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={stules.userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}

export default Users;
