import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from 'react-native';

import {
  User2,
  Lock,
  RefreshCw,
  Focus,
  X,
  Check,
  ImagePlus
} from 'lucide-react-native';

import Top_Tabs_Component from '../../components/Top_Tabs_Component/Top_Tabs_Component';
import Buttom_Tabs_Component from '../../components/Buttom_Tabs_Component/Buttom_Tabs_Component';
import Buttom_Ref_Component from '../../components/Buttom_Ref_Component/Buttom_Ref_Component';
import Item_Estoque_Component from '../../components/Item_Estoque_Component/Item_Estoque_Component';

import Axios from 'axios';

function Estoque_almox(props) {
  const [value, setValue] = useState();
  const [res, setRes] = useState();

  useEffect(() => {
    Axios.get('http://localhost:3333/stockproducts')
      .then((response) => {
        setRes(response.data);
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  /*Camera*/
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturePhoto, setCapturePhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [boxCamera, setBoxCamera] = useState();
  const [uriImage, setUriImage] = useState(null);
  const [idsSet, setIdsSet] =useState();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  });

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission == false) {
    return <Text>Acesso Negado!</Text>;
  };

  const Buttom_Flip = () => {
    setType(
      type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    );
  };

  async function Picture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturePhoto(data.uri);
      setOpen(true);
      setUriImage(data.uri);
    }
  };

  const Opened_Camera = () => {
    setBoxCamera(
      <Camera
      animationType='slide'
      transparent={false}
      visible={open}
        type={type}
        ref={camRef}
      >
        <View style={styles.Box_Camera}>
          <TouchableOpacity
            onPress={() => Buttom_Flip()}
          >
            <RefreshCw />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={Picture}
          >
            <Focus />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBoxCamera(false)}>
            <X />
          </TouchableOpacity>
        </View>
      </Camera>
    )
  };

  const Close_Camera = () => {
    setOpen(false);
  };

  const Op_To_Photo = () => {
    setOpen(false)
    setBoxCamera(false)
  };

  /*Camera*/

  const handleChargeValues = (value) => { //quardar valores dos inputs
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };


  const handleChargeButtom = async () => { //Ação de insers de dados dos inputs no banco de dados
    Axios.post('http://localhost:3333/stockproducts', {
      cod_product: value.Cod_Item,
      name_product: value.Nome_Item,
      unit_type: value.Tipo_Unidade,
      grup: value.Grup,
      product_location: value.product_location,
      image_product: value.image_product
    }).then(() => {
      console.log('dados enviados para o banco de dados')
    }).catch(() => {
      alert('Preencha todos os campos')
    })
  };

  return (
    <View style={styles.Screen}>
      <Top_Tabs_Component />
      {/* Box Cadastro de Produtos */}
      
      <View
        style={styles.Container}
      >
        <View
          style={styles.Box_Cadastre_Products}
        >
          <TextInput
            id='Cod_Item'
            onChange={handleChargeValues}
            style={styles.input}
            placeholder='Cod.Item'
          />
          <TextInput
            id='Nome_Item'
            onChange={handleChargeValues}
            style={styles.input}
            placeholder='Nome.Item'
          />
          <TextInput
            id='Tipo_Unidade'
            onChange={handleChargeValues}
            style={styles.input}
            placeholder='Tipo_Unidade'
          />
          <TextInput
            id='Grup'
            onChange={handleChargeValues}
            style={styles.input}
            placeholder='Grupo'
          />
          <TextInput
            id='product_location'
            onChange={handleChargeValues}
            style={styles.input}
            placeholder='Localização_Item'
          />
          <TouchableOpacity
            onPress={() => Opened_Camera()}
            style={styles.Camera_Buttom}
          >
            <ImagePlus />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChargeButtom()}
            style={styles.Buttom_Cadastre}
          >Cadastrar</TouchableOpacity>

          <TextInput
            id='image_product'
            onChange={handleChargeValues}
            value={uriImage}
          /*style={{ display: 'none' }}*/
          />
        </View>
        {boxCamera}

        <View>

          {capturePhoto &&
            <Modal
              animationType='slide'
              transparent={false}
              visible={open}
            >
              <View style={styles.Modal_View}>
                <TouchableOpacity style={{ margin: 10 }} onPress={() => Close_Camera()}>
                  <X />
                </TouchableOpacity>
                <Image
                  style={{ width: '100%', height: 300, borderRadius: 20 }}
                  source={{ uri: capturePhoto }}
                  onChange={handleChargeValues}
                  id='image_product'
                />
                <TouchableOpacity style={{ margin: 10 }} onPress={() => Op_To_Photo()}>
                  <Check />
                </TouchableOpacity>
              </View>
            </Modal>
          }
        </View>
        {typeof res !== "undefined" &&
          res.map((value) => {
            return <Item_Estoque_Component
              ids={value.id}
              Cod_Product={value.cod_product}
              Name_Product={value.name_product}
              quant={value.values_product}
              unit_Type={value.unit_type}
              grup={value.grup}
              location={value.product_location}
            >
            </Item_Estoque_Component>
          })}
      </View>
      <Buttom_Tabs_Component />
    </View>
  );
}

export default Estoque_almox;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "space-between",
  },
  Container: {
    flex: 1,
    backgroundColor: '#fff1',

  },
  Box_Cadastre_Products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
    gap: 20,
    marginBottom: 30
  },
  Buttom_Cadastre: {
    borderColor: '#000',
    borderWidth: 3,
    padding: 3,
    borderRadius: 5
  },
  input: {
    width: 120,
    borderBottomColor: '#000',
    borderBottomWidth: 3,
  },
  Camera_Buttom: {
    width: 24,
    height: 24,
  },
  Camera: {
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  },
  Box_Camera: {
    flexDirection: 'row',
    marginTop: '80%',
    width: 200,
    gap: 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
  Modal_View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },

});
