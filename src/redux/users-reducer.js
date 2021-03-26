const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
       /*  { id: 1, photoUrl: '', followed: false, fullName: 'Dzmitry Voron', status: 'I\'m sleeping', location: { city: 'Vitebsk', country: 'Belarus' } },
        { id: 2, photoUrl: '', followed: true, fullName: 'AKrasava', status: 'Do not disturb', location: { city: 'Moskov', country: 'Russia' } },
        { id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: false, fullName: 'Logka', status: ':-)', location: { city: 'Grodno', country: 'Belarus' } } */
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: {
            return state;
        }
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;
