import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { IUser } from './types';
import * as user from './actions';

export type UsersState = {
    readonly user: IUser[];

};

export type UsersAction = ActionType<typeof user>;

export default combineReducers<UsersState, UsersAction>({
    user: (state = [], action) => {
        switch (action.type) {
            case getType(user.add):
                return [...state, action.payload];
            default:
                return state;
        }
    },
});