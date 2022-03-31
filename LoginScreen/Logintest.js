import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
 
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      correo   : '',
      password: '',
    }
  }
  
  render() {
    return (
      <View style={styles.container}>

       <View style={styles.ContainerImage}>
         <Image source={{uri: 'https://cdn57209327.blazingcdn.net/images/logos/12-08-2021_1046am188da69ba7b9d3c484ad.jpg'}}
         style={{width: 200, height: 200}} />
        </View>
       
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Correo Electronico"
              keyboardType="email-address"
              onChangeText={(correo) => this.setState({correo})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Contraseña"
              secureTextEntry={true}
        
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Iniciar Sesion</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer}>
            <Text>Olvidaste la Contraseña?</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020202',
  },
  ContainerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#898989',
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#898989',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:175,
  },
  loginButton: {
    backgroundColor: "#0C0C0C",
  },
  loginText: {
    color: 'white',
  }
});