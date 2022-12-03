import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image,ScrollView } from 'react-native';
import {styles} from './styles';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      endereco: [],
      cep: '',
      buscador: '',
    };
  }

  buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({endereco: data});
        this.setState({buscador: 'CEP: ' + this.state.cep + '\n' + 
        'Logradouro: ' +this.state.endereco.logradouro+ '\n' +
        'Bairro: ' +this.state.endereco.bairro+ '\n' +
        'Cidade: ' +this.state.endereco.localidade+ '\n' +
        'Estado: ' +this.state.endereco.uf
        });
        
      })
      .catch((erro) => {
        alert('CEP não encontrado');
      });
  };
      
  render() {
    return (
<ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Buscador de CEP</Text>

        <View>
        <Image style={[styles.image]}
        source={{uri:'https://images.unsplash.com/photo-1527377667-83c6c76f963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3135&q=80'}}
        />
        </View>

        <View>
          <TextInput style={styles.input}
            defaultValue={this.state.cep} placeholder="Digite o seu CEP" keyboardType="numeric" onChangeText={(cep) => {this.setState({cep});}}
          />
          </View>

        <View>
          <Pressable style={styles.button} onPress={() => this.buscarCep()}>
            <Text style={styles.textButton}> Buscar </Text>
          </Pressable>
        </View>

        <View style={styles.box}>
          <Text style={styles.result}>{this.state.buscador} </Text>
        </View>
        
      </View>
    </ScrollView>
    );
  }
}
export default App;
