import axios from 'axios';
import { log } from '../../utils/utils';

const setAuthToken = token => {
    if (token) {
        log("in setAuthToken "+ token)
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
