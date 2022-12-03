import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Button} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
 
function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)
  const [finished, setFinished] = useState(false)
  

function Card({data, funcCarregarTarefas}){}

  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await funcCarregarTarefas();
  }

  const showAlert = async () => {
    const response = await api.patch(`/tasks/${id}`);
    await funcCarregarTarefas();

    Alert.alert(
    "Tarefa Finalizada com Sucesso!",
  );
  }
 

  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulario', { id: id, title: title, description: description, finished: finished, atualizarLista: funcCarregarTarefas});
  }

  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
       
        <Text style={styles.descricao}>{description}</Text>

        <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
          <Text>Editar</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <Text>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonConcluir} onPress={showAlert}>
          <Text>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
    fontSize: 18,
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
    backgroundColor: "tomato",
    marginTop: 10,
    marginBottom: 10
  },
  buttonConcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "#90EE90",
    marginVertical: 0,
    marginLeft: 10,
    marginBottom: 10
  }
});
 
export default Card;
