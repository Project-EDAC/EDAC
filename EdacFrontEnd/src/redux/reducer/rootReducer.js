import { combineReducers } from 'redux';
import adminReducer from "./adminReducer";
import facultyReducer from './facultyReducer'
import studentReducer from './studentReducer'


debugger
export default combineReducers({
    admin: adminReducer,
    faculty: facultyReducer,
    student: studentReducer
});