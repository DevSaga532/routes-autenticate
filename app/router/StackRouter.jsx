import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ProfileScreen, SettingsScreen } from "../components";
import { LoginScreen, RegisterScreen } from "../auth";
import { useAuth } from "../context";

const Stack = createStackNavigator();

export const StackRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
      {isAuthenticated ? (
        <>
          {/* rutas privadas */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </>
      ) : (
        <>
          {/* rutas públicas */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
