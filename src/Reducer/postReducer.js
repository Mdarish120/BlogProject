import {CREATE,GET,UPDATE,START_LOADING,END_LOADING}  from "../Constant";
export const postReducer =(state ={isLoading :false,create:[]}, action)=>{

    switch (action.type) {

        case START_LOADING : 
        return {...state,isLoading:false}


        case END_LOADING : 
        return {...state,isLoading:true}

        case CREATE  :
            return{...state, create:[...state,action.payload]};

            case UPDATE  : return {...state,create:state.create.map((post)=>(post._id===action.payload._id?action.payload:post))};

            case GET : 
            return {
               ...state, 
               create:action.payload.data,
              
            };
         
    
        default:
            return state;
            
    }

}