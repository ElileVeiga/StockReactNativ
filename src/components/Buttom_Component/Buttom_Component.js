import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

function Buttom_Component(props) {
  return (
    <TouchableOpacity
    onPress={props.Press_Buttom}
      style={styles.Container}
    >
        <Text
            style={styles.Text_Buttom}
        >{props.Text_Buttom}</Text>
    </TouchableOpacity>
  );
}

export default Buttom_Component;

const styles = StyleSheet.create({
  Container: {
    width:'80%',
    flex: 1,
    backgroundColor: '#8ebff7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    padding:5,
  },

});
