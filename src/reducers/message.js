import * as Type from './../constants/ActionType';
import * as messages from './../constants/Message';
var initial = messages.MSG_WECOME;

const message = (state=initial, action) => {
    switch (action.type) {
        case Type.CHANGE_MESSAGE : 
            return action.message;
        default: return state;
    }
}
export default message;