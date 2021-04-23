import React from 'react';
import axios from 'axios';
import stules from './users.module.css';
import ava from '../../assets/images/ava.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => { props.onClickPageChanged(p) }} className={props.currentPage === p && stules.selectedPage}>{p}&nbsp;</span>
                })}
            </div>
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : ava} className={stules.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': ''
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                });
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': ''
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id);
                                    }
                                });
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}

export default Users;
