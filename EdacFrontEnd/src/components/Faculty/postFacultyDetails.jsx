import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { addFacDetails  as addFacDetailsApi} from "../../services/Faculty/postFacDetailsService"
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FacultyHeader from '../Header/FacultyHeader'

function PostFacultyDetails() {
    const [prn,setPrn] = useState('')
    const [dob,setDob] = useState('')
    const [mobileNo,setMobileNo] = useState('')
    const [altMobileNo,setaltAltMobileNo] = useState('')
    const [address,setAddress] = useState('')
    const store = useSelector((store) => store)
      // get the navigation object
  const navigate = useNavigate()

  useEffect(()=>{
    if (!store.faculty.isAuthenticated) {
  navigate('/');
}
},[])

    const addFacultyDet = async () => {
      if (prn.length == '') {
        toast.error('Please enter prn')
      } else if (dob.length == '') {
        toast.error('Please enter dob')
      } else if (mobileNo.length == '') {
        toast.error('Please enter mobile No')
      }else if (altMobileNo.length == '') {
        toast.error('Please enter alt Mobile No')
      } 
      else if (address.length == '') {
        toast.error('Please enter address')
      }  else
     try {
        const response = await addFacDetailsApi(
            prn,
            dob,
            mobileNo,
            altMobileNo,
            address
          );
        if (response.status === 201) {
          log(response);
          toast.success('Data Successfully added')
        }
        else{
            toast.error('No Data Available')
        }}catch(error){
          navigate("/faculty/facultydetails")
          toast.error("Data already added")
        }
      }

    return (
      <>
      <FacultyHeader />
      <main className="main-content">
        <div className="container">
          <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
            <a href="/">Home</a>
            <a href="/faculty/editDetails">Update Details</a>
            {/* <a href="/admin/exam">Exam</a> */}
            <span className='gradient__text'>Faculty Details</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                <div>
                  <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Add Faculty Details</h1>

                  <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                      <div className='form'>
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
                        <div className='mb-3'>
                          <button onClick={addFacultyDet} className='btn btn-success'
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
                        </div>
                      </div>
                    </div>
                    <div className='col'></div>
                  </div>
                  </div>
                </div>
              </div>
              <FacultySideBar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
        );
}

export default PostFacultyDetails;

{/* <div>
<h1 style={{ textAlign: 'center', margin: 10 }}>Faculty Details</h1>

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
        <button onClick={addFacultyDet} className='btn btn-success'>
          Add Details
        </button>
      </div>
    </div>
  </div>
  <div className='col'></div>
</div>
</div> */}