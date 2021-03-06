import { LOGOUT } from "../../configuration/config";
import store from "../../redux/store";
import {
    userLogoutFailed,
    userLogoutStarted,
    userLogoutSuccess
} from "../../redux/actions";
import {
    Alert,
    AsyncStorage
} from "react-native";

//function that calls when user wants to logout
//we are sending only token and after logout is success all data from async storage will be cleared.
export const onLogoutHandler = async () => {

    let token = await AsyncStorage.getItem('jwt')
    token = JSON.parse(token)

    fetch(`${LOGOUT}`, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + token
        },
    })
        .then(async res => {
            try {
                store.dispatch(userLogoutStarted());

                const jsonRes = await res.json();

                console.log(jsonRes)
                if (res.status !== 200) {
                    store.dispatch(userLogoutFailed());
                    Alert.alert('Something went wrong. Try again.')
                }
                if(res.status===200){
                    await AsyncStorage.clear()
                    console.log("Successfully logout")
                    Alert.alert('You have been successfully logged out.')
                    store.dispatch(userLogoutSuccess());
                }
            } catch (err) {
                console.log(err);
            }
        })
};
