import { createSelector } from 'reselect';

import { UsersState } from './reducer';

export const getUsers = (state: UsersState) => state.user;

// export const getTodosFilter = (state: UsersState) => state.todosFilter;

// export const getFilteredTodos = createSelector(getTodos, getTodosFilter, (todos, todosFilter) => {
//     switch (todosFilter) {
//         case 'completed':
//             return todos.filter(t => t.completed);
//         case 'active':
//             return todos.filter(t => !t.completed);

//         default:
//             return todos;
//     }
// });