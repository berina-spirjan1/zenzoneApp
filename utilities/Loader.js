import React, {Component} from "react";
import {
    View,
    Modal,
    ActivityIndicator,
    StyleSheet
} from "react-native";

export default class Loader extends Component{
    render(){
        return this.props.show ? (
            <Modal transparent animationType={"none"} visible={this.props.loading} onRequestClose={() => null}>
                <View style={[styles.modalBackground, { backgroundColor: `rgba(0,0,0,0.7)` }]}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator size={80} color="#363559" />
                    </View>
                </View>
            </Modal>
        ) : null;
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    activityIndicatorWrapper: {
        backgroundColor: "#93B4E5",
        height: 150,
        width: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});