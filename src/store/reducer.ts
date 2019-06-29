import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import userReducer from '../features/user/reducer';

const rootReducer = combineReducers({
    router: routerReducer,
    users: userReducer
});

export default rootReducer;
