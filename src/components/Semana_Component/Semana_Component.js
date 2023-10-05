import React, {useState}from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import{
    ChevronDown
}from 'lucide-react-native'

function Semana_Component() {
    const [Timin, setTimin] = useState(0);

    const Add_Buttom_Time = () => {
        if (Timin >= 60) {
            setTimin(0)
        } else {
            setTimin(Timin + 1);
        }
    };
    const Remove_Buttom_Time = () => {
        if (Timin <= 0) {
            setTimin(60)
        } else {
            setTimin(Timin - 1);
        }
    };


    return (
        <View style={styles.Component_Semana}>
            <View style={styles.Title_Semana}>
                <Text style={styles.Text_Title_Semana}>Seg</Text>
                <TouchableOpacity 
                    
                    style={styles.Open_Close}><ChevronDown /></TouchableOpacity>
            </View>
            <View
                id="View_Structure"
                style={styles.Row_Training}>
                <TouchableOpacity style={styles.Check_Training}></TouchableOpacity>
                <Text style={styles.Type_Training}>A</Text>
                <Text style={styles.Text_Time_Training}>Tempo de Treino</Text>
                <TouchableOpacity
                    onPress={() => Add_Buttom_Time()}
                    style={styles.Buttom_Time}>+</TouchableOpacity>
                <Text style={styles.Time_in_min}>{Timin} MIN</Text>
                <TouchableOpacity
                    onPress={() => Remove_Buttom_Time()}
                    style={styles.Buttom_Time}>-</TouchableOpacity>
            </View>
        </View>
    )
}

export default Semana_Component;

const styles = StyleSheet.create({
    Component_Semana: {
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000'
    },
    Title_Semana: {
        flexDirection: 'row',
        gap: 10,
    },
    Row_Training: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    Type_Training: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    Check_Training: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        textAlign: 'center',
        justifyContent: 'center',
    },
    Text_Time_Training: {
        fontSize: 25,
    },
    Buttom_Time: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        textAlign: 'center',
        justifyContent: 'center',
    },
    Time_in_min: {
        fontSize: 20,
    },
})