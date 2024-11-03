import * as React from 'react';
import { TextInput, Text, View, Button,TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


class Sobre extends React.Component{
  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{"AAAAAA"}</Text>
      <Button title="Voltar" onPress={()=>this.props.navigation.goBack()}></Button>
    </View>
    )
  }
}

class Menu extends React.Component{
  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Começar" onPress={()=>this.props.navigation.navigate("Principal")}></Button>
      <Button title="Sobre" onPress={()=>this.props.navigation.navigate("Sobre")}></Button>
    </View>
    )
  }
}

class Criar extends React.Component{
  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>
    )
  }
}

class Galeria extends React.Component{
  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>
    )
  }
}

class Principal extends React.Component {
  render() {
    return(
      <Tab.Navigator>
        <Tab.Screen name="Criar" component={Criar} 
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
      <Stack.Screen name = "Sobre" component = {Sobre}/>
     </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;
