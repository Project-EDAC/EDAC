import axios from 'axios'
import { createUrl, log } from '../utils/utils'


export async function scheduleAssignment(
                assignmentDescription,
                gitRepoLink,
                dueDate,
				subjectId
)
{
    const url = createUrl('/faculty/scheduleassignment')
    const body = {
        assignmentDescription,
        gitRepoLink,
        dueDate,
        subjectId
    }
    log(body)
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


export async function getAssignments()
//log(response)()
{
    const url = createUrl('/faculty/allScheduledAssignments')

    try{

         const response = await axios.get(url)
        // log(response.data)
         return response
    }
    catch (ex) {
        log(ex)
        return null
      }

}

export async function deleteAssignment(id)
{
    // /delete/question/{qid}
    const url1 = "/faculty/delete/scheduledAssignment/"+id
    const url = createUrl(url1)
    log(url)
    try{
        const response = await axios.get(url)
        //log(response)
        return response;
    }
    catch (ex) {
        log(ex)
        return null
      }
    
}


export async function updateScheduledAssignment(id,question,categoryid){

    // /update/question/{qid}

    const url1 = createUrl('/admin/update/question/')
    const url = url1 + id
    const body = {
        question,
        categoryid
    }
    log(body)
    try{
        const response = await axios.post(url,body)
        log(response)
        //log(response.data)
        return response
    }catch(ex)
    {
        log(ex)
        return null;
    }
}

export async function getStudentAssignments()
//log(response)()
{
    const url = createUrl('/faculty/allstudentAssignments')

    try{

         const response = await axios.get(url)
        // log(response.data)
         return response
    }
    catch (ex) {
        log(ex)
        return null
      }

}


export async function changeStatusOfAssignment(sid,said)
{
    // /changestatus/{sid}/{said}
    const url1 = createUrl('/faculty/changestatus/')
    const url = url1 +sid+"/"+said

    try{

        const response = await axios.get(url)
       // log(response.data)
        return response
   }
   catch (ex) {
       log(ex)
       return null
     }

}


export async function getStudentFeedback(fid)
//log(response)()
{
    const url = createUrl('/faculty/allstudentfeedbacks/')+fid

    try{

         const response = await axios.get(url)
        // log(response.data)
         return response
    }
    catch (ex) {
        log(ex)
        return null
      }

}


export async function getSubjectList(){
    const url = createUrl('/faculty/subject')

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