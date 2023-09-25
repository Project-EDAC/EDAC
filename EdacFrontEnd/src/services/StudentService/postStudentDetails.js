import axios from 'axios'
import { createUrl, log } from '../../utils/utils'


export async function addStudDetails(prn,
  batch,
  dob,
  mobileNo,
  altMobileNo,
  address) {
  var studId = sessionStorage.getItem('id');
    const longStudId = parseInt(studId, 10);
    const url = createUrl(`/student/details/${longStudId}`);
  const body = {
    prn,
    batch,
    dob,
    mobileNo,
    altMobileNo,
    address
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
