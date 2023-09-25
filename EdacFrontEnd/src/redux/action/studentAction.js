import { LOGIN_STUDENT,LOGOUT_STUDENT } from "../actionTypes";
import { log } from "../../utils/utils";

debugger
export const loginStudent = ()=>{
    log("in admin action")
    return{
        type : LOGIN_STUDENT
    }
}

export const logoutStudent = ()=>{
    log("in admin action")
    return{
        type : LOGOUT_STUDENT
    }
}