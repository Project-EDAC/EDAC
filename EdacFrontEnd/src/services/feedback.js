import axios from 'axios'
import { createUrl, log } from '../utils/utils'


export async function addCategory(categoryName){
    const url = createUrl('/admin/feedbackcategory')
    const body = {categoryName}
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


export async function getCategories()
{
    const url = createUrl('/admin/allcategories')

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

export async function deleteCategory(id)
{
    // /delete/category/{cid}
    const url1 = "/admin/delete/category/"+id
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


export async function addQuestion(question,categoryid){
    const url = createUrl('/admin/feedbackquestion')
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


export async function getQuestions()
//log(response)()
{
    const url = createUrl('/admin/allquestions')

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

export async function deleteQuestion(id)
{
    // /delete/question/{qid}
    const url1 = "/admin/delete/question/"+id
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

debugger
export async function updateQuestion(id,question,categoryid){

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


export async function scheduleFeedback(facultyId){

   

    const url = createUrl('/admin/setfeedback')
    
    const body = {
        facultyId
    }
   // log(body)
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