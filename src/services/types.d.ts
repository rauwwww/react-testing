declare module 'MyTypes' {
    import { StateType, ActionType } from 'typesafe-actions';

    export type Store = StateType<typeof import('..store/index').default>;
    export type RootAction = ActionType<typeof import('..store/actions').default>;
    export type RootState = StateType<typeof import('..store/reducer').default>;
    export type Services = typeof import('./index').default;
}

// declare module 'typesafe-actions' {
//     interface Types {
//         RootAction: ActionType<typeof import('..store/actions').default>;
//     }
// }
