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
      b10: '#FFFFFF',
      b11: '#FFFFFF',
      b12: '#FFFFFF',
      b13: '#FFFFFF',
      b14: '#FFFFFF',
      b15: '#FFFFFF',
      b16: '#FFFFFF',
      b17: '#FFFFFF',
      b18: '#FFFFFF',
      b19: '#FFFFFF',
      b20: '#FFFFFF',
      b21: '#FFFFFF',
      b22: '#FFFFFF',
      b23: '#FFFFFF',
      b24: '#FFFFFF',
      b25: '#FFFFFF'
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
  apagar = () => {
    this.setState({
      b1: '#FFFFFF',
      b2: '#FFFFFF',
      b3: '#FFFFFF',
      b4: '#FFFFFF',
      b5: '#FFFFFF',
      b6: '#FFFFFF',
      b7: '#FFFFFF',
      b8: '#FFFFFF',
      b9: '#FFFFFF',
      b10: '#FFFFFF',
      b11: '#FFFFFF',
      b12: '#FFFFFF',
      b13: '#FFFFFF',
      b14: '#FFFFFF',
      b15: '#FFFFFF',
      b16: '#FFFFFF',
      b17: '#FFFFFF',
      b18: '#FFFFFF',
      b19: '#FFFFFF',
      b20: '#FFFFFF',
      b21: '#FFFFFF',
      b22: '#FFFFFF',
      b23: '#FFFFFF',
      b24: '#FFFFFF',
      b25: '#FFFFFF'
    });
  }
  fundo = () => {
    this.setState({
      b1: '#000000',
      b2: '#000000',
      b3: '#000000',
      b4: '#000000',
      b5: '#000000',
      b6: '#000000',
      b7: '#000000',
      b8: '#000000',
      b9: '#000000',
      b10: '#000000',
      b11: '#000000',
      b12: '#000000',
      b13: '#000000',
      b14: '#000000',
      b15: '#000000',
      b16: '#000000',
      b17: '#000000',
      b18: '#000000',
      b19: '#000000',
      b20: '#000000',
      b21: '#000000',
      b22: '#000000',
      b23: '#000000',
      b24: '#000000',
      b25: '#000000'
    });
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => { this.ler() });
  }

  async ler() {
    try {
      const salvo = await AsyncStorage.getItem(`estados_p${this.state.p}`);
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
          b9: parsedState.b9,
          b10: parsedState.b10,
          b11: parsedState.b11,
          b12: parsedState.b12,
          b13: parsedState.b13,
          b14: parsedState.b14,
          b15: parsedState.b15,
          b16: parsedState.b16,
          b17: parsedState.b17,
          b18: parsedState.b18,
          b19: parsedState.b19,
          b20: parsedState.b20,
          b21: parsedState.b21,
          b22: parsedState.b22,
          b23: parsedState.b23,
          b24: parsedState.b24,
          b25: parsedState.b25
        });
      }
    } catch (error) {
      alert("Erro ao recuperar dados");
    }
  }

  async gravar() {
    try {
      const estado = {
        b1: this.state.b1,
        b2: this.state.b2,
        b3: this.state.b3,
        b4: this.state.b4,
        b5: this.state.b5,
        b6: this.state.b6,
        b7: this.state.b7,
        b8: this.state.b8,
        b9: this.state.b9,
        b10: this.state.b10,
        b11: this.state.b11,
        b12: this.state.b12,
        b13: this.state.b13,
        b14: this.state.b14,
        b15: this.state.b15,
        b16: this.state.b16,
        b17: this.state.b17,
        b18: this.state.b18,
        b19: this.state.b19,
        b20: this.state.b20,
        b21: this.state.b21,
        b22: this.state.b22,
        b23: this.state.b23,
        b24: this.state.b24,
        b25: this.state.b25
      };
      await AsyncStorage.setItem(`estados_p${this.state.p}`, JSON.stringify(estado));
      /*Assim consigo guardar cada projeto em uma chave diferente */
      alert("Salvo com sucesso!!!");
    } catch (erro) {
      alert("Erro"); 
    }
  }
  /*Função que grava na memoria do celular, foi necessario modificar a função, pois eu estava querendo salvar todos separadamente em uma mesma função, oque não é possivel-> para resolver criei um objeto que guarda os estados atuais dos botões e dps para guardar no AsyncStorage tive que transformar esse objeto em string pois senão a função não aceitaria*/

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.botao}><Text>{"Menu"}</Text></TouchableOpacity>
       <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={estilos.botao}><Text>{"Voltar"}</Text></TouchableOpacity>
       <TouchableOpacity onPress={()=>this.apagar()} style={estilos.botao}><Text>{"Apaga"}</Text></TouchableOpacity>
       <TouchableOpacity onPress={()=>this.fundo()} style={estilos.botao}><Text>{"Fundo"}</Text></TouchableOpacity>
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
          <TouchableOpacity onPress={() => this.pintar('b4')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b5')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.quadrado}>
          <TouchableOpacity onPress={() => this.pintar('b6')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b7')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b8')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b9')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b10')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b10 }]}></Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.quadrado}>
          <TouchableOpacity onPress={() => this.pintar('b11')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b11 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b12')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b12 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b13')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b13 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b14')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b14 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b15')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b15 }]}></Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.quadrado}>
          <TouchableOpacity onPress={() => this.pintar('b16')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b16 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b17')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b17 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b18')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b18 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b19')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b19 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b20')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b20 }]}></Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.quadrado}>
          <TouchableOpacity onPress={() => this.pintar('b21')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b21 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b22')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b22 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b23')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b23 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b24')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b24 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pintar('b25')}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b25 }]}></Text>
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
      b10: '#FFFFFF',
      b11: '#FFFFFF',
      b12: '#FFFFFF',
      b13: '#FFFFFF',
      b14: '#FFFFFF',
      b15: '#FFFFFF',
      b16: '#FFFFFF',
      b17: '#FFFFFF',
      b18: '#FFFFFF',
      b19: '#FFFFFF',
      b20: '#FFFFFF',
      b21: '#FFFFFF',
      b22: '#FFFFFF',
      b23: '#FFFFFF',
      b24: '#FFFFFF',
      b25: '#FFFFFF'
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
          b9: parsedState.b9,
          b10: parsedState.b10,
          b11: parsedState.b11,
          b12: parsedState.b12,
          b13: parsedState.b13,
          b14: parsedState.b14,
          b15: parsedState.b15,
          b16: parsedState.b16,
          b17: parsedState.b17,
          b18: parsedState.b18,
          b19: parsedState.b19,
          b20: parsedState.b20,
          b21: parsedState.b21,
          b22: parsedState.b22,
          b23: parsedState.b23,
          b24: parsedState.b24,
          b25: parsedState.b25      
        });
      }
    } catch (error) {
      alert("Erro");
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
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b10 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b11 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b12 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b13 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b14 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b15 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b16 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b17 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b18 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b19 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b20 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b21 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b22 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b23 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b24 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b25 }]}></Text>
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
      b10: '#FFFFFF',
      b11: '#FFFFFF',
      b12: '#FFFFFF',
      b13: '#FFFFFF',
      b14: '#FFFFFF',
      b15: '#FFFFFF',
      b16: '#FFFFFF',
      b17: '#FFFFFF',
      b18: '#FFFFFF',
      b19: '#FFFFFF',
      b20: '#FFFFFF',
      b21: '#FFFFFF',
      b22: '#FFFFFF',
      b23: '#FFFFFF',
      b24: '#FFFFFF',
      b25: '#FFFFFF'
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
          b9: parsedState.b9,
          b10: parsedState.b10,
          b11: parsedState.b11,
          b12: parsedState.b12,
          b13: parsedState.b13,
          b14: parsedState.b14,
          b15: parsedState.b15,
          b16: parsedState.b16,
          b17: parsedState.b17,
          b18: parsedState.b18,
          b19: parsedState.b19,
          b20: parsedState.b20,
          b21: parsedState.b21,
          b22: parsedState.b22,
          b23: parsedState.b23,
          b24: parsedState.b24,
          b25: parsedState.b25
        });
      }
    } catch (error) {
      alert("Erro");
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
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b10 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b11 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b12 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b13 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b14 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b15 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b16 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b17 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b18 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b19 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b20 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b21 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b22 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b23 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b24 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b25 }]}></Text>
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
      b10: '#FFFFFF',
      b11: '#FFFFFF',
      b12: '#FFFFFF',
      b13: '#FFFFFF',
      b14: '#FFFFFF',
      b15: '#FFFFFF',
      b16: '#FFFFFF',
      b17: '#FFFFFF',
      b18: '#FFFFFF',
      b19: '#FFFFFF',
      b20: '#FFFFFF',
      b21: '#FFFFFF',
      b22: '#FFFFFF',
      b23: '#FFFFFF',
      b24: '#FFFFFF',
      b25: '#FFFFFF'
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
          b9: parsedState.b9,
          b10: parsedState.b10,
          b11: parsedState.b11,
          b12: parsedState.b12,
          b13: parsedState.b13,
          b14: parsedState.b14,
          b15: parsedState.b15,
          b16: parsedState.b16,
          b17: parsedState.b17,
          b18: parsedState.b18,
          b19: parsedState.b19,
          b20: parsedState.b20,
          b21: parsedState.b21,
          b22: parsedState.b22,
          b23: parsedState.b23,
          b24: parsedState.b24,
          b25: parsedState.b25
        });
      }
    } catch (error) {
      alert("Erro");
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
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b10 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b11 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b12 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b13 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b14 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b15 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b16 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b17 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b18 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b19 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b20 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b21 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b22 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b23 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b24 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b25 }]}></Text>
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
      b10: '#FFFFFF',
      b11: '#FFFFFF',
      b12: '#FFFFFF',
      b13: '#FFFFFF',
      b14: '#FFFFFF',
      b15: '#FFFFFF',
      b16: '#FFFFFF',
      b17: '#FFFFFF',
      b18: '#FFFFFF',
      b19: '#FFFFFF',
      b20: '#FFFFFF',
      b21: '#FFFFFF',
      b22: '#FFFFFF',
      b23: '#FFFFFF',
      b24: '#FFFFFF',
      b25: '#FFFFFF'
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
        b9: parsedState.b9,
        b10: parsedState.b10,
        b11: parsedState.b11,
        b12: parsedState.b12,
        b13: parsedState.b13,
        b14: parsedState.b14,
        b15: parsedState.b15,
        b16: parsedState.b16,
        b17: parsedState.b17,
        b18: parsedState.b18,
        b19: parsedState.b19,
        b20: parsedState.b20,
        b21: parsedState.b21,
        b22: parsedState.b22,
        b23: parsedState.b23,
        b24: parsedState.b24,
        b25: parsedState.b25
      });
    }
  } catch (error) {
    alert("Erro");
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
            <Text style={[estilos.blocos, { backgroundColor: this.state.b4 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b5 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b6 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b7 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b8 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b9 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b10 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b11 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b12 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b13 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b14 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b15 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b16 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b17 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b18 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b19 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b20 }]}></Text>
        </View>
        <View style={estilos.quadrado}>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b21 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b22 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b23 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b24 }]}></Text>
            <Text style={[estilos.blocos, { backgroundColor: this.state.b25 }]}></Text>
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
    backgroundColor: '#FFFFFF',
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
