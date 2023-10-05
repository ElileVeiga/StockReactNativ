import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import {
    AlertCircle,
    Save,
    Trash2,
    FilePlus2
} from 'lucide-react-native';

import Axios from 'axios';


function Item_Estoque_Component(props) {

    const [value, setValue] = useState();
    const [info, setInfo] = useState(false);
    const [expansive, setExpansive] = useState(false);


    const handleChargeValues = (value) => { //quardar valores dos inputs
        setValue((prevValue) => ({
          ...prevValue,
          [value.target.id]: value.target.value,
        }));
      };

    const HangeInput = async () => { //Ação de insers de dados dos inputs no banco de dados
        Axios.put(`http://localhost:3333/stockproducts/${props.ids}`,{
            values_product: value.value_product
        }).then((response) => {
          setValue(response.data);
          console.log(response.headers)
          console.log(response.data)
        }).catch((err) => {
          console.log(err)
          console.log(err.response.headers)
          console.log(err.response.data)
    
        })
      };

      const HangeInputDelet = async () => { //Ação de insers de dados dos inputs no banco de dados
        Axios.delete(`http://localhost:3333/stockproducts/${props.ids}`).then((response) => {
          setValue(response.data);
          console.log(response.headers)
          console.log(response.data)
        }).catch((err) => {
          console.log(err)
          console.log(err.response.headers)
          console.log(err.response.data)
    
        })
      };
    

    const Box_Expan = () => {
        return(
            <View style={styles.Box_Expansive}>
                <View style={styles.Area_Imagens}>
                <View 
                    style={styles.Imagem_Product}
                  ></View>
                    <Text style={styles.Qrcode}>QRcode/Cod.Barras</Text>
                </View>
                <View style={styles.Information}>
                    <View style={styles.Info_Colum_One}>
                        <Text>Tipo de Unidade: {props.unit_Type}</Text>
                        <Text>Grupo: {props.grup}</Text>
                    </View>
                    <View style={styles.Info_Colum_Two}>
                        <Text>Localização: {props.location}</Text>
                        <Text>/</Text>
                    </View>
                </View>
            </View>
        )
    };

    const Info_Product = ()=>{
        setInfo(!info);
        if(info == false){
            setExpansive(Box_Expan)
        } else {
            setExpansive(false)
        }
    };
    

    return (
    <View style={styles.Screen_Box}>
        <View style={styles.Container}>
            <Text style={{display:'none'}}>{props.ids}</Text>
            <Text style={styles.Cod_Product}>{props.Cod_Product}</Text>
            <Text style={styles.Name_Product}>{props.Name_Product}</Text>
            <View>
                <Text>Quantidade</Text>
                <View  style={styles.Box_Quant}>
                <Text>{props.quant}</Text>
                <TextInput
                    id='value_product'
                    onChange={handleChargeValues}
                    style={styles.Input_Text}
                    placeholder='N°' 

                    />
                </View>
            </View>
            <TouchableOpacity style={styles.Save} onPress={HangeInput}>
                <Save />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Info_Product} onPress={() =>Info_Product()}>
                <AlertCircle />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Delet_Product} onPress={() => HangeInputDelet()}>
                <Trash2 />
            </TouchableOpacity>
           <TouchableOpacity style={styles.Add_In_Oc_Product}   /*onPress={props.Add_In_Oc_Product}*/>
                <FilePlus2 />
            </TouchableOpacity>
        </View>
        {expansive}
    </View>
    );
}

export default Item_Estoque_Component;

const styles = StyleSheet.create({
    Screen_Box:{
        
    },
    Container: {
        flex:1,
        backgroundColor: '#fff1',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    Box_Quant: {
        flexDirection:'row',
        marginLeft:20,
        width:50,
        maxWidth:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input_Text: {
        width: 30,
        padding: 3,
        flex: 1
    },
    Box_Expansive:{
        backgroundColor:'#aeb0ae',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    Area_Imagens:{
        gap:30,
        flexDirection:'row'
    },
    Imagem_Product:{
        width:100,
        height:100,
        borderColor:'#000',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
    },
    Qrcode:{
        width:100,
        height:100,
        borderColor:'#000',
        borderWidth:2,
        alignItems:'center',
    },
    Information:{
        marginTop:10,
        alignItems:'center',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    Name_Product:{
        width:80,
        maxWidth:80,
        flexWrap:'wrap'
    },
    Cod_Product:{
        width:50,
        maxWidth:50,
    },
});
