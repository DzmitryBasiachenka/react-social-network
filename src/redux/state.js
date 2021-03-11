import { renderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likesCount: 1 },
            { id: 2, message: 'Go', likesCount: 100 }
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 111
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;
