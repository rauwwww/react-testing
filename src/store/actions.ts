import { routerActions } from 'react-router-redux';
import * as userActions from '../features/user/actions';

export default {
    router: routerActions,
    todos: userActions
};
