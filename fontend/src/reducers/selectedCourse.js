import { handleActions } from 'redux-actions';
import { SELECT_COURSE } from '../constants/actionTypes';

export default handleActions({
    [SELECT_COURSE]: (state, action) => state
}, 1);