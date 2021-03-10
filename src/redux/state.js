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

export default state;
