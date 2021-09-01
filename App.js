import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Button, Alert, TouchableOpacity, RadioButton, Platform } from 'react-native';

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = { altura: 0, peso: 0, nome: "", result: 0, resultTexto: "", nome: "" }
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.result = imc
    this.setState(s)

    if (s.result < 16) {
      s.resultTexto = "Muito abaixo do peso"
    } else if (s.result < 17) {
      s.resultTexto = "Abaixo do peso"
    } else if (s.result < 18.5) {
      s.resultTexto = "Moderadamente abaixo do peso"
    } else if (s.result < 25) {
      s.resultTexto = "Saudavél"
    } else if (s.result < 30) {
      s.resultTexto = "Sobrepeso"
    } else if (s.result < 35) {
      s.resultTexto = "Obesidade"
    } else if (s.result < 40) {
      s.resultTexto = "Obesidade Grau II"
    } else {
      s.resultTexto = "Obesidade Grau III"
    }
  }

  render() {
    const nome = { ph: 'Nome', stl: styles.form }
    const peso = { ph: 'Peso', stl: styles.form }
    const altura = { ph: 'Altura', stl: styles.form }

    return (
      <ImageBackground source={require("./assets/img/fundo3.jpg")} style={styles.fundo}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image source={require('./assets/img/logo.png')} style={styles.logo} />
            <Text style={styles.title}>{'Calculadora de IMC'}</Text>
          </View>
          <View style={styles.principal}>
            <TextInput placeholder={nome.ph} style={nome.stl} />
            <TextInput placeholder={peso.ph} style={peso.stl} />
            <TextInput placeholder={altura.ph} style={altura.stl} />
            <TouchableOpacity style={styles.bt} onPress={this.calcular}><Text style={styles.texto}>{'Calcular IMC'}</Text></TouchableOpacity>

            <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
            <Text style={styles.result2}>{this.state.nome} {this.state.resultTexto}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 30,
  },

  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  logo: {
    width: 70,
    height: 70,
    marginRight: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    paddingTop: 20,
  },

  principal: {
    width: 380,
    height: 420,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginBottom: 150,
  },

  form: {
    height: 40,
    width: 320,
    padding: 10,
    backgroundColor: 'rgb(250, 250, 250)',
    borderColor: '#eee',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#333',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    }
  },

  bt: {
    width: 320,
    padding: 20,
    backgroundColor: 'rgb(250, 250, 250)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  texto: {
    color: '#080',
    fontSize: 17,
    fontWeight: 'bold',
  },

  result: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    color: "#2C3A47",
    backgroundColor: 'rgba(250, 250, 250, 0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,
  },

  result2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    color: "#2C3A47",
    backgroundColor: 'rgba(250, 250, 250, 0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,
  },
});
