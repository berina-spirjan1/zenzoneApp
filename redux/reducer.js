import * as Types from './types';

const initialState = {
    loading: false,
    isError: false,
    isSuccess: false,
    userData: []
}

//receives the action and modifies the state to give us a new store
const reducer = (state = initialState, action) =>{
    switch (action.type){
        case Types.AUTH_STARTED:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.AUTH_FAILED:
            return state;
        case Types.AUTH_SUCCESS:
            return state;
        case Types.USER_REGISTRATION_STARTED:
            return state;
        case Types.USER_REGISTRATION_FAILED:
            return state;
        case Types.USER_REGISTRATION_SUCCESS:
            return state;
        case Types.SUCCESSFULLY_ADDED_ACTIVITY:
            return state;
        case Types.FAILED_ADDING_ACTIVITY:
            return state;
        case Types.STARTED_ADDING_ACTIVITY:
            return state;
        case Types.STARTED_UPDATING_ACTIVITY:
            return state;
        case Types.FAILED_UPDATING_ACTIVITY:
            return state;
        case Types.SUCCESSFULLY_UPDATED_ACTIVITY:
            return state;
        case Types.STARTED_DELETING_ACTIVITY:
            return state;
        case Types.FAILED_DELETING_ACTIVITY:
            return state;
        case Types.SUCCESSFULLY_DELETED_ACTIVITY:
            return state;
        case Types.STARTED_SENDING_REPORT_FOR_CHALLENGE :
            return state;
        case Types.FAILED_AT_SENDING_REPORT_FOR_CHALLENGE:
            return state;
        case Types.SENDING_REPORT_FOR_CHALLENGE_SUCCESS:
            return state;
        default:
            return state;
    }
}

export { reducer };
