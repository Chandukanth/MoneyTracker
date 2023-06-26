import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from './src/views/Login/Login';
import SignUpForm from './src/views/Login/SignUp';
import DashBoard from './src/views/DashBoard';
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          {/* Login */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUpForm} />

          {/* DashBoard */}
          <Stack.Screen name="Dashboard" component={DashBoard} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
