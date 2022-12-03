import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
 
export default function Form({route}) {
  const [id, setId] = useState(route.params?.id)
  const [newTitle, setNewTitle] = useState(route.params?.title)
  const [newDescription, setNewDescription] = useState(route.params?.description)
  const [newFinished, setNewFinished] = useState(route.params?.finished)
 
  const navigation = useNavigation();
 
  const salvarTarefa = async () => {
   
    const body = JSON.stringify({title: newTitle, description: newDescription, finished: newFinished})
 
    if (id !== undefined){
      const response = await api.put(`/tasks/${id}`, body, {headers: {'Content-Type': 'application/json'}});
      await route.params?.atualizarLista()
    }
    else{
      const response = await api.post('/tasks', body, {headers: {'Content-Type': 'application/json'}});
      await route.params?.atualizarLista()
    }
 
    navigation.goBack()  
  }

 
 return (
   <View>
     
     <TextInput
        style={styles.input}
        defaultValue={route.params?.title}
        onChangeText={(text)=> setNewTitle(text)}
        placeholder="Titulo da Tarefa"
        placeholderTextColor="#808080"
      />
 
      <TextInput 
        multiline
        numberOfLines={4}
        style={styles.inpute}
        defaultValue={route.params?.description}
        onChangeText={(text)=> setNewDescription(text)}
        placeholder="Descrição"
        placeholderTextColor="#808080"
      />
 
      <Pressable style={styles.botao}
          onPress={salvarTarefa}>
          <Text style={styles.textButton}> Salvar </Text>
        </Pressable>
 
   </View>
  );
}
 
const styles = StyleSheet.create({
  input:{
    width: 350,
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    margin: 4,
    fontWeight: 'bold',
  },
  inpute:{
    width: 350,
    height: 150,
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    margin: 4,
    fontWeight: 'bold',
  },
   botao: {
     width: 100,
    height: 25,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#FF00FF',
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