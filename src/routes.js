import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

import Home from "./pages/Main";
import Looks from "./pages/Looks";

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Looks" component={Looks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
