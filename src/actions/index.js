export const ADD_USER = 'ADD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export function addUser(name,email) {
    return {
        type : ADD_USER,
        name,
        email                                
    }
}

