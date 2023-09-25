import axios from 'axios'
import { createUrl, log } from '../utils/utils'
import setAuthToken from '../redux/utils/setAuthToken'
// import { useDispatch } from 'react-redux'
import { loginAdmin, logoutAdmin } from '../redux/action/adminAction'

// const dispatch = useDispatch()




export async function loginAdminApi(creds,dispatch) {
    const url = createUrl('/auth/admin/signin')

    var email = creds.email
    var password = creds.password
    const body = {
      email,
      password,
    }

   
        try {
            const response = await axios.post(url, body)
            log(response)

            const {  firstName, lastName,email } = response['data'].admin
            //JWT auth code
                // store the token for making other apis
                localStorage.setItem('adminJwtToken', response['data'].token);
               
                log(response['data'].token)
                log("local storage"+localStorage.getItem('adminJwtToken'))
                //sessionStorage['token'] = token
                sessionStorage['firstName'] = firstName
                sessionStorage['lastName'] = lastName
                sessionStorage['email'] = email

                setAuthToken(response['data'].token);

               log("in admin.js despatching loginadmin()")
                
               dispatch(loginAdmin())
                
            return response
          } catch (ex) {
            log(ex)
            return ex.response //can return error object
          }
    
    
  }


export async function logoutAdminApi(dispatch) {
   
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('email')
    localStorage.removeItem('adminJwtToken');
    setAuthToken(false);
   
    dispatch(logoutAdmin())


                
}




export async function addCourse(name){
    const url = createUrl('/admin/course')
    const body = {name}
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

export async function addSubject(name,courseid)
{
    const url = createUrl('/admin/subject')
    const body = {
        name,
        courseid
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

export async function addStudent(
                firstName,
				lastName,
				email,
				password,
				confirmPassword,
				courseid
)
{
    const url = createUrl('/admin/student')
    const body = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        courseid
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


export async function getStudents()
{
    const url = createUrl('/admin/allstudents')

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

export async function deleteStudent(id)
{
    // /delete/{sid}
    const url1 = "/admin/delete/"+id
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

export async function addFaculty(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    subjectid
)
{
    const url = createUrl('/admin/faculty')
    const body = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
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


export async function getFaculties()
{
    const url = createUrl('/admin/allfaculty')

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




export async function getCourse()
{
    const url = createUrl('/admin/courses')

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

export async function deleteFaculty(id)
{
    // /delete/faculty/{fid}
    const url1 = "/admin/delete/faculty/"+id
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


export async function addSyllabusApi( subject,
    topics,
    duration
    ) {
      const url = createUrl(`/admin/syllabus`);
    const body = {
      subject,
      topics,
      duration,
    }
    log(body)
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response.data)
      log(response.status)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function addAdmTtApi( startDate,
    endDate,
    subjectId,
    facultyId
    ) {
      // var studId = sessionStorage.getItem('id');
      // const longFacId = parseInt(studId, 10);
      const url = createUrl(`/admin/timetable`);
    const body = {
            startDate,
            endDate,
            subjectId,
            facultyId
    }
    log(body)
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response.data)
      log(response.status)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function getSyllabus()
  {
      const url = createUrl('/admin/getsyllabus')
  
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



  export async function getTimetable()
  {
      const url = createUrl('/admin/gettimetable')
  
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
