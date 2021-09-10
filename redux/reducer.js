import * as Types from './types';

const initialState = {
    contacts: []
}

export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case Types.AUTH_SUCCESS:
            return state;
        case Types.AUTH_FAILED:
            return state;
        case Types.FAILED_ADDING_ACTIVITY:
            return state;
        case Types.FAILED_AT_SENDING_REPORT_FOR_CHALLENGE:
            return state;
        case Types.FAILED_UPDATING_USER_INFORMATIONS:
            return state;
        case Types.USER_REGISTRATION_SUCCESS:
            return state;
        case Types.USER_REGISTRATION_FAILED:
            return state;
        case Types.STARTED_UPDATING_USER_INFORMATIONS:
            return state;
        case Types.SENDING_REPORT_FOR_CHALLENGE_SUCCESS:
            return state;
        case Types.SUCCESSFULLY_ADDED_ACTIVITY:
            return state;
    }
}

export { reducer };
