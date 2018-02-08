import { createAction } from 'redux-act';

class User {
    public fnSetUserInfo: string = createAction('$$EL/USER/SETUSERINFO') as any;
}

export default {
    User: new User(),
};