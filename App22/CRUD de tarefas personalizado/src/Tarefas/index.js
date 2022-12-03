import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Button, Pressable} from 'react-native';
import api from '../services/api';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
 
export default function Tarefas() {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect( () => {
  carregarTarefas()
  setLoading(false)
  }, [])
 
  const carregarTarefas = async () => {
    const response = await api.get('/tasks')
    setTarefas(response.data)
  }
 
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulario', {atualizarLista: carregarTarefas});
  }
 
  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
        <ActivityIndicator color="#09A6FF" size={40}/>
      </View>
    )
  }else{
    return(
      <View style={styles.container}>
        <Pressable style={styles.botao}
          onPress={irFormulario}>
          <Text style={styles.textButton}> Incluir </Text>
        </Pressable>
 
        <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString() }
        renderItem={ ({item}) => <Card data={item} funcCarregarTarefas={carregarTarefas} /> }
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo:{
    fontSize: 10,
    padding: 15,
  },
  descricao:{
    fontSize: 10,
    padding: 15,
  },
  buttonEditar: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "yellow",
    marginVertical: 0,
    marginLeft: 10
  },
  buttonExcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray",
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "red",
    marginTop: 10,
    marginBottom: 10
  },
  botao: {
     width: 100,
    height: 25,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#00FF00',
    margin: 10

  },
  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF'
  },

});
