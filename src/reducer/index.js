import {ADD_USER, LOGOUT_USER} from "../actions/index";


const initialState = {
       name : "",
       email : ""
};

const USER = (state = initialState, action) => {

    console.log(state,action);

    switch (action.type) {
        case ADD_USER :
           
           let tuser = state;  
           tuser.name = action.name;
           tuser.email = action.email;
           
           return tuser;

        case LOGOUT_USER :
            return {
                ...state,
                [action.changedUser] : 'logout'
            };

        default :
            return state;

    }

};

export default USER;