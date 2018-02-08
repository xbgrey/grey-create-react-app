import { connect } from 'react-redux';
import { Types, Status } from 'global-status';

const indexS2P = (state: Status) => {
    return {
        UserInfo: state.ui.UserInfo,
    };
};
const indexD2P = {
    fnSetUserInfo: Types.User.fnSetUserInfo
};

export default {
    connectIndex: Component => connect(indexS2P, indexD2P)(Component)
};
