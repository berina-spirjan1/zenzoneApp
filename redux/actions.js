import * as actions from '../redux/types';

//creating actions for redux
//action for success login
export function authSuccess(){
    return { type: actions.AUTH_SUCCESS }
}

//action that means something went wrong at logging in
export function authFailed(){
    return { type: actions.AUTH_FAILED }
}

