const connect = require('react-redux').connect;

const indexS2P = () => (
    {
    }
);

const indexD2P = {
};

export default {
    connectIndex: (Component: any) => connect(indexS2P, indexD2P)(Component)
};
