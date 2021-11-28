import axios from "axios";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, 
    ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS,
     ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS,
     } from "../constants/orderConstants";
// import { PRODUCT_LIST_FAILS } from "../constants/productConstant";

 export const createOrder=(order)=>async(dispatch,getState)=>{
    
    try{
        dispatch({
            type:ORDER_CREATE_REQUEST,
           
           })
        const {
            userLogin:
            { userInfo },
        }=getState();
        
       
        const config={
            headers:
          {
              'content-Type':'application/json',
              Authoriztion:`Bearer ${userInfo.token}`
          },

        };
        // console.log(order)
        const {data}=await axios.post('/api/orders',order,config)
       
        dispatch({type:ORDER_CREATE_SUCCESS,
        payload:data})

     } catch(error){

        dispatch({
            type:ORDER_CREATE_FAIL,
            payload:error.response && error.response.data.message ? 
            error.reponse.data.message :
            error.message,
        });
        }
    }

    //For order Details
    export const getOrderDetails=(id)=>async(dispatch,getState)=>{
    
        try{
            dispatch({
                type:ORDER_DETAILS_REQUEST
            })
            const {userLogin: {userInfo},}=getState();

            console.log(userInfo)
            const config={
                headers:
              {
                   Authoriztion:`Bearer ${userInfo.token}`},
    
            };
            const {data}=await axios.post(`/api/order/${id}`,config)
            dispatch({type:ORDER_DETAILS_SUCCESS,
            payload:data})
         } catch(error){
            dispatch({
                type:ORDER_DETAILS_FAIL,
                payload:error.response && error.response.data.message ? 
                error.reponse.data.message :
                error.message,
            });
            }
        }
        //For pay order

export const payOrder=(order,paymentResult)=>async(dispatch,getState)=>{
    
            try{
                dispatch({
                    type:ORDER_PAY_REQUEST,
                    payload: { order, paymentResult }
                })
                const {userLogin:{userInfo}}=getState();
                console.log(userInfo)
                const config={
                    headers:
                  {
                      
                      Authoriztion:`Bearer ${userInfo.token}`
                  },
        
                };
                const {data}=await axios.put(`/api/order/${order._id}/pay`,paymentResult,config)
                dispatch({type:ORDER_PAY_SUCCESS,
                payload:data})
             } catch(error){
                dispatch({
                    type:ORDER_PAY_FAIL,
                    payload:error.response && error.response.data.message ? 
                    error.reponse.data.message :
                    error.message,
                });
                }
            }
 

            //pay list order

            export const listMyOrders=()=>async(dispatch,getState)=>{
    
                try{
                    dispatch({
                        type:ORDER_LIST_MY_REQUEST
                    })
                    const {userLogin:{userInfo}}=getState();
                    console.log(userInfo)
                    const config={
                        headers:
                      { Authoriztion:`Bearer ${userInfo.token}`
                      },
            
                    };
                    const {data}=await axios.get('/api/orders/myorders',config)
                    dispatch({type:ORDER_LIST_MY_SUCCESS,
                    payload:data})
                 } catch(error){
                    dispatch({
                        type:ORDER_LIST_MY_FAIL,
                        payload:error.response && error.response.data.message ? 
                        error.reponse.data.message :
                        error.message,
                    });
                    }
                }
     