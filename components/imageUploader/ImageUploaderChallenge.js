import React, {useEffect, useState} from "react";
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default function ImageUploaderChallenge() {
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
            <TouchableOpacity style={styles.buttonContainer}
                              onPress={pickImage}>
                <FontAwesome5 name={'camera'}
                              size={45}
                              color={'#000'}
                              style={styles.icon}/>
                <Text style={styles.uploadImageText}>Upload image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 223.06, height: 223.06 }} />}
        </View>
    );
}


const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#6285B3',
        marginRight: 20,
        height: 150,
        padding: 50,
        borderRadius: 26,
        marginTop: 30,
        marginLeft: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.44,
        shadowRadius: 5,
        elevation: 10
    },
    uploadImageText:{
        textTransform: 'uppercase',
        textAlign:'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft:13
    },
    icon:{
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 0
    },
})
