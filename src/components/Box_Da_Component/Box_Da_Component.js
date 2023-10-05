import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

function Box_Da_Component() {
    return (
        <View style={styles.Box_Days}>
            <TouchableOpacity aria-checked style={styles.Day}>Seg</TouchableOpacity>
            <TouchableOpacity style={styles.Day}>Ter</TouchableOpacity>
            <TouchableOpacity style={styles.Day}>Qua</TouchableOpacity>
            <TouchableOpacity style={styles.Day}>Qui</TouchableOpacity>
            <TouchableOpacity style={styles.Day}>Sex</TouchableOpacity>
            <TouchableOpacity style={styles.Day}>Sab</TouchableOpacity>
        </View>
    )
}
export default Box_Da_Component;

const styles = StyleSheet.create({
    Box_Days: {
        gap: 10,
        flexDirection: 'row',
    },
    Day: {
        marginTop: 30,
        width: 60,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        textAlign: 'center',
        justifyContent: 'center',
    },
})