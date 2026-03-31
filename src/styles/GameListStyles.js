import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20
  },

   loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    loadingText: {
        color: "#000000",
        marginTop: 10
    },

  card: {
    backgroundColor: "#1b191b",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,


    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  badge: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5
  },

  badgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold"
  },

  text: {
    color: "#f1f5f9",
    fontSize: 14
  },

  button: {
    marginTop: 10,
    backgroundColor: "#a8a8a8",
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#786d6d",
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "#0f172a",
    fontWeight: "bold"
  }
});