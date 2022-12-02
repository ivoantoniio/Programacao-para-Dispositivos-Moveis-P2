import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,View,Text,TextInput,Button,ScrollView} from 'react-native';

const FirstPage = ({ navigation }) => {
  const [userName, setUserName,] = useState('');
  const [userIdade, setUserIdade,] = useState('');
  const [userSexo, setUserSexo,] = useState('');
  const [userEscolariedade, setUserEscolariedade,] = useState('');
  const [userLimite, setUserLimite,] = useState('');
  const [userNacionalidade, setUserNacionalidade,] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Cadastro - conta bancaria
        </Text>

        <Text style={styles.textStyle}>
          Nome Completo
        </Text>
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Digite seu nome completo...'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Idade
        </Text>
        <TextInput
          value={userIdade}
          onChangeText={(useridade) => setUserIdade(useridade)}
          placeholder={'Digite sua idade...'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Sexo:
        </Text>
        <TextInput
          value={userSexo}
          onChangeText={(usersexo) => setUserSexo(usersexo)}
          placeholder={'Digite seu sexo...'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Escolariedade
        </Text>
        <TextInput
          value={userEscolariedade}
          onChangeText={(userescolariedade) => setUserEscolariedade(userescolariedade)}
          placeholder={'Digite sua escolaridade...'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Selecione seu Limite
        </Text>
        <TextInput
          value={userLimite}
          onChangeText={(userlimite) => setUserLimite(userlimite)}
          placeholder={'Digite seu limite...'}
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}>
          Nacionalidade
        </Text>
        <TextInput
          value={userNacionalidade}
          onChangeText={(usernacionalidade) => setUserNacionalidade(usernacionalidade)}
          placeholder={'Digite sua nacionalidade...'}
          style={styles.inputStyle}
        />

        <Button color="#efb810" style={styles.inputButton}
          title="$ Cadastrar $"
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName,
              paramKey2: userIdade,
              paramKey3: userSexo,
              paramKey4: userEscolariedade,
              paramKey5: userLimite,
              paramKey6: userNacionalidade,
            })
          }
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 25,
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 18,
    marginVertical: 15,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#50c878',
    placeholderTextColor: '#FFF',
    borderRadius: 15,
    fontWeight: 'bold'
  },
  inputButton: {
    height: 80,
    padding: 10,
    backgroundColor: '#d3d3d3'
  }
});