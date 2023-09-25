import { useNavigate } from 'react-router-dom';
import { log } from '../../utils/utils';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logoutStudentApi } from '../../services/StudentService/studentLogin';
import { toast } from 'react-toastify';

function StudentLogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user); // Store user data in a variable

    useEffect(() => {
        logoutUser(userData); // Pass the user data to the function
        navigate('/');
    }, [userData]);

    const logoutUser = async (user) => { // Accept user data as an argument
        try{
        await logoutStudentApi(dispatch);
        log("in logout" + user.admin.isAuthenticated);
        }catch{
            
        }
    };

    return null;
}

export default StudentLogout;
