import { createAction } from 'redux-act';

class User {
    public fnSetUserInfo:any = createAction("$$EL/USER/SETUSERINFO");
}

export default {
    User:new User(),
}
