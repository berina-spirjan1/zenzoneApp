import * as actions from '../redux/types';

//creating actions for redux
//action for started login
export function authStarted(){
    return {
        type: actions.AUTH_STARTED,
        payload:{
            success: false
        }
    }
}

//action that means something went wrong at logging in
export function authFailed(){
    return {
        type: actions.AUTH_FAILED,
        payload:{
            success: false
        }
    }
}

//action for successfully logging in
export function authSuccess(){
    return {
        type: actions.AUTH_SUCCESS,
        payload:{
            success: true
        }
    }
}
