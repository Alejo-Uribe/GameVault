import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ececec", // oscuro gamer
        padding: 15
    },

    card: {
        backgroundColor: "#afafaf",
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5
    },

    title: {
        color: "#3d3b33",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10
    },

    text: {
        color: "#e2e8f0",
        marginBottom: 5
    },

    button: {
        backgroundColor: "#4f5752",
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        alignItems: "center"
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },

    listTitle: {
        color: "#363737",
        fontSize: 22,
        marginBottom: 10,
        fontWeight: "bold"
    },

    wishItem: {
        backgroundColor: "#334155",
        padding: 10,
        borderRadius: 10,
        marginBottom: 8
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    loadingText: {
        color: "#181414",
        marginTop: 10
    }
});