import {ADD_COMMENTS} from '../constants/contactConstants'

export const addCommentsReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_COMMENTS:
            return {loading:true};
        
            default:
        return state;

           
    }
}
