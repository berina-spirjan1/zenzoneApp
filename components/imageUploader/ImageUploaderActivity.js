import React, {
    useEffect,
    useState
} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


//function that is used for upload image for activities
export default function ImageUploaderActivity() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage('');
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.cardAddPhoto}
                              onPress={pickImage}>
                <FontAwesome5 name={'camera'}
                              size={20}
                              color={'#000000'}
                              style={styles.cameraIcon}/>
                <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 223.06, height: 223.06 }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    cardAddPhoto:{
        backgroundColor:'#6285b3',
        marginTop:15,
        width: 90,
        height: 90,
        borderRadius: 25,
        marginLeft:20,
        justifyContent: 'center',
        textAlign: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 3

    },
    cameraIcon:{
        justifyContent: 'center',
        marginTop:10,
        marginLeft:35
    },
    add:{
        textTransform:'uppercase',
        marginLeft:30
    },
})
