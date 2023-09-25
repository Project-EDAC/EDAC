import axios from 'axios'
import { createUrl, log } from '../../utils/utils'
import { createFactory } from 'react'


export async function getStudentDetails() {
    var studId = sessionStorage.getItem('id');
    const longStudId = parseInt(studId, 10);
    const url = createUrl(`/student/details/${longStudId}`);
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

  export async function updateStudDetail(prn,
    batch,
    dob,
    mobileNo,
    altMobileNo,
    address) {
    var studId = sessionStorage.getItem('id');
    const longStudId = parseInt(studId, 10);
    const url = createUrl(`/student/details/${longStudId}`);
    log(url)
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
      const response = await axios.put(url, body)
      log(response.data)
      log(response.status)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }

  export async function getStudentAca() {
    var studId = sessionStorage.getItem('id');
    const longStudId = parseInt(studId, 10);
    const url = createUrl(`/student/academicdetails/${longStudId}`);
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

  export async function updateStudAca(tenthMarks,
    twelthMarks,
    diplomaMarks,
    graduation,
    postGraduationmarks,
    graduationProject,
    postGraduationProject,
    workExperience) {
    var studId = sessionStorage.getItem('id');
    const longStudId = parseInt(studId, 10);
    const url = createUrl(`/student/studAcaDetails/${longStudId}`);
    log(url)
    const body = {
      tenthMarks,
      twelthMarks,
      diplomaMarks,
      graduation,
      postGraduationmarks,
      graduationProject,
      postGraduationProject,
      workExperience
    }
    log(body)
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.put(url, body)
      log(response.data)
      log(response.status)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }