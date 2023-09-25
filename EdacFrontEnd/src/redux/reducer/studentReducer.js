import { LOGIN_STUDENT,LOGOUT_STUDENT } from "../actionTypes";
import { log } from "../../utils/utils";


const initialState = {
    isAuthenticated: false,
   
}

debugger
const studentReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_STUDENT :
            log("in student reducer")
            return {
                isAuthenticated: true
            }
        
            case LOGOUT_STUDENT:
                return{
                    isAuthenticated: false
                }
            default:
                return state
    }
}


export default studentReducer