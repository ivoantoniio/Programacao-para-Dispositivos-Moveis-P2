import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';

let img = 'https://media-exp1.licdn.com/dms/image/C4D03AQEuLoKiHVn0wA/profile-displayphoto-shrink_800_800/0/1638882610984?e=1675296000&v=beta&t=yT8K5L1pJajHzO21PwNXvo23GsA_w3G5dNRbflqoPpQ';


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem vindo!!! </Text>
      <Button
        title="Abrir Menu"
        color="#ff5c5c"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      
    </View>
  );
}

function Pessoal() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <Text style ={{ fontSize: 20, margin: 1}}></Text>
        Paranaense, nascido na cidade de Maringá no dia 07/07/2001!
    </View>
  );
}

function Formacao() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
     <Text style ={{ fontSize: 20, margin: 1}}></Text>
       Atualmente estudante universitário na FATEC Praia Grande.
    </View>
  );
}

function Experiencia() {
  return (
    <View style={{ flex: 1,}}>
        <Text style ={{ fontSize: 20, margin: 1}}></Text>
        Scrum Master na IBM.
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
     <Image
          source={{ uri: img }}
          style={{  width: 200, height: 200, borderRadius: 200 / 2, marginLeft:30}}
        />
        <view style={{marginLeft:30, marginTop: 20}}>Ivo Antonio Esteves Coelho</view>
      <DrawerItemList {...props} />      
     
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    

    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Página Inicial" component={Feed} />
      <Drawer.Screen name="Sobre mim" component={Pessoal} />
      <Drawer.Screen name="Formação" component={Formacao} />
      <Drawer.Screen name="Experiência Profissional" component={Experiencia} />
    </Drawer.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
    
      <MyDrawer />
    </NavigationContainer>
  );
}