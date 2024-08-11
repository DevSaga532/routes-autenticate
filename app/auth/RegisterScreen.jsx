import React, { useRef, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Platform,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export const RegisterScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (name.length < 1) {
      Alert.alert("Error", "El nombre es requerido.");
      return false;
    }
    if (email.length < 1) {
      Alert.alert("Error", "El correo electrónico es requerido.");
      return false;
    }
    if (password.length < 1) {
      Alert.alert("Error", "La contraseña es requerida.");
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    // Simula el registro, reemplaza con tu lógica de registro real
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          },
        },
      });

      if (error) {
        Alert.alert("Error", error.message);
      } else {
        console.log("Session:", session);
      }
    } catch (error) {
      Alert.alert("Error", "Algo salió mal. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.header, { paddingTop: height * 0.2 }]}>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.description}>
            Por favor, crea una cuenta para continuar
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="user"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="gray"
              onChangeText={(text) => setName(text)}
              value={name}
              textContentType="username"
            />
          </View>

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
              onChangeText={(text) => setEmail(text)}
              value={email}
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
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.submitButton}
            onPress={onSubmit}
          >
            <Text style={styles.submitButtonText}>
              {loading ? "Cargando..." : "Crear Cuenta"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.loginButton}
          >
            <FontAwesome5
              style={styles.loginIcon}
              name="torii-gate"
              size={32}
              color="black"
            />
            <Text style={styles.loginButtonText}>Ingresar</Text>
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
    paddingBottom: 40, // Aumenta el espacio en la parte inferior para evitar que el teclado cubra el contenido
  },
  header: {
    alignItems: "center",
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
    marginBottom: 20,
  },
  form: {
    marginHorizontal: 20,
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
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#376583",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20, // Añadido espacio superior al botón para separación adicional
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  footerText: {
    color: "gray",
    marginRight: 10,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginIcon: {
    marginRight: 10,
  },
  loginButtonText: {
    color: "#376583",
    fontSize: 18,
  },
});
