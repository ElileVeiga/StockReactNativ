import React from "react";
import { View, StyleSheet, Text } from "react-native";


function CheckBox_Component() {
    return(
        <View
        style={styles.Component}
        >
            <Text>tst</Text>
        </View>
    )
};
export default CheckBox_Component;

const styles = StyleSheet.create({
    Component:{
        justifyContent:'center',
        flex:1,
        alignItems:'center',
    },
})
