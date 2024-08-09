import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ProfileScreen, SettingsScreen } from "../components";
import { LoginScreen, RegisterScreen } from "../auth";

const Stack = createStackNavigator();

export const StackRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />

      {/* auth */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
