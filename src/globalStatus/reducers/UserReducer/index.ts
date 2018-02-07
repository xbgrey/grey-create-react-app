import { createReducer } from 'redux-act';
import { Types } from 'global-status';
import UserInfo from './UserInfo';

export default createReducer(
    {
        [Types.User.fnSetUserInfo]:(state, payload) => {
            return {
                ...state,
                userInfo: payload,
            }
        },
    },
    new UserInfo()
)
