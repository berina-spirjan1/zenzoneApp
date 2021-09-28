import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function LocationPage() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    let longitude = 0;
    let latitude = 0;

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        longitude = JSON.stringify(location.coords.longitude);
        latitude = JSON.stringify(location.coords.latitude);
    }

    return (
        [latitude, longitude]
    );
}


