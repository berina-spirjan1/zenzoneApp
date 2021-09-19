import {LOGOUT} from "../../configuration/config";
import store from "../../redux/store";
import {userLogoutFailed, userLogoutStarted, userLogoutSuccess} from "../../redux/actions";
import {AsyncStorage} from "react-native";

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
                    console.log("greska", res.status)
                } else {
                    await AsyncStorage.removeItem('jwt')
                    console.log("Successfully logout")
                    store.dispatch(userLogoutSuccess());
                }
            } catch (err) {
                console.log(err);
            }
        })
};
