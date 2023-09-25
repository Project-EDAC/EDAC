import axios from 'axios'
import { createUrl, log } from '../../utils/utils'
import { createFactory } from 'react'


export async function getFacultyAcademics() {
    var studId = sessionStorage.getItem('id');
    const longFacId = parseInt(studId, 10);
    const url = createUrl(`/faculty/facacademicdetails/${longFacId}`);
  log(url)
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.get(url)
      log(response.data)
      log(response.status)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }