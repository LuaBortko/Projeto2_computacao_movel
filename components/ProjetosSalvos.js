import * as React from 'react';
import { TextInput, Text, View,TouchableOpacity, StyleSheet, ImageBackground, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();


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
     <ImageBackground source={require('../assets/Tela2.png')} style={estilos.fundo} imageStyle={{ opacity: 0.5}}>
        <View style={estilos.borda}>
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
        </View>
     </ImageBackground>
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
      <ImageBackground source={require('../assets/Tela2.png')} style={estilos.fundo} imageStyle={{ opacity: 0.5}}>
          <View style={estilos.borda}>
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
          </View>
      </ImageBackground>
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
      <ImageBackground source={require('../assets/Tela2.png')} style={estilos.fundo} imageStyle={{ opacity: 0.5}}>
          <View style={estilos.borda}>
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
            </View>
      </ImageBackground>
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
      <ImageBackground source={require('../assets/Tela2.png')} style={estilos.fundo} imageStyle={{ opacity: 0.5}}>
          <View style={estilos.borda}>
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
          </View>
      </ImageBackground>
    )
  }
}

class Galeria extends React.Component {
  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name = "Projeto1" component ={Projeto1} options = {{
          headerRight: () => (
            <TouchableOpacity style={estilos.botaoS} onPress={() => this.props.navigation.navigate("Projeto2")}>
              <MaterialCommunityIcons name="arrow-right" color={"black"} size={24}/>
            </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen name = "Projeto2" component ={Projeto2} options = {{
          headerRight: () => (
            <TouchableOpacity style={estilos.botaoS} onPress={() => this.props.navigation.navigate("Projeto3")}>
              <MaterialCommunityIcons name="arrow-right" color={"black"} size={24}/>
            </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen name = "Projeto3" component ={Projeto3} options = {{
          headerRight: () => (
            <TouchableOpacity style={estilos.botaoS} onPress={() => this.props.navigation.navigate("Projeto4")}>
              <MaterialCommunityIcons name="arrow-right" color={"black"} size={24}/>
            </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen name = "Projeto4" component ={Projeto4} />
      </Stack.Navigator>
    )
  }
}

const estilos = StyleSheet.create({
  blocos:{ //pixels
    width:30,
    height:30,
    backgroundColor: '#FFFFFF',
    margin: 0
  },
  quadrado:{  //Linhas
    width: 180, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  fundo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borda:{
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 4,
    justifyContent: 'center', 
    alignItems: 'center',
    width: 200, // Defina a largura fixa
    height: 200, // Defina a altura fixa
  },
  botaoS: {
    margin:10
  }
})

export default Galeria;