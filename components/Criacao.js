import * as React from 'react';
import { TextInput, Text, View,TouchableOpacity, StyleSheet, ImageBackground, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import * as Haptics from 'expo-haptics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();

class Projetos extends React.Component{
  
  decide = (id) => {
    this.props.navigation.navigate('Criar', { projeto: id });
  };
  render(){
    return(
    <ImageBackground source={require('../assets/Tela2.png')} style={estilos.fundo} imageStyle={{ opacity: 0.5}}>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.home}>
         <MaterialCommunityIcons name="home" color={"#063970"} size={30}/>
        </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        <TouchableOpacity onPress={() => this.decide(1)} style={estilos.botaoP}><Text style={estilos.textoP}>{"Projeto1"}</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.decide(2)} style={estilos.botaoP}><Text style={estilos.textoP}>{"Projeto2"}</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.decide(3)} style={estilos.botaoP}><Text style={estilos.textoP}>{"Projeto3"}</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.decide(4)} style={estilos.botaoP}><Text style={estilos.textoP}>{"Projeto4"}</Text></TouchableOpacity>
      </View>
    </ImageBackground>
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

  pintar = (id) => {
    this.setState((prevState) => ({
      [id]: prevState[id] === '#FFFFFF' ? '#000000' : '#FFFFFF', 
    }));
  };
  /*Nessa função eu pego e comparo se o estado do id(nesse caso b1, b2 ...) é o da cor branca, ou preta e as inverto*/
  certeza = () => {
    this.gravar()
    /*
    Alert.alert(
      "Confirmação","Deseja mesmo Salvar?",
      [
        {
          text: "Não",
          onPress: () => console.log("Ação cancelada"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => this.gravar()
        }
      ],
      { cancelable: false } 
    );
    */
  }
  /*Cria um alerta com dois botões -> para o usuario ter que confirmar se quer msm salvar*/

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
      //Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      this.vibracao()
      /*Vibra o celular*/
      this.props.navigation.navigate("Projetos")
      
    } catch (erro) {
      alert("Erro"); 
    }
  }
  /*Função que grava na memoria do celular, foi necessario modificar a função, pois eu estava querendo salvar todos separadamente em uma mesma função, oque não é possivel-> para resolver criei um objeto que guarda os estados atuais dos botões e dps para guardar no AsyncStorage tive que transformar esse objeto em string pois senão a função não aceitaria*/

  async vibracao() {
    for (let i = 0; i < 5; i++) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
} 
/*Sem ser uma função assincrona pois ao fazer o for sem ele não conseguia executar todas(muito rapido) com o await o código espera
tbm foi necesario um timer para que não fosse processado muito rapidamente
*/

  render() {
    return (
      <View style={estilos.fundo2}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Menu")} style={estilos.home}>
          <MaterialCommunityIcons name="home" color={"#063970"} size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={estilos.volta}>
          <MaterialCommunityIcons name="arrow-left-thick" color={"#063970"} size={30}/>
          </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

          <TouchableOpacity onPress={()=>this.apagar()} style={estilos.home}>
          <MaterialCommunityIcons name="eraser" color={"#1d5999"} size={30}/></TouchableOpacity>
          <TouchableOpacity onPress={()=>this.fundo()} style={estilos.volta}>
          <MaterialCommunityIcons name="format-paint" color={"#1d5999"} size={30}/></TouchableOpacity>
        
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
        </View>
        <TouchableOpacity onPress={() => this.gravar()}
                style={estilos.botaoP}><Text style={estilos.textoP}>{"Salvar"}</Text></TouchableOpacity>
      </View>
    );
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

const estilos = StyleSheet.create({
  blocos:{ //pixels
    width:30,
    height:30,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
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
  fundo2:{ //fundos sem imagem
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5edda',
  },
  botaoP:{ //botão do menu projetos
    margin: 20,
    padding: 5,
    borderRadius: 18,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#063970',
    borderWidth: 5,
    backgroundColor: 'rgba(60, 110, 163, 0.3)',
    
  },
  textoP:{ //texto do botaoP
    fontSize: 30,
    color: '#063970',
    fontWeight: 'bold',
   
  },
  home:{ //botao menu
    margin: 30,
    borderColor: '#063970',
    borderWidth: 3,
    borderRadius: 5,
    position: 'absolute',
    top: 30,
    right: 0
  },
  volta:{ //botao volta
    margin: 30,
    borderColor: '#063970',
    borderWidth: 3,
    borderRadius: 5,
    position: 'absolute',
    top: 30,
    left: 0
  }
})

export default Criacao;