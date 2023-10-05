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
} from 'lucide-react-native';

import Top_Tabs_Component from '../../components/Top_Tabs_Component/Top_Tabs_Component';
import Buttom_Tabs_Component from '../../components/Buttom_Tabs_Component/Buttom_Tabs_Component';
import Buttom_Ref_Component from '../../components/Buttom_Ref_Component/Buttom_Ref_Component';

import Axios from 'axios';

function Home(User, props) {
  return (
    <View>
      <Top_Tabs_Component />
      <View
        style={styles.Container}
      >

        
        <Buttom_Ref_Component />
      </View>
      <Buttom_Tabs_Component/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
