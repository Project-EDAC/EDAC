import axios from 'axios'
import { createUrl, log } from '../../utils/utils'
import { loginStudent, logoutStudent } from '../../redux/action/studentAction'
import setAuthToken from '../../redux/utils/setAuthToken'

export async function loginUser(creds,dispatch) {
  const url = createUrl('/auth/student/signin')

  var email = creds.email
  var password = creds.password

  const body = {
    email,
    password,
  }
  log(body)
  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response)
    log("in admin.js despatching loginadmin()")
                dispatch(loginStudent())
                const { id, firstName, lastName, email } = response.data.student;
                localStorage.setItem('studentJwtToken',response['data'].token) 
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('firstName', firstName);
                sessionStorage.setItem('lastName', lastName);
                sessionStorage.setItem('email', email);


                setAuthToken(response['data'].token);
    log(response.status)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function logoutStudentApi(dispatch) {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('firstName');
        sessionStorage.removeItem('lastName');
        sessionStorage.removeItem('email');
        localStorage.removeItem('studentJwtToken')
        setAuthToken(false);
        dispatch(logoutStudent())
              
}
