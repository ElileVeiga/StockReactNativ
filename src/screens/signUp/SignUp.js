import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  User2,
  Lock,
  Mail
} from 'lucide-react-native';

import Axios from 'axios';

import Input_Component from '../../components/Input_Component/Input_Component';
import Buttom_Component from '../../components/Buttom_Component/Buttom_Component';

function SignUp({navigation}) {
  const [value, setValue] = useState();

  const handleChargeValues = (value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };

  const handleChargeButtom = () => {
    Axios.post('http://localhost:3333/users', {
      name: value.Name,
      password: value.Password,
      email: value.Email,
    }).then((post) => {
      post.data.name, post.data.password, post.data.email !== 'undefined' && navigation.navigate('signIn')
    })
  };

  return (
    <View 
      style={styles.Container}
    >
      <View
        style={styles.Area_Login}
      >
        <Text
          style={styles.Text_Login}
        >
          Cadastrar-se
        </Text>
        <Input_Component
          onChange_Input={handleChargeValues}
          Id_Input='Name'
          Icon_Input={<User2 size={20} />}
          Placeholder_Input='Nome'
        />

        <Input_Component
          onChange_Input={handleChargeValues}
          Id_Input='Email'
          Icon_Input={<Mail size={20} />}
          Placeholder_Input='E-mail'
        />

        <Input_Component
          onChange_Input={handleChargeValues}
          Id_Input='Password'
          Icon_Input={<Lock size={20} />}
          Placeholder_Input='Senha'
        />
        <Buttom_Component
          Press_Buttom={()=>handleChargeButtom()}
          Text_Buttom='Cadastrar-se'
        />
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate('signIn')}
        >
          <Text
            style={styles.Text_SignUp}
          >
            Já tenho um conta. clique para Entrar
          </Text>
        </TouchableOpacity>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text_Login:{
    fontSize:20,
    fontWeight:'bold'
  },
  Area_Login:{
    padding:10,
    backgroundColor:'#1179ef',
    borderRadius:5,
    gap:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text_SignUp:{
    marginTop:30,
    fontSize:10,
    fontWeight:'bold',
  },
});
