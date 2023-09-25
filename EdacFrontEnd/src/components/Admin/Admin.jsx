import Header from "../Header/Header";
import AdminSideBar from "../SideBar/AdminSideBar";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { log } from "../../utils/utils";


function Admin() {

    const store = useSelector((store) => store)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!store.admin.isAuthenticated) {
			navigate('/');
		}
    },[])

    return ( <>
    <Header></Header>
    <main className="main-content">
                <div className="container">
                <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
                    <a href="/">Home</a>
                    {/* <a href="/admin">Admin</a> */}
                </div>
                <div className="fullwidth-block">
                    <div className="row">
                    <div className="content col-md-8">
                        <div className="post">
                        <div>
                            

                            
                        </div>
                        </div>
                    </div>
                    <AdminSideBar />
                    </div>
                </div>
                </div>
            </main>
            <Footer />
    </> );
}

export default Admin;