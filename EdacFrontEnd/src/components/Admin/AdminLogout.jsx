import { useNavigate } from 'react-router-dom'
import { log } from '../../utils/utils'
// import { login } from '../../features/authSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { logoutAdminApi } from '../../services/admin'

function AdminLogout() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const store = useSelector((store) => store)


    useEffect(()=>{
        logoutUser()
        navigate('/')

    },[])

    const logoutUser = async () => {

        await logoutAdminApi(dispatch)
        
        log("in logout"+store.admin.isAuthenticated)
        

    }



    return (<></>  );
}

export default AdminLogout;