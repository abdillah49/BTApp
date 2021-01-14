import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';

import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (email) => {
    setEmail(email)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  const handleLogin = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        console.log(resp);
        alert('Login successfully');
        navigation.navigate('Home')
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage)
    });
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.appname}>F&B Menu List Editor</Text>
      <Icon name="mail" size={60} style={styles.logo}/>
      
      <Input
        placeholder='Email'
        onChangeText={email => onChangeEmail(email)}
      />
      <Input
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={password => onChangePassword(password)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={{ color: "white" }}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.regMenu} onPress={() => navigation.navigate('Signup')}>Do not have account? Please Signup.</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#003087",
    width: '50%',
    padding: 10,
    color:"white",
  },
  logo: {
    alignItems: "center",
    color:"#e3050c",
        
  },
  appname: {
    alignItems: "center",
    color:"#003087",
    fontWeight:"bold",
    fontSize:30,
    paddingBottom: 20
  },

  regMenu: {
    alignItems: "center",
    color:"#003087",
    fontWeight:"100",
    
    paddingTop: 50
  },
  
})

export default Login;