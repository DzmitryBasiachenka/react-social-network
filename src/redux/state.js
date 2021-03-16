const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UDATE_NEW_MESSAGE_BODY = 'UDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 1 },
                { id: 2, message: 'Go', likesCount: 100 }
            ],
            newPostText: 'it-samurai.com'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Bye' },
                { id: 3, message: 'Goodbye' }
            ],
            dialogs: [
                { id: 1, name: 'Artem' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Alex' }
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State was changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 111
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = {
                id: 4,
                message: this._state.dialogsPage.newMessageBody
            };
            //let body = this._state.dialogsPage.newMessageBody; 
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push(body);
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UDATE_NEW_MESSAGE_BODY, body: text })

export default store;
window.store = store;
