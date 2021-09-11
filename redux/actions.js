import * as actions from '../redux/types';

//creating actions for redux
//action for started login
export function authStarted(){
    return {
        type: actions.AUTH_STARTED,
    }
}

//action that means something went wrong at logging in
export function authFailed(){
    return {
        type: actions.AUTH_FAILED,
    }
}

//action for successfully logging in
export function authSuccess(){
    return {
        type: actions.AUTH_SUCCESS,
    }
}
