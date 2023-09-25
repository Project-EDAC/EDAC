import axios from 'axios'
import { createUrl, log } from '../../utils/utils'
import { createFactory } from 'react'


export async function getFacultyDetails() {
    var facId = sessionStorage.getItem('id');
    const longFacId = parseInt(facId, 10);
    const url = createUrl(`/faculty/details/${longFacId}`);
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

  export async function updateFacDetail(prn,
    dob,
    mobileNo,
    altMobileNo,
    address) {
    var facId = sessionStorage.getItem('id');
    const longFacId = parseInt(facId, 10);
    const url = createUrl(`/faculty/details/${longFacId}`);
    log(url)
    const body = {
      prn,
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
debugger;
  export async function getFacultyAca() {
    debugger;
    var facId = sessionStorage.getItem('id');
    const longFacId = parseInt(facId, 10);
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

  export async function updateFacAca(tenthMarks,
    twelthMarks,
    diplomaMarks,
    graduation,
    postGraduationmarks,
    workExperience) {
    var studId = sessionStorage.getItem('id');
    const longStudId = parseInt(studId, 10);
    const url = createUrl(`/faculty/facAcaDetails/${longStudId}`);
    log(url)
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
      const response = await axios.put(url, body)
      log(response.data)
      log(response.status)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }