import axios from 'axios'
import { createUrl, log } from '../utils/utils'



export async function getFeedbacks(id)
//log(response)()
{
    const url1 = createUrl('/student/getAllScheduledFeedbacks/')
    const url = url1 + id
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


export async function giveFeedback(
                studentId,
                scheduledFeedbackId,
                answers,
                feedbackDate,
                extraComment
)
{

    // /givefeedback
    const url = createUrl('/student/givefeedback')
    const body = {
        studentId,
        scheduledFeedbackId,
        answers,
        feedbackDate,
        extraComment
    }
    try{

        const response = await axios.post(url,body)
       log(response.data)
        return response
   }
   catch (ex) {
       log(ex)
       return null
     }
}