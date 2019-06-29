export type IUser = {
    id: string;
    name: string;
};

export const ADD_USER = 'ADD_USER'

interface IAddUserAction {
    type: typeof ADD_USER
    payload: IUser
}

export type UserActionTypes = IAddUserAction;
