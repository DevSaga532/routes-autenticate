import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ProfileScreen, SettingsScreen } from "../pages";
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
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </>
      ) : (
        <>
          {/* rutas públicas */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
