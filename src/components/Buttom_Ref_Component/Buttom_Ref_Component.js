import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
import {
    List
}from 'lucide-react-native'

function Buttom_Ref_Component({ navigation }) {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('estoque_almox')}
            style={styles.Container}>
            <View style={styles.icon}>
                <List/>
            </View>
            <Text style={styles.text}>
                Estoque
            </Text>
        </TouchableOpacity>
    )
}
export default Buttom_Ref_Component;

const styles = StyleSheet.create({
    Container: {
        borderRadius:3,
        padding:5,
        backgroundColor: '#003',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color:'#fff'
    },
    icon:{
        color:'#fff'
    }
});
