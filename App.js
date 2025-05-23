import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.statusBarBackground}>
        <Text style={styles.text}>Hola Logueate PIBE!!</Text>
      </SafeAreaView>

      <View style={styles.container}>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  },

  statusBarBackground: {
    backgroundColor: "#efb810",
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
  },
});
