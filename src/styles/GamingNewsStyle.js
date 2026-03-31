import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  indicator: {
    marginBottom: 20,
    fontSize: 14,
    color: "gray"
  },
  button: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "#fff"
  }
});