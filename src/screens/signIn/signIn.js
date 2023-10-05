import React, { useState, useEffect } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import {
  User2,
  Lock,
}from 'lucide-react-native';

import Axios from 'axios';

import Input_Component from '../../components/Input_Component/Input_Component';
import Buttom_Component from '../../components/Buttom_Component/Buttom_Component';
import Login_Erro_Component from '../../components/Login_Erro_Component/Login_Erro_Component';


function SignIn({navigation}) {
  const [value, setValue] = useState();
  const [User, setUser] = useState();
  const [err, setErr] = useState();


  const handleChargeValues = (value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };

  const handleChargeButtom = async () => {
    Axios.post('http://localhost:3333/users/login', {
        name: value.Name,
        password: value.Password 
    }).then((response) => {
     response.status !==400 && [ setUser(response.data), navigation.navigate('home')] || navigation.navigate('#');
    }).catch(() => {
      setErr( <Login_Erro_Component />)
    })
  };

  return (
    <View 
      style={styles.Container}
    >

      {err}
      <View
        style={styles.Area_Login}
      >
        <Text
          style={styles.Text_Login}
        >
          Login
        </Text>
        <Input_Component
          onChange_Input={handleChargeValues}
          Id_Input='Name'
          Icon_Input={<User2 size={20} />}
          Placeholder_Input='Nome'
        />
        <Input_Component
          onChange_Input={handleChargeValues}
          Id_Input='Password'
          Secure_Input={true}
          Icon_Input={<Lock size={20} />}
          Placeholder_Input='Senha'
        />
        <Buttom_Component
          Press_Buttom={() => handleChargeButtom()}
          Text_Buttom='Login'
        />
      </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('signUp')}
        >
          <Text
            style={styles.Text_SignUp}
          >
            Não tem conta? clique para Cadastrar-se
          </Text>
        </TouchableOpacity>
    </View>
  );
}

export default SignIn;

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
