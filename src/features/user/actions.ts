import cuid from 'cuid';
import { createStandardAction } from 'typesafe-actions';

import { IUser } from './types';

const ADD = 'user/CREATE';

export const add = createStandardAction(ADD).map(
    (payload: { name: string }) => ({
        payload: {
            ...payload,
            id: cuid(),
            completed: false,
        } as IUser,
    })
);
