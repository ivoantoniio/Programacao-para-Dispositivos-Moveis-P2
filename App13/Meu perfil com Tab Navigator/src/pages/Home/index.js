import React from 'react';
import { View, Text,Image } from 'react-native';

let img = 'https://media-exp1.licdn.com/dms/image/C4D03AQEuLoKiHVn0wA/profile-displayphoto-shrink_800_800/0/1638882610984?e=1675296000&v=beta&t=yT8K5L1pJajHzO21PwNXvo23GsA_w3G5dNRbflqoPpQ';
 
export default function Home() {
 return (
   <View >
   <Image
          source={{ uri: img }}
          style={{  width: 200, height: 200, borderRadius: 200 / 2, marginLeft:70}}
        />
     <Text style={{fontSize: 15, margin: 20, textAlign: 'center'}}> Oii! Meu nome é Ivo</Text>
     <Text style={{fontSize: 15, margin: 20, textAlign: 'center'}}> É um prazer receber a sua visita, seja bem-vindo ao meu perfil!</Text>
     <Text style={{fontSize: 15, margin: 20, textAlign: 'center'}}> Nascido no Paraná no dia 07/07/2001, sou uma pessoal extremante apaixonada pela tecnologia!</Text>
     <Text style={{fontSize: 15, margin: 20, textAlign: 'center'}}> Selecione os botões abaixo e conheça mais sobre mim :)</Text>
   </View>
  );
}