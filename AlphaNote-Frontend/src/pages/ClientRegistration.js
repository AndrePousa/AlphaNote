import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

const ClientRegistration = () =>{

  const imgbg='../assets/images/01.jpg';

  return(
    <ImageBackground
      source={require(imgbg)}
      style={styles.imgBack}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Cadastre-se
        </Text>
        <View style={styles.buttonArea}>
        <Button
          buttonStyle={styles.button}
          title="Adestrador"
            
        />
        <Button
          buttonStyle={styles.button}
          title="Tutor"   
        />
        </View>
      </View>
    </ImageBackground> 
  );
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },
  imgBack:{
    flex:1,
  },
  title:{
    color:'#fff',
    fontSize:25,
    textAlign:'center',
    marginTop:10,
    marginBottom: 30,
  },
  buttonArea:{
    flexWrap: "wrap",
    justifyContent:'center'
  },
  button:{
    borderRadius:5,
    backgroundColor:'#bab8b5',
    height:45,
    marginBottom:20,
    paddingLeft: 10,
    paddingRight: 10
  }
})


export default ClientRegistration;