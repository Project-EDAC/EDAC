import axios from 'axios'
import { createUrl, log } from '../../utils/utils'
import setAuthToken from '../../redux/utils/setAuthToken'
import { createFactory } from 'react'
import { loginFaculty, logoutFaculty } from '../../redux/action/facultyAction'

export async function loginUser(creds,dispatch) {
  const url = createUrl('/auth/faculty/signin')
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
        
        const {id, firstName, lastName, email } = response['data'].faculty;

        localStorage.setItem('facultyJwtToken', response['data'].token);

        sessionStorage.setItem('id', id);
        sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('lastName', lastName);
        sessionStorage.setItem('email', email);

        setAuthToken(response['data'].token);
        
    log(response.status)

    dispatch(loginFaculty())
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function logoutFacultyApi(dispatch) {

  sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('email')
    localStorage.removeItem('facultyJwtToken');
    setAuthToken(false);
  dispatch(logoutFaculty())
              
}
