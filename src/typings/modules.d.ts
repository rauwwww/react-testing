// typings/modules.d.ts
import { StateType, ActionType } from 'typesafe-actions';

declare module 'MyTypes' {
    export type Store = StateType<typeof import('./index').default>;
    export type RootAction = ActionType<typeof import('./actions').default>;
    export type RootState = StateType<typeof import('./reducer').default>;
    export type Services = typeof import('./index').default;
}

declare module 'react-test-renderer';
