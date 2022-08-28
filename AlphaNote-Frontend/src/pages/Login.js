import  React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacityBase} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-native-elements';

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  
  const imgbg='../assets/images/01.jpg';


  const handleVerifyLogin = async () =>{
    
  }

  const handleClientRegistration = () => {
    navigation.navigate('ClientRegistration');
  }
    

  return (
    <ImageBackground
      source={require(imgbg)}
      style={styles.imgBack}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>AlphaNote</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={t => setEmail(t)}
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Digite sua senha"
          value={password}
          onChange={p => setpassword(p)}
          secureTextEntry={true}
        />

        <Button
          buttonStyle={styles.enter}  
          title="Entrar"
          onPress={handleVerifyLogin}
        />

        <Text
          style={styles.registration}
          title="Cadastre-se"
          onPress={handleClientRegistration}
        >Cadastre-se
        </Text> 
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:20, 
  },
  imgBack:{
    flex:1,
  },
  header:{
    color:'#fff',
    fontSize:25,
    textAlign:'center',
    marginBottom: 30,
    marginTop:10,
  },
  input:{
    height:45,
    fontSize:18,
    color:'#fff',
    backgroundColor:'#f0f0f0',
    borderRadius:5,
    marginBottom:20,
    paddingLeft: 10,
    paddingRight: 10
  },
  registration:{
    margin:50,
    color:'#fff',
    fontSize:18,
    textAlign:'center'
  },
  enter:{
    backgroundColor:'#bab8b5',
    borderRadius:5,
    color:'#fff' 
  }
})

export default Login;

