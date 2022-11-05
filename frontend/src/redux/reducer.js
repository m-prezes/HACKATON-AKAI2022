import chatMessage from "../sample_data/chatMessages"

export const messageReducer = (state = chatMessage, action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                {
                    "owner": action.owner,
                    "message": action.message
                }
            ]
        default:
            return state;
    }
}