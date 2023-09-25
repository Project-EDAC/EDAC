import { LOGIN_FACULTY,LOGOUT_FACULTY } from "../actionTypes";
import { log } from "../../utils/utils";


const initialState = {
    isAuthenticated: false,
   
}

debugger
const facultyReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_FACULTY :
            log("in faculty reducer")
            return {
                isAuthenticated: true
            }
        
            case LOGOUT_FACULTY:
                return{
                    isAuthenticated: false
                }
            default:
                return state
    }
}


export default facultyReducer