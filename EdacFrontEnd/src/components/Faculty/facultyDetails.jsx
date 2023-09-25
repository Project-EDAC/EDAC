import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { getFacultyDetails  as FacultyDetailsApi} from "../../services/Faculty/facultyService"
import Header from '../Header/Header'
import FacultySideBar from '../SideBar/FacultySideBar'
import Footer from '../Footer/Footer'
import FacultyHeader from '../Header/FacultyHeader'
function FacultyDetails() {
    const [fac,setFac] = useState([])
    const store = useSelector((store) => store)
    useEffect(()=> {
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
    else{
        faculty()
    }
        
    },[])

      // get the navigation object
  const navigate = useNavigate()

    const faculty = async () => {
     
       try{
        const response = await FacultyDetailsApi()

        if (response.status === 200) {
          log(response);
          setFac(response.data) ;
        }
        else{
            toast.error('Data Not Available')
        }
       }catch{
        
       }
      }

    return (
        <div className="site-content">
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
                    <span className='gradient__text'>Faculty Details</span>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="content col-md-8">
                            <div className="post">
                                <div>
                                    <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Faculty Details</h1>

                                    {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                    <br /><br /> */}
                                    <table className="table table-bordered table-striped">
                                        <tbody>
                                                <tr>
                                                    <td>PRN</td>
                                                    <td>{fac.prn}</td>  
                                                </tr> 
                                                <tr>
                                                    <td>DOB</td>
                                                    <td>{fac.dob}</td>
                                                </tr>
                                                <tr>
                                                    <td>Mobile</td>
                                                    <td>{fac.mobileNo}</td>
                                                </tr>
                                                <tr>
                                                    <td>Alternate Mobile</td>
                                                    <td>{fac.altMobileNo}</td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td>{fac.address}</td>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <FacultySideBar />
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
        );
}

 export default FacultyDetails;

// <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
// <div style={{marginBottom :50}}>
// <center>
//     <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Faculty Details</b></h1>
// </center>
// </div>
// <div style={{display:'inline-flex'}}>
//     <button className='btn btn-info' style={{marginLeft : 910}} onClick={updateDetails}>Edit</button>
//     &nbsp;&nbsp;
//     <button className='btn btn-success' onClick={addFacDetails}>Add Details</button>
// </div>
// <table className="table table-bordered table-striped">
//     <tbody>
//             <tr>
//                 <td>PRN</td>
//                 <td>{fac.prn}</td>  
//             </tr> 
//             <tr>
//                 <td>DOB</td>
//                 <td>{fac.dob}</td>
//             </tr>
//             <tr>
//                 <td>Mobile</td>
//                 <td>{fac.mobileNo}</td>
//             </tr>
//             <tr>
//                 <td>Alternate Mobile</td>
//                 <td>{fac.altMobilNo}</td>
//             </tr>
//             <tr>
//                 <td>Address</td>
//                 <td>{fac.address}</td>
//             </tr>
//     </tbody>
// </table>
// </div>
