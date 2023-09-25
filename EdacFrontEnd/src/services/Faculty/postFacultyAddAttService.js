import axios from 'axios'
import { createUrl, log } from '../../utils/utils'


export async function addStudAtt(studentId,
  status,
  date,
 ) {
  debugger;
  var facId = sessionStorage.getItem('id');
  const longFacId = parseInt(facId, 10);
  const url = createUrl(`/faculty/attendance/${longFacId}`);
  const body = {
    studentId,
    status,
    date,
  }
  log(body)
  // wait till axios is making the api call and getting response from server
  try {
    debugger;
    const response = await axios.post(url, body)
    log(response.data)
    log(response.status)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}
