import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Header from './Components/Header';
import Home from './Components/Home';
import PostWebView from './Components/PostWebView'
import { createStackNavigator } from '@react-navigation/stack';
import Post from './Components/Post';
import { RootStackParamList } from './types';


function App(): JSX.Element {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Hacker News' }} />
        <Stack.Screen name="Details" component={PostWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    marginBottom: 50
  }

})

export default App;


// {
//   return (
//     <SafeAreaView style={styles.main}>
//       <NavigationContainer>
//         <Header />
//         <Home />
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }