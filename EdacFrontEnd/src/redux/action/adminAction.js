import { LOGIN_ADMIN,LOGOUT_ADMIN } from "../actionTypes";
import { log } from "../../utils/utils";

debugger
export const loginAdmin = ()=>{
    log("in admin action")
    return{
        type : LOGIN_ADMIN
    }
}

export const logoutAdmin = ()=>{
    log("in admin action")
    return{
        type : LOGOUT_ADMIN
    }
}


