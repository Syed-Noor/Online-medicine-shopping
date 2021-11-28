import {applyMiddleware,
     combineReducers,
      createStore}from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productListReducer,
    productDetailsReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer'
import { userloginReducer, 
    userRegisterReducer,
    userDetailsReducer,
userUpdateProfileReducer } from "./reducers/userReducer";
import{sellerloginReducer} from './reducers/sellerReducer'

import { orderCreateReducer,orderDetailsReducer,
     orderListMyReducer, orderPayReducer } from "./reducers/orderReducer"; 
import { addCommentsReducer } from "./reducers/conactReducer";



const shippingAddressFromStorage=localStorage.getItem("shippingAddress") ?
JSON.parse(localStorage.getItem("shippingAddress")):{};

const userInfoFromStorage=localStorage.getItem('userInfo') ?
 JSON.parse(localStorage.getItem('userInfo')): null;

 const sellerInfoFromStorage=localStorage.getItem('sellerInfo') ?
 JSON.parse(localStorage.getItem('sellerInfo')): null;

const cartItemsFromStorage=localStorage.getItem('Items') ? 
 JSON.parse(localStorage.getItem('Items'))
:[];


const reducer= combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userloginReducer,
    sellerLogin:sellerloginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    comments:addCommentsReducer

});

const initialState={
    cart:{
        // cartItems:'SyedNoor',
    
    
        cartItems:cartItemsFromStorage,
     shippingAddress:shippingAddressFromStorage
},

    userLogin:{userInfo:userInfoFromStorage},
    sellerLogin:{sellerInfo:sellerInfoFromStorage}
};

const middleware= [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;