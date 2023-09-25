//niraj

import axios from "axios";
import { createUrl, log } from "../utils/utils";


export async function getSubjectList(){
    const url = createUrl('/admin/subject')

    try{
        const response = await axios.get(url)
        log(response)
        return response.data
    }catch(ex)
    {
        log(ex)
        return null;
    }

}

