import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5d6da", // fondo oscuro gamer
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#181818", // verde neón gamer
    marginBottom: 40,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#000000", // gris oscuro
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    width: "100%",
    alignItems: "center"
  },
  buttonText: {
    color: "#f1f5f9", // blanco suave
    fontSize: 16,
    fontWeight: "bold"
  }
});