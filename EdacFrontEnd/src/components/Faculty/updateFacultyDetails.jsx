import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { updateFacDetail  as updateFacDetailsApi} from "../../services/Faculty/facultyService"
import { getFacultyDetails  as FcacultyDetailsApi} from "../../services/Faculty/facultyService"
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FacultyHeader from '../Header/FacultyHeader'

function UpdateFacultyDetails() {
    const [fac,setFac] = useState([])
    const [prn,setPrn] = useState('')
    const [dob,setDob] = useState('')
    const [mobileNo,setMobileNo] = useState('')
    const [altMobileNo,setaltAltMobileNo] = useState('')
    const [address,setAddress] = useState('')
    const store = useSelector((store) => store)

    useEffect(()=> {
      if (!store.faculty.isAuthenticated) {
    navigate('/');
  }
  else{
    loadFunction()
  }   
  },[])

    const navigate = useNavigate()

    const loadFunction = async () => {
      debugger;
      try{
        const response = await FcacultyDetailsApi(
          prn,
          dob,
          mobileNo,
          altMobileNo,
          address
      )

      log(response)
      if (response['status'] === 200) {
        log(response.data);
          setPrn(response.data.prn)
          setDob(response.data.dob)
          setMobileNo(response.data.mobileNo)
          setaltAltMobileNo(response.data.altMobileNo)
          setAddress(response.data.address)
          
        } else {
          toast.error('Error while updating details, please try again');
        }
      }catch{
        
      }
  }

      const updateFacDetail = async ()=>{
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
          const resp = await updateFacDetailsApi(prn,
            dob,
            mobileNo,
            altMobileNo,
            address)
            if(resp['status'] == 200)
            {
              log(resp);
              setFac(resp.data) ;
                toast.success('Successfully updated a question')
                //navigate('/student/studentdetails')
            }
            else{
                toast.error('Error while updating a new details, please try again')
            }
         }catch{

         }
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
            <a href="/faculty/home">Home</a>
            <a href="/faculty/facultydetails">Faculty</a>
            <span className='gradient__text'>Edit Details</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                <div>
                  <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Edit Faculty Details</h1>
                    <div className='row'>
                      <div className='col'></div>
                      <div className='col'>
                        <div className='form'>
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
                          <div className='mb-3'>
                            <button onClick={updateFacDetail} className='btn btn-success'
                            style={{
                              padding: "10px 30px",
                              color: "#fff",
                              borderRadius: "5px",
                              border: "solid #fff 1px",
                              marginTop: "25px",
                              opacity: 0.7,
                            }}>
                              Update
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

export default UpdateFacultyDetails;

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
                  value={prn}
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
                <button onClick={updateFacDetail} className='btn btn-success'>
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div> */}