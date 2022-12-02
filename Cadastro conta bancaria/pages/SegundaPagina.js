import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
        Cadastro realizado com sucesso!!
        </Text>
        <Text style={styles.textStyle}>
          Nome cadastrado: {route.params.paramKey}
        </Text>
        <Text style={styles.textStyle}>
          Idade: {route.params.paramKey2}
        </Text>
        <Text style={styles.textStyle}>
          Sexo: {route.params.paramKey3}
        </Text>
        <Text style={styles.textStyle}>
          Escolaridade: {route.params.paramKey4}
        </Text>
        <Text style={styles.textStyle}>
          Limite: {route.params.paramKey5}
        </Text>
        <Text style={styles.textStyle}>
          Nacionalidade: {route.params.paramKey6}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
});