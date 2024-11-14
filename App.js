import * as React from 'react';
import { TextInput, Text, View,TouchableOpacity, StyleSheet, ImageBackground, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Galeria from './components/ProjetosSalvos'
import Criacao from './components/Criacao'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class Menu extends React.Component{
  render(){
    return(
    <ImageBackground source={require('./assets/pincel2.png')} style={estilos.fundo} imageStyle={{ opacity: 0.4}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
        source={require('./assets/Logo_PixelArt.png')} // Caminho da imagem local
        style={{height: 500, width: 500}} // Estilos da imagem
      />
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Principal")} style={estilos.botaoM}><Text style = {estilos.textoM}>{"Começar"}</Text></TouchableOpacity>
        </View>
      </View>
  </ImageBackground>
    )
  }
}



class Principal extends React.Component {
  render() {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Criar" component={Criacao} 
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="square-edit-outline" color={color} size={size}/>)
          }}
        />
      <Tab.Screen name="Galeria" component={Galeria} 
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="image-multiple" color={color} size={size}/>)
          }}
        />
      </Tab.Navigator>
    )
  }
}

class App extends React.Component {

  render() {
    return(
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name = "Menu" component ={Menu} options = {{headerShown: false}}/>
      <Stack.Screen name = "Principal" component ={Principal} options = {{headerShown: false}}/>
     </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const estilos = StyleSheet.create({
  fundo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoM:{ //botão do menu
    margin: 15,
    padding: 5,
    backgroundColor: "#063970",
    borderRadius: 5,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3
  },
  textoM:{ //texto do botaoM
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#000000', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 10, 
  },

})

export default App;