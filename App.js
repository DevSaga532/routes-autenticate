
import "react-native-gesture-handler";

import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { StackRouter } from "./app/router";

export default function App() {
  return (
    <NavigationContainer>
      <StackRouter/>
    </NavigationContainer>
  );
}
