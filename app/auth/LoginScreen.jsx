import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { AuthContext } from "../context";

export const LoginScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.header, { paddingTop: height * 0.2 }]}>
          <Text style={styles.title}>Ingresar</Text>
          <Text style={styles.description}>
            Por Favor Ingrese Sus Credenciales
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="envelope"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="@gmail.com"
              placeholderTextColor="gray"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome5
              name="lock"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="gray"
              autoCapitalize="none"
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={() => console.log("Ingresar")}
        >
          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>¿No tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.registerButton}
          >
            <FontAwesome5
              style={styles.arrowIcon}
              name="arrow-right"
              size={24}
              color="black"
            />
            <Text style={styles.registerButtonText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#376583",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  form: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D7D0CF",
    borderRadius: 16,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#D7D0CF",
    borderRadius: 16,
  },
  loginButton: {
    backgroundColor: "#376583",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    color: "gray",
    marginBottom: 10,
  },
  registerButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    marginRight: 10,
  },
  registerButtonText: {
    color: "#376583",
    fontSize: 18,
  },
});
