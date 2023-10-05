import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';

function Input_Component(props) {
  return (
    <View 
      style={styles.Container} 
    >
      <View
        style={styles.Icon_Input}
      >{props.Icon_Input}</View>
      <TextInput
        id={props.Id_Input}
        onChange={props.onChange_Input}
        secureTextEntry={props.Secure_Input}
        placeholder={props.Placeholder_Input}
        style={styles.Area_Lenght}
      />
    </View>
  );
}

export default Input_Component;

const styles = StyleSheet.create({
  Container: {
    width:'100%',
    height:30,
    borderRadius:5,
    backgroundColor: '#8ebff7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  Icon_Input:{
    alignItems: 'center',
    justifyContent: 'center',
    width:30,
    height:'100%'
  },
  Area_Lenght:{
    paddingLeft:5,
    flex:1,
    borderBottomWidth:2,
    borderBottomColor:'#000',
    marginRight:10,
  },
});
