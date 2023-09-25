import axios from 'axios'
import { createUrl, log } from '../../utils/utils'
import { createFactory } from 'react'


export async function getSyllabus() {

    const url = createUrl('/student/syllabus')
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