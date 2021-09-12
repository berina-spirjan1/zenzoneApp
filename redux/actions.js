import * as actions from '../redux/types';

//creating actions for redux
//action for started login
export function authStarted(){
    return {
        type: actions.AUTH_STARTED
    }
}

//action that means something went wrong at logging in
export function authFailed(){
    return {
        type: actions.AUTH_FAILED
    }
}

//action for successfully logging in
export function authSuccess(){
    return {
        type: actions.AUTH_SUCCESS
    }
}

//action for started user registration
export function userRegistrationStarted(){
    return{
        type: actions.USER_REGISTRATION_STARTED
    }
}

//action that means something went wrong when user tried to register/create new account
export function userRegistrationFailed(){
    return{
        type: actions.USER_REGISTRATION_FAILED
    }
}

//action for successfully register in system for using our application
export function userRegistrationSuccess(){
    return{
        type: actions.USER_REGISTRATION_SUCCESS
    }
}
