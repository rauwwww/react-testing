import { IUser, UserActionTypes, ADD_USER } from './types';

export function addUser(newUser: IUser): UserActionTypes {
    return {
        type: ADD_USER,
        payload: newUser,
    }
}

