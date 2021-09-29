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
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.AUTH_SUCCESS:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.USER_REGISTRATION_STARTED:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.USER_REGISTRATION_FAILED:
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.USER_REGISTRATION_SUCCESS:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.USER_LOGOUT_STARTED:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.USER_LOGOUT_FAILED:
            return{
              loading: false,
              isError: true,
              isSuccess: false,
              userData: action
            };
        case Types.USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.FORGOT_PASSWORD_CHANGING_STARTED:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FORGOT_PASSWORD_CHANGING_FAILED:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.FORGOT_PASSWORD_CHANGED_SUCCESS:
            return{
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.CHANGE_PASSWORD_STARTED:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.CHANGE_PASSWORD_FAILED:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.CHANGE_PASSWORD_SUCCESS:
            return{
                loading:false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.SUCCESSFULLY_ADDED_ACTIVITY:
            return{
                loading:false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.FAILED_ADDING_ACTIVITY:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.STARTED_ADDING_ACTIVITY:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_LOADED_ACTIVITIES:
            return{
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_LOADING_ACTIVITIES:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_LOADING_ACTIVITIES:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_LOADED_CATEGORIES:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_LOADING_CATEGORIES:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_LOADING_CATEGORIES:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_UPDATED_ACTIVITY:
            return{
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_UPDATING_ACTIVITY:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_UPDATING_ACTIVITY:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_DELETED_ACTIVITY:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_DELETING_ACTIVITY:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_DELETING_ACTIVITY:
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_LIKED_ACTIVITY:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_LIKING_ACTIVITY:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_LIKING_ACTIVITY:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_DISLIKED_ACTIVITY:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_DISLIKING_ACTIVITY:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_DISLIKING_ACTIVITY:
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_SENT_REPORT_DAILY:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_SENDING_REPORT_DAILY:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_SENDING_REPORT_DAILY:
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_REMOVED_LIKE:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_REMOVING_LIKE:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_REMOVING_LIKE:
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_REMOVED_DISLIKE:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_REMOVING_DISLIKE:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_REMOVING_DISLIKE:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_GOT_USER_INFO:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_GETTING_USER_INFO:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_GETTING_USER_INFO:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_UPDATED_USER_INFO:
            return{
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_UPDATING_USER_INFO:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_UPDATING_USER_INFO:
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_GOT_ACTIVITY_INFO:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_GETING_ACTIVITY_INFO:
            return{
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_GETTING_ACTIVITY_INFO:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_POSTED_COMMENT:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_POSTING_COMMENT:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_POSTING_COMMENT:
            return {
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_DELETED_COMMENT:
            return {
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.STARTED_DELETING_COMMENT:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        case Types.FAILED_DELETING_COMMENT:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.SUCCESSFULLY_GOT_DAILY_INFO:
            return{
                loading: false,
                isError: false,
                isSuccess: true,
                userData: action
            };
        case Types.FAILED_GETTING_DAILY_INFO:
            return{
                loading: false,
                isError: true,
                isSuccess: false,
                userData: action
            };
        case Types.STARTED_GETTING_DAILY_INFO:
            return {
                loading: true,
                isError: false,
                isSuccess: false,
                userData: action
            };
        default:
            return state;
    }
}

export { reducer };
