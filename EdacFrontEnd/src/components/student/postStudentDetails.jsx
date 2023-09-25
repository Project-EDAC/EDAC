import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { addStudDetails  as addStudentDetailsApi} from "../../services/StudentService/postStudentDetails"
import StudentSideBar from "../SideBar/StudentSideBar";
import StudentHeader from "../Header/StudentHeader";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function PostStudentDetails() {
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
     
    },[])


      // get the navigation object
  const navigate = useNavigate()

    const addStudentDet = async () => {
      if (prn.length == '') {
        toast.error('Please enter prn')
      } else if (batch.length == '') {
        toast.error('Please enter batch')
      } else if (dob.length == '') {
        toast.error('Please enter dob')
      }else if (mobileNo.length == '') {
        toast.error('Please enter Moblie No')
      }
      else if (altMobileNo.length == '') {
        toast.error('Please enter alt Mobile No')
      }
      else if (address.length == ''){
        toast.error('Please enter address')
      }
        else {
     try {
        const response = await addStudentDetailsApi(
            prn,
            batch,
            dob,
            mobileNo,
            altMobileNo,
            address
          );

         log(response)
        if (response.status === 201) {
          log(response);
          toast.error('Data Successfully added')
          navigate("/student/studentdetails")
        }
        else{
            toast.error('Data Not Available')
        }}catch(error){
          navigate("/student/studentdetails")
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
            <a href="/student/home">Student</a>
            <a href="/student/addstudentdetails">Add Details</a>
            <span className='gradient__text'>Add Details</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className="gradient__text" style={{ textAlign: "center", margin: 10 }}>Add Details</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className='mb-3'>
                          <label htmlFor=''><h3 style={{color:"white"}}>PRN</h3></label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Enter PRN'
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
                            placeholder='Enter Batch'
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
                            placeholder='Enter DOB'
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
                            placeholder='Enter mobile no'
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
                            placeholder='Enter alternate mobile no'
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
                            placeholder='Enter address'
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                          />
                        </div>
                          <br />
                          <button onClick={addStudentDet} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Add Details
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

export default PostStudentDetails;


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
          onChange={(e) => {
              setAddress(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <button onClick={addStudentDet} className='btn btn-success'>
          Login
        </button>
      </div>
    </div>
  </div>
  <div className='col'></div>
</div>
</div> */}