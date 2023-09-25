import { useNavigate } from 'react-router-dom'
import { log } from '../../utils/utils'
// import { login } from '../../features/authSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { logoutFacultyApi } from '../../services/Faculty/facultyLoginService'


function FacultyLogout() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const store = useSelector((store) => store)


    useEffect(()=>{
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
        else{
            logoutUser()
            navigate('/')
        }
       

    },[])

    const logoutUser = async () => {

        await logoutFacultyApi(dispatch)
        log("in logout"+store.faculty.isAuthenticated)
        

    }



    return (<></>  );
}

export default FacultyLogout;