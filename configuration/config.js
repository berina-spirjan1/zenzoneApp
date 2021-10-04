export const BASE_URL = 'https://vucko-1049-backend.zendev.se/';
export const API_URL = 'https://vucko-1049-backend.zendev.se/api';

//authentication
export const REGISTER =`${API_URL}/register`;
export const LOGIN = `${API_URL}/login`;
export const LOGOUT = `${API_URL}/logout`;

//user
export const USER = `${API_URL}/user`;
export const USER_UPDATE = `${USER}/update`;

//activity
export const ACTIVITY = `${API_URL}/activity`;
export const SINGLE_ACTIVITY = `${API_URL}/activity`
export const SEARCH_ACTIVITIES_BY_TITLE = `${ACTIVITY}/titles`

//category
export const CATEGORY = `${API_URL}/category`;

//likes and dislikes
export const LIKE = `${API_URL}/activity/like`;
export const DISLIKE = `${API_URL}/activity/dislike`

//comments
export const COMMENT = `${ACTIVITY}/comment`;

//my activities
export const MY_ACTIVITIES = `${API_URL}/myactivities`;

//daily challenge
export const DAILY_CHALLENGE = `${API_URL}/dailychallenge`;

export const CHANGE_PASSWORD = `${API_URL}/change-password`;
export const FORGOT_PASSWORD = `${API_URL}/forget-password`;





