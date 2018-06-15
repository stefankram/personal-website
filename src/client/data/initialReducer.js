import { combineReducers } from 'redux';
import moment from 'moment';

export default combineReducers({
  dateTime: (state = {}) => ({ ...state, current: moment().format() }),
});
