import * as React from 'react';
import { TextInput, Text, View, Button,TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
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
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.botao}><Text>{"Menu"}</Text></TouchableOpacity>
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

  async gravar() {
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
    await AsyncStorage.setItem(`estados_p${this.state.p}`, JSON.stringify(estado));
    /*Assim consigo guardar cada projeto em uma chave diferente */
    alert("Salvo com sucesso!!!");
  } catch (erro) {
    alert("Erro ao salvar os dados"); 
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

class Projeto1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      carregando: true,
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
/*A focusListener é usada para que toda vez que a tela entre em foco ela seja atualizada */
 componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => { this.ler() });
  }

  async ler() {
  try {
    const salvo = await AsyncStorage.getItem(`estados_p${1}`);
    if (salvo) {
      const parsedState = JSON.parse(salvo);
      this.setState({
        b1: parsedState.b1,
        b2: parsedState.b2,
        b3: parsedState.b3,
        b4: parsedState.b4,
        b5: parsedState.b5,
        b6: parsedState.b6,
        b7: parsedState.b7,
        b8: parsedState.b8,
        b9: parsedState.b9
      });
    }
  } catch (error) {
    console.error("Erro ao recuperar dados");
  }
}

  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.botao}><Text>{"Menu"}</Text></TouchableOpacity>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b1 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b2 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b3 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
        </View>
        <View style={estilos.setas}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Projeto2")}><MaterialCommunityIcons name="arrow-right" color={"black"} size={24}/></TouchableOpacity>
        </View>
    </View>
    )
  }
}

class Projeto2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      carregando: true,
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
/*A focusListener é usada para que toda vez que a tela entre em foco ela seja atualizada */
 componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => { this.ler() });
  }

  async ler() {
  try {
    const salvo = await AsyncStorage.getItem(`estados_p${2}`);
    if (salvo) {
      const parsedState = JSON.parse(salvo);
      this.setState({
        b1: parsedState.b1,
        b2: parsedState.b2,
        b3: parsedState.b3,
        b4: parsedState.b4,
        b5: parsedState.b5,
        b6: parsedState.b6,
        b7: parsedState.b7,
        b8: parsedState.b8,
        b9: parsedState.b9
      });
    }
  } catch (error) {
    console.error("Erro ao recuperar dados");
  }
}

  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.botao}><Text>{"Menu"}</Text></TouchableOpacity>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b1 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b2 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b3 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
        </View>
        <View style={estilos.setas}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}><MaterialCommunityIcons name="arrow-left" color={"black"} size={24}/></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Projeto3")}><MaterialCommunityIcons name="arrow-right" color={"black"} size={24}/></TouchableOpacity>
        </View>
    </View>
    )
  }
}

class Projeto3 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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
/*A focusListener é usada para que toda vez que a tela entre em foco ela seja atualizada */
 componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => { this.ler() });
  }
  async ler() {
  try {
    const salvo = await AsyncStorage.getItem(`estados_p${3}`);
    if (salvo) {
      const parsedState = JSON.parse(salvo);
      this.setState({
        b1: parsedState.b1,
        b2: parsedState.b2,
        b3: parsedState.b3,
        b4: parsedState.b4,
        b5: parsedState.b5,
        b6: parsedState.b6,
        b7: parsedState.b7,
        b8: parsedState.b8,
        b9: parsedState.b9
      });
    }
  } catch (error) {
    console.error("Erro ao recuperar dados");
  }
}

  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.botao}><Text>{"Menu"}</Text></TouchableOpacity>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b1 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b2 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b3 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
        </View>
        <View style={estilos.setas}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}><MaterialCommunityIcons name="arrow-left" color={"black"} size={24}/></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Projeto4")}><MaterialCommunityIcons name="arrow-right" color={"black"} size={24}/></TouchableOpacity>
        </View>
    </View>
    )
  }
}

class Projeto4 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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
/*A focusListener é usada para que toda vez que a tela entre em foco ela seja atualizada */
 componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => { this.ler() });
  }
 async ler() {
  try {
    const salvo = await AsyncStorage.getItem(`estados_p${4}`);
    if (salvo) {
      const parsedState = JSON.parse(salvo);
      this.setState({
        b1: parsedState.b1,
        b2: parsedState.b2,
        b3: parsedState.b3,
        b4: parsedState.b4,
        b5: parsedState.b5,
        b6: parsedState.b6,
        b7: parsedState.b7,
        b8: parsedState.b8,
        b9: parsedState.b9
      });
    }
  } catch (error) {
    console.error("Erro ao recuperar dados");
  }
}

  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.botao}><Text>{"Menu"}</Text></TouchableOpacity>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b1 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b2 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b3 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
        </View>
        <View style={estilos.setas}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}><MaterialCommunityIcons name="arrow-left" color={"black"} size={24}/></TouchableOpacity>
        </View>
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

class Galeria extends React.Component {
  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name = "Projeto1" component ={Projeto1} />
        <Stack.Screen name = "Projeto2" component ={Projeto2} />
        <Stack.Screen name = "Projeto3" component ={Projeto3} />
        <Stack.Screen name = "Projeto4" component ={Projeto4} />
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
  },
  setas:{
    flexDirection: 'row'
  }
})

export default App;
