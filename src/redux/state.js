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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State was changed")
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 111
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;
