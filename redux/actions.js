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

//action for started adding new activity
export function startedAddingActivity(){
    return{
        type: actions.STARTED_ADDING_ACTIVITY
    }
}

//action that means something went wrong when the user tries to add new activity
export function failedAddingActivity(){
    return{
        type: actions.FAILED_ADDING_ACTIVITY
    }
}

//action for successfully added new activity
export function successfullyAddedActivity(){
    return{
        type: actions.SUCCESSFULLY_ADDED_ACTIVITY
    }
}

//action for started loading activities
export function startedLoadingActivities(){
    return{
        type: actions.STARTED_LOADING_ACTIVITIES
    }
}

//action that means something went wrong at loading activities
export function failedAtLoadingActivities(){
    return{
        type: actions.FAILED_LOADING_ACTIVITIES
    }
}

//action for successfully loaded activities
export function successfullyLoadedActivities(){
    return{
        type: actions.SUCCESSFULLY_LOADED_ACTIVITIES
    }
}


//action for started loading categories
export function startedLoadingCategories(){
    return{
        type: actions.STARTED_LOADING_CATEGORIES
    }
}

//action that means something went wrong at loading categories
export function failedAtLoadingCategories(){
    return{
        type: actions.FAILED_LOADING_CATEGORIES
    }
}

//action for successfully loaded activities
export function successfullyLoadedCategories(){
    return{
        type: actions.SUCCESSFULLY_LOADED_CATEGORIES
    }
}

//action for started liking activity
export function startedLikingActivity(){
    return{
        type: actions.STARTED_LIKING_ACTIVITY
    }
}

//action that means something went wrong when the user started to like activity
export function failedAtLikingActivity(){
    return{
        type: actions.FAILED_LIKING_ACTIVITY
    }
}

//action for successfully liked acitivity
export function successfullyLikedActivity(){
    return{
        type: actions.SUCCESSFULLY_LIKED_ACTIVITY
    }
}

//action that means the activity is previously liked
export function previouslyLikedActivity(){
    return{
        type: actions.PREVIOUSLY_LIKED
    }
}

//action for started disliking activity
export function startedDislikingActivity(){
    return{
        type: actions.STARTED_DISLIKING_ACTIVITY
    }
}

//action that means something went wrong when the user started to dislike activity
export function failedAtDislikingActivity(){
    return{
        type: actions.FAILED_DISLIKING_ACTIVITY
    }
}

//action for successfully disliked activity
export function successfullyDislikedActivity(){
    return{
        type: actions.SUCCESSFULLY_DISLIKED_ACTIVITY
    }
}

//action that means the activity is previously disliked
export function previouslyDislikedActivity(){
    return{
        type: actions.PREVIOUSLY_DISLIKED
    }
}
