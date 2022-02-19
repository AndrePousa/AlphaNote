import  React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, ImageBackground} from 'react-native'; 

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [status, setStatus] = useState('');

  const imgbg='../../assets/images/01.jpg';

  const handleVerifyLogin = async () =>{
    setStatus('');

    const req = await fetch(' ',{
      method:'POST',
      body: JSON.stringify({
        email:email,
        password: password
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    });

    const json = await req.json(); 

    if(json.status == 'ok'){
      setStatus('Acesso liberado !');
    }
    else {
      setStatus('Acesso negado !')
    }
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
            title="Entrar"
            onPress={handleVerifyLogin}
          />

          <Text 
            style={styles.status}>
            {status}
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
  status:{
    margin:50,
    color:'#fff',
    fontSize:18,
    textAlign:'center'
  }
})

export default Login;

