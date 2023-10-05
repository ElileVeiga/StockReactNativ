import React, { useState } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  User2,
  Lock,
  X
}from 'lucide-react-native';

import Axios from 'axios';

function Login_Erro_Component({ navigation }, props) {
  return (
    <View
      id='Err_PopUp'
      style={styles.Container}
    >
        <TouchableOpacity
            style={styles.Close}
            onPress={props.err_click_close}>
        <X /></TouchableOpacity>
        <Text
            style={styles.Text}
        >
            Cadastro não encontardo
        </Text>
    </View>
  );
}

export default Login_Erro_Component;

const styles = StyleSheet.create({
  Container:{
    color:'#fff',
    borderRadius:5,
    marginBottom:30,
    width:200,
    height:60,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Close:{
    marginTop:10,
    marginLeft:160,
  },
  Text:{
    fontSize:13,
    color:'#fff',
    marginBottom:20,
  }
});
