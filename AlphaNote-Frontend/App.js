import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import { Provider } from 'react-redux'; //componente de comunicação

//const AppContainer = createAppContainer();

const App = () => {
  return (
    //<Provider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer> 
    //</Provider>
  );
}

export default App;

