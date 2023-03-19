const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Screen1 from "./screens/Screen1";
import SingIn from "./screens/SingIn";
import SingUp from "./screens/SingUp";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import SingIn1 from "./screens/SingIn1";
import SingUp1 from "./screens/SingUp1";
import ForgotPassword from "./screens/ForgotPassword";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    "Akaya Kanadaka": require("./assets/fonts/Akaya_Kanadaka.ttf"),
    "Akaya Kanadaka_regular": require("./assets/fonts/Akaya_Kanadaka_regular.ttf"),
    Allison: require("./assets/fonts/Allison.ttf"),
    Allison_regular: require("./assets/fonts/Allison_regular.ttf"),
    "Abyssinica SIL": require("./assets/fonts/Abyssinica_SIL.ttf"),
    "Abyssinica SIL_regular": require("./assets/fonts/Abyssinica_SIL_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Screen"
              component={Screen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingIn"
              component={SingIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingUp"
              component={SingUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen1"
              component={Screen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingIn1"
              component={SingIn1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingUp1"
              component={SingUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
