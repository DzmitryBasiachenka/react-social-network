const UDATE_NEW_MESSAGE_BODY = 'UDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
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
