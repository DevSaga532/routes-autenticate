import "react-native-gesture-handler";
import { useEffect, useMemo, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { StackRouter } from "./app/router";
import { AuthContext, authReducer } from "./app/context";

export default function App() {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    userToken: null,
    isSignout: false,
  });

  useEffect(() => {
    const restoreToken = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        Alert.alert("Error", e.message);
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    restoreToken();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
