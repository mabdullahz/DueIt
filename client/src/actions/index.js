import axios from 'axios';
import { FETCH_USER, FETCH_USER_INFO } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER , payload: res.data });  
};

export const fetchUserInfo = () => async (dispatch) => {
    const res = await axios.get('/api/userinfo')
    dispatch({ type: FETCH_USER_INFO, payload: res.data });
};
