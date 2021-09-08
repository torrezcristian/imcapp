import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Button, Alert, TouchableOpacity, RadioButton, Platform } from 'react-native';

const App2 = () => {
  const nome = { ph:'Nome', stl: styles.form }
  const peso = { ph:'Peso', stl: styles.form }
  const altura = { ph:'Altura', stl: styles.form }

    const valoresIniciais = {
      nome:'',
      peso:0,
      altura:0,
      nomeresultTexto:'',
      result:{toFixed:() => {
  }}}

  const [valores, mudaValores] = React.useState(valoresIniciais)

  const calcular = () => {
    let imc = valores.peso/(valores.altura*valores.altura)
    let s = valores
    s.result = imc
    mudaValores(s)

      if (s.result <16) {
        s.resultTexto = "Muito abaixo do peso"
      } else if (s.result <17) {
        s.resultTexto = "Abaixo do peso"
      } else if (s.result <18.5) {
        s.resultTexto = "Moderadamente abaixo do peso"
      } else if (s.result <25) {
        s.resultTexto = "Saudavél"
      } else if (s.result <30) {
        s.resultTexto = "Sobrepeso"
      } else if (s.result <35) {
        s.resultTexto = "Obesidade"
      } else if (s.result <40) {
        s.resultTexto = "Obesidade Grau II"
      } else {
        s.resultTexto = "Obesidade Grau III"
      }
  }

  const campos = {
    getName:(nomeTxt) => {
      mudaValores({...valores, nome:nomeTxt,})
    },
    getPeso:(pesoTxt) => {
      const pesoNum = Number(pesoTxt) 
      mudaValores({...valores, peso:pesoNum,}) 
    },
    getAltura:(alturaTxt) => {
      const alturaNum = Number(alturaTxt)
      mudaValores({...valores, altura:alturaNum,})
    },
  }

  return (
    <ImageBackground source={require("./assets/img/fundo3.jpg")} style={styles.fundo}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image source={require('./assets/img/logo.png')} style={styles.logo} />
          <Text style={styles.title}>{'Calculadora de IMC'}</Text>
        </View>
        <View style={styles.principal}>
          <TextInput placeholder={nome.ph} style={nome.stl} onChangeText={campos.getName}/>
          <TextInput placeholder={peso.ph} style={peso.stl} onChangeText={campos.getPeso}/>
          <TextInput placeholder={altura.ph} style={altura.stl} onChangeText={campos.getAltura}/>
          <TouchableOpacity style={styles.bt} onPress={calcular}><Text style={styles.texto}>Calcular IMC</Text></TouchableOpacity>

          <Text style={styles.result2}>{valores.nome}</Text>
          <Text style={styles.result}>{valores.result.toFixed(2)}</Text>
          <Text style={styles.result2}>{valores.resultTexto}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default App2

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
    backgroundColor: '#fff',
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
    },
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
