import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "./src/components/home";
import nextpage from "./src/components/nextpage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="nextpage" component={nextpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
