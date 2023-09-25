//niraj

import axios from "axios";
import { createUrl, log } from "../utils/utils";


export async function getExamList(){

    const url = createUrl('/admin/exam')
    try{
        
        const response = await axios.get(url)
        log(response)

        return response
    }catch(ex)
    {
        log(ex)
        return null;
    }
}

export async function addExam(examDescription,examDate,subjectid){

    const url = createUrl('/admin/exam/add')
    const body = {
        examDescription,
        examDate,
        subjectid
    }

    try{
        const response = await axios.post(url,body)
        log(response)
        return response
    }catch(ex)
    {
        log(ex)
        return null;
    }
}