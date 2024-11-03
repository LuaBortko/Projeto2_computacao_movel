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

class Projetos extends React.Component{
  
  decide = (id) => {
    this.props.navigation.navigate('Criar', { projeto: id });
  };
  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => this.decide(1)} style={estilos.botao}><Text>{"Projeto1"}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.decide(2)} style={estilos.botao}><Text>{"Projeto2"}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.decide(3)} style={estilos.botao}><Text>{"Projeto3"}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.decide(4)} style={estilos.botao}><Text>{"Projeto4"}</Text></TouchableOpacity>
    </View>
    )
  }
}

class Criar extends React.Component {
  constructor(props) {
    super(props);
    const { route } = props;
    const {projeto} = route.params;
    /*Parte onde eu trago um parametro de outra tela*/
    this.state = {
      p:projeto,
      b1: '#FFFFFF',
      b2: '#FFFFFF',
      b3: '#FFFFFF',
      b4: '#FFFFFF',
      b5: '#FFFFFF',
      b6: '#FFFFFF',
      b7: '#FFFFFF',
      b8: '#FFFFFF',
      b9: '#FFFFFF',
    };
  }
  /* 
   handlePress = (id) => { -> assim posso passar parametros para uma função
    alert(`Botão ${id} pressionado!`);
  };
*/
  pintar = (id) => {
    this.setState((prevState) => ({
      [id]: prevState[id] === '#FFFFFF' ? '#000000' : '#FFFFFF', 
    }));
  };
  /*Nessa função eu pego e comparo se o estado do id(nesse caso b1, b2 ...) é o da cor branca, ou preta e as inverto*/

  async gravar() { //Fazer dps uma confirmação se realmente quer salvar
  try {
    const estado = {
      p: this.state.p,
      b1: this.state.b1,
      b2: this.state.b2,
      b3: this.state.b3,
      b4: this.state.b4,
      b5: this.state.b5,
      b6: this.state.b6,
      b7: this.state.b7,
      b8: this.state.b8,
      b9: this.state.b9,
    };
    await AsyncStorage.setItem('estados', JSON.stringify(estado));
    alert("Salvo com sucesso!!!");
  } catch (erro) {
    alert("Erro"); 
  }
}
  /*Função que grava na memoria do celular, foi necessario modificar a função, pois eu estava querendo salvar todos separadamente em uma mesma função, oque não é possivel-> para resolver criei um objeto que guarda os estados atuais dos botões e dps para guardar no AsyncStorage tive que transformar esse objeto em string pois senão a função não aceitaria*/

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
       <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={estilos.botao}><Text>{"Voltar"}</Text></TouchableOpacity>
        <View style={estilos.quadrado}>
          <TouchableOpacity onPress={() => this.pintar('b1')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b1 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b2')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b2 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b3')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b3 }]}></Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.quadrado}>
          <TouchableOpacity onPress={() => this.pintar('b4')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b5')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b6')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.quadrado}>
          <TouchableOpacity onPress={() => this.pintar('b7')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b8')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b9')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.gravar()} style={estilos.botao}><Text>{"Salvar"}</Text></TouchableOpacity>
      </View>
    );
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

class Criacao extends React.Component {
  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name = "Projetos" component ={Projetos} options = {{headerShown: false}}/>
        <Stack.Screen name = "Criar" component ={Criar} options = {{headerShown: false}}/>
      </Stack.Navigator>
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

const estilos = StyleSheet.create({
  blocos:{
    width:30,
    height:30,
    borderColor: 'black',
    borderWidth: 1,
  },
  quadrado:{
    width: 180, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  botao:{ //mudar dps
    margin: 20,
    backgroundColor: '#4CAF50', 
    padding: 10, 
    borderRadius: 5, 
  }
})

export default App;
