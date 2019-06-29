import { Action } from 'redux';

export interface IUser {
    name: string;
    age: number;
}

export interface ILoadingState {
    users: boolean;
}

export interface IApplicationState {
    loading: ILoadingState;
    users: IUser[];
}

export interface ILoadUsersRequest extends Action {
    type: 'loadUsersRequest';
}

export interface ILoadUsersSuccess extends Action {
    type: 'loadUsersSuccess';
    users: IUser[];
}

export interface ILoadUsersError extends Action {
    type: 'loadUsersError';
}

export type IApplicationAction =
    | ILoadUsersRequest
    | ILoadUsersSuccess
    | ILoadUsersError;