
import {ADD_COMMENTS} from '../constants/contactConstants'

export const addComments=(contact)=>dispatch=>{
    dispatch( {
        type:ADD_COMMENTS,
     payload:{
              email:contact.email,
              address:contact.address,
              comments:contact.comments,
    }});
    localStorage.setItem('comments',JSON.stringify(contact));
 };
 
     
 