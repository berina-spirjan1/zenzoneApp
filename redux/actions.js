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

//action for started changing forgot password
export function forgotPasswordChangingStarted(){
    return{
        type: actions.FORGOT_PASSWORD_CHANGING_STARTED
    }
}

//action that means something went wrong when user tried to change his/her forgot password
export function forgotPasswordChangingFailed(){
    return{
        type: actions.FORGOT_PASSWORD_CHANGING_FAILED
    }
}

//action for successfully changed forgot password
export function forgotPasswordChangedSuccess(){
    return{
        type: actions.FORGOT_PASSWORD_CHANGED_SUCCESS
    }
}

//action for started changing password
export function changePasswordStarted(){
    return{
        type: actions.CHANGE_PASSWORD_STARTED
    }
}

//action for failed changing password
export function changePasswordFailed(){
    return{
        type: actions.CHANGE_PASSWORD_FAILED
    }
}

//action for successfully changed password
export function changePasswordSuccess(){
    return{
        type: actions.CHANGE_PASSWORD_SUCCESS
    }
}

//action for started user logout
export function userLogoutStarted(){
    return{
        type: actions.USER_LOGOUT_STARTED
    }
}

//action that means something went wrong when the user tried to logout
export function userLogoutFailed(){
    return{
        type: actions.USER_LOGOUT_FAILED
    }
}

//action for successfully logout user
export function userLogoutSuccess(){
    return{
        type: actions.USER_LOGOUT_SUCCESS
    }
}
