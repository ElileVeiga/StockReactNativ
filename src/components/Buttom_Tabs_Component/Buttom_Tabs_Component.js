import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native';

import {
  Settings,
  Home,
  User2,
  ChevronLeft,
  ClipboardList ,
  MessageCircle,
  Plus
} from 'lucide-react-native';


function Buttom_Tabs_Component({ navigation }) {
  return (
   <View  style={styles.Container}>
    <TouchableOpacity
    onPress={() => navigation.navigate('home')}
      style={styles.Home}
    >
      <Home />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.Back}
    >
        <ChevronLeft />
    </TouchableOpacity >
    <TouchableOpacity
      activeOpacity={0.70}
      style={styles.Add_Training}
      onPress={() => navigation.navigate('addTrainig')}
      >
        <Plus/>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('list  ')}
      style={styles.ClipboardList}
    >
      < ClipboardList />
    </TouchableOpacity>
    <TouchableOpacity style={styles.Chat}> 
        <MessageCircle />
    </TouchableOpacity>
   </View>
  );
}

export default Buttom_Tabs_Component;


const styles = StyleSheet.create({
  Container: {
    zIndex:10,
    width:'100%',
    height:60,
    backgroundColor: '#99b3ec',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:40,
    flexDirection:'row',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: -5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 5,
  },
  Add_Training:{
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: -5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:50,
    marginBottom:58,
  },
});
