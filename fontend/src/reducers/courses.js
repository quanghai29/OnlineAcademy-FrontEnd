import { handleActions } from 'redux-actions';
import { GET_COURSES } from '../constants/actionTypes';

export default handleActions({
    [GET_COURSES]: (state, action) => state
}, {})