import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import imagen from "./assets/Budin.jpg";
import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  return (
    <>
      <SafeAreaView style={styles.statusBarBackground}>
        <Text style={styles.statusBarText}>TP 8</Text>
      </SafeAreaView>

      <View style={styles.container}>
        <ImageBackground
          source={imagen}
          style={styles.background}
          resizeMode="contain"
        ></ImageBackground>
        <View style={styles.container}>
          <Text style={styles.text}>Log In:</Text>
          <TextInput style={styles.textInput} placeholder="Ingresa tu nombre" />
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#efb810" }]}
          >
            <Text style={styles.text}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>¿Olvidaste tu clave?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: "#efb810",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statusBarText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  background: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "lightblue",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    flex: 6,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    borderWidth: 4,
    borderColor: "#efb810",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderRadius: 30,
  },
});