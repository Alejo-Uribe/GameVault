import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#d2d0d0",
        padding: 15
    },


    title: {
        color: "#1e1e1e",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },

    label: {
        color: "#ffffff",
        marginTop: 10
    },

    input: {
        backgroundColor: "#727171",
        color: "#fff",
        padding: 10,
        borderRadius: 10,
        marginTop: 5
    },

    button: {
        backgroundColor: "#42574b",
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center"
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    loadingText: {
        color: "#fff",
        marginTop: 10
    }
});