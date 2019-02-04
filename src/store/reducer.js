import {combineReducers} from 'redux';

import app from './app/reducer';
import order from './order/reducer';

export default combineReducers({
    app,
    order
})