import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
 } from 'react-native';

import {
  Settings,
  User2,
} from 'lucide-react-native';

import SignIn from '../../screens/signIn/signIn';
import Logo from '../../../assets/logo-viacao-removebg-preview.png';

function Top_Tabs_Component() {
  return (
   <View  style={styles.Container}>
    <TouchableOpacity
      style={styles.Settings}
    >
      <Settings />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.Logo_Ancor}
    >
      <Image style={styles.Logo_Ancor} source={Logo}/>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.User_Info}
    >
      <User2 />
    </TouchableOpacity>
   </View>
  );
}

export default Top_Tabs_Component;


const styles = StyleSheet.create({
  Container: {
    width:'100%',
    height:60,
    backgroundColor: '#99b3ec',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:40,
    flexDirection:'row',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height:2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 5,
  },
  Settings:{
    width:24,
    height:24,
  },
  Logo_Ancor:{
    width:60,
    height:24,
  },
  User_Info:{
    width:24,
    height:24,
  },
});
