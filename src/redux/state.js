import { renderEntireTree } from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 111
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;
