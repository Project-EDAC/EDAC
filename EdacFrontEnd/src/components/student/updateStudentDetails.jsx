import { useEffect, useState } from 'react'
//import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { updateStudDetail  as updateStudDetailsApi} from "../../services/StudentService/studentService"
import { getStudentDetails  as StudentDetailsApi} from "../../services/StudentService/studentService"
import StudentSideBar from "../SideBar/StudentSideBar";
import StudentHeader from "../Header/StudentHeader";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function UpdateStudentDetails() {
    const [stud,setStud] = useState([])
    const [prn,setPrn] = useState('')
    const [batch,setBatch] = useState('')
    const [dob,setDob] = useState('')
    const [mobileNo,setMobileNo] = useState('')
    const [altMobileNo,setaltAltMobileNo] = useState('')
    const [address,setAddress] = useState('')
    const store = useSelector((store) => store)
    useEffect(()=> {
      if (!store.student.isAuthenticated) {
        navigate('/');
      }
      loadFunction()
    },[])

    const navigate = useNavigate()

    const loadFunction = async () => {
      debugger;
      const response = await StudentDetailsApi(
        prn,
        batch,
        dob,
        mobileNo,
        altMobileNo,
        address
    )

    
    if (response['status'] === 200) {
      log(response.data);
        setPrn(response.data.prn)
        setBatch(response.data.batch)
        setDob(response.data.dob)
        setMobileNo(response.data.mobileNo)
        setaltAltMobileNo(response.data.altMobileNo)
        setAddress(response.data.address)
      } else {
        toast.error('Error while updating details, please try again');
      }
  }

      const updateStudDetail = async ()=>{
        debugger;
        if(prn.length === '')
        {
            toast.error('please enter prn')
        }
        else if(dob.length === '')
        {
            toast.error('please enter dob')
        }
        else if(mobileNo.length === '')
        {
            toast.error('please enter mobileNo')
        }
        else if(altMobileNo.length === '')
        {
            toast.error('please enter altMobileNo')
        }
        else if(address.length === '')
        {
            toast.error('please enter address')
        }
        else{
          try{
            const resp = await updateStudDetailsApi(prn,
              batch,
              dob,
              mobileNo,
              altMobileNo,
              address)
              if(resp['status'] === 200)
              {
                log(resp);
                setStud(resp.data) ;
                  toast.success('Successfully updated a question')
                  navigate('/student/studentdetails')
              }
              else{
                  toast.error('Error while updating a new details, please try again')
              }
          }catch{
            
          }
        }
       
    }

    const back = async () =>{
      navigate("/student/studentdetails");
      }
    
    return (
      <>
      <StudentHeader />
      <main className="main-content">
        <div className="container">
          <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
            <a href="/">Home</a>
            <a href="/student">Student</a>
            <a href="/student/editDetails">Edit Details</a>
            <span className='gradient__text'>Edit Student Details</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className="gradient__text" style={{ textAlign: "center", margin: 10 }}>Edit Student Details</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>PRN</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                value={prn}
                                onChange={(e) => {
                                  setPrn(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>Batch</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                value={batch}
                                onChange={(e) => {
                                    setBatch(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>DOB</h3></label>
                              <input
                                type='date'
                                className='form-control'
                                value={dob}
                                onChange={(e) => {
                                    setDob(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>Mobile No</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                value={mobileNo}
                                onChange={(e) => {
                                    setMobileNo(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>AltMobile No</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                value={altMobileNo}
                                onChange={(e) => {
                                    setaltAltMobileNo(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>Address</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value)
                                }}
                              />
                            </div>

                          <br />
                          <button onClick={updateStudDetail} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Edit Details
                          </button>
                          &nbsp;
                          <button onClick={back} className="btn btn-warning"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Back 
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <StudentSideBar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
        );
}

export default UpdateStudentDetails;

{/* <div>
        <h1 style={{ textAlign: 'center', margin: 10 }}>Student Details</h1>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>
              <div className='mb-3'>
                <label htmlFor=''>PRN</label>
                <input
                  type='text'
                  className='form-control'
                  value={prn}
                  onChange={(e) => {
                    setPrn(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Batch</label>
                <input
                  type='text'
                  className='form-control'
                  value={batch}
                  onChange={(e) => {
                      setBatch(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor=''>DOB</label>
                <input
                  type='date'
                  className='form-control'
                  value={dob}
                  onChange={(e) => {
                      setDob(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Mobile No</label>
                <input
                  type='text'
                  className='form-control'
                  value={mobileNo}
                  onChange={(e) => {
                      setMobileNo(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor=''>AltMobile No</label>
                <input
                  type='text'
                  className='form-control'
                  value={altMobileNo}
                  onChange={(e) => {
                      setaltAltMobileNo(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Address</label>
                <input
                  type='text'
                  className='form-control'
                  value={address}
                  onChange={(e) => {
                      setAddress(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <button onClick={updateStudDetail} className='btn btn-success'>
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div> */}