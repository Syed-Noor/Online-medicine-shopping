import { SELLER_LOGIN_FAIL, SELLER_LOGIN_REQUEST, SELLER_LOGIN_SUCCESS, SELLER_LOGOUT, SELLER_REGISTER_FAIL, SELLER_REGISTER_REQUEST, SELLER_REGISTER_SUCCESS } from "../constants/sellerConstants";
import axios from "axios";




export const logout=()=>dispatch=>{
    localStorage.removeItem('sellerInfo')
    dispatch({type:SELLER_LOGOUT});
}
//For seller regis
export const Slogin =(name,email,password)=>async dispatch=>{

    try{
        dispatch({type:SELLER_LOGIN_REQUEST})
        const config={headers:{'content-type':'application/json'}};
        const {data}= await axios.post('/api/sellers/login',
        {name,email,password},config)
        dispatch({
            type:SELLER_LOGIN_SUCCESS,
            payload:data

        })
        localStorage.setItem('sellerInfo',JSON.stringify(data));
    }catch(error){
        dispatch({
            type:SELLER_LOGIN_FAIL,
            payload : 
            error.response && error.response.data.message
            ?error.response.data.message
             :error.message,
        })
       
    }
};

//For New Registration
export const sellerregister =(name,email,password)=>async dispatch=>{

    try{
        dispatch({type:SELLER_REGISTER_REQUEST})
        const config={headers:{'content-type':'application/json'}};
        const {data}= await axios.post('/api/sellers',
        {name,email,password},config)
        dispatch({
            type:SELLER_REGISTER_SUCCESS,
            payload:data

        })
        dispatch({
            type:SELLER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('sellerInfo',JSON.stringify(data));
    }catch(error){
        dispatch({
            type:SELLER_REGISTER_FAIL,
            payload : 
            error.response && error.response.data.message
            ?error.response.data.message
             :error.message,
        })
       
    }
};