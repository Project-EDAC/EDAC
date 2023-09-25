import axios from 'axios'
import { createUrl, log } from '../../utils/utils'


export async function addFacAcademics(tenthMarks,
  twelthMarks,
  diplomaMarks,
  graduation,
  postGraduationmarks,
  workExperience) {
  var studId = sessionStorage.getItem('id');
  const longFacId = parseInt(studId, 10);
  const url = createUrl(`/faculty/facacademicsdetails/${longFacId}`);
  const body = {
    tenthMarks,
    twelthMarks,
    diplomaMarks,
    graduation,
    postGraduationmarks,
    workExperience
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
