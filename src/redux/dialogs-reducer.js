const UDATE_NEW_MESSAGE_BODY = 'UDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = {
                id: 4,
                message: state.newMessageBody
            };
            state.newMessageBody = '';
            state.messages.push(body);
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UDATE_NEW_MESSAGE_BODY, body: text })

export default dialogsReducer;
