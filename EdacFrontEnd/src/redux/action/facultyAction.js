import { LOGIN_FACULTY,LOGOUT_FACULTY } from "../actionTypes";
import { log } from "../../utils/utils";

debugger
export const loginFaculty = ()=>{
    log("in admin action")
    return{
        type : LOGIN_FACULTY
    }
}


export const logoutFaculty = ()=>{
    log("in Faculty action")
    return{
        type : LOGOUT_FACULTY
    }
}
