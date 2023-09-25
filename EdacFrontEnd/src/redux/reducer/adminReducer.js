import { LOGIN_ADMIN,LOGOUT_ADMIN } from "../actionTypes";
import { log } from "../../utils/utils";


const initialState = {
    isAuthenticated: false,
   
}

debugger
const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_ADMIN :
            log("in admin reducer")
            return {
                isAuthenticated: true
            }
        
            case LOGOUT_ADMIN:
                return{
                    isAuthenticated: false
                }
            default:
                return state
    }
}


export default adminReducer