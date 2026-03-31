import { useCallback, useState } from "react";
import { ListVideoGames } from "../data/GameList";
import { TouchableOpacity, View, ActivityIndicator, FlatList, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GameListStyles";

const GameList = ({ navigation }) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    //I use this useFocusEffect so that a loading screen is always displayed while fetching the games. 
    // This ensures that if a new video game has been added, 
    // the list is forced to update and include the newly added game.
    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            const timer = setTimeout(() => {
                setGames([...ListVideoGames]);
                setLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }, [])
    );
//This part is responsible for taking the game's genre and comparing it with a value. 
// If it matches the expected value, it changes its color. 
// The toLowerCase is used to convert the value to lowercase, 
// even if it contains uppercase letters, so it can be compared consistently.
    const getGenreColor = (genre) => {
        if (genre.toLowerCase().includes("terror")) return "#ef4444";
        if (genre.toLowerCase().includes("accion")) return "#f97316";
        if (genre.toLowerCase().includes("rpg")) return "#8b5cf6";
        if (genre.toLowerCase().includes("deportes")) return "#22c55e";
        if (genre.toLowerCase().includes("sandbox")) return "#06b6d4";
        return "#64748b";
    };
//And this displays the loading screen to the user.
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <Text style={styles.loadingText}>Cargando juegos...</Text>
            </View>
        );
    }
//And this displays the basic information of the video game, along with a 
// button to view the details and another one in case the user wants to add the video game.
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={games}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const color = getGenreColor(item.genre);

                    return (
                        <View
                            style={[
                                styles.card,
                                { borderLeftWidth: 5, borderLeftColor: color }
                            ]}
                        >
                            <Text style={[styles.name, { color }]}>
                                {item.name}
                            </Text>

                            <View style={[styles.badge, { backgroundColor: color }]}>
                                <Text style={styles.badgeText}>
                                    {item.genre}
                                </Text>
                            </View>

                            <Text style={styles.text}>{item.platform}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    navigation.navigate("GameDetail", { game: item })
                                }
                            >
                                <Text style={styles.buttonText}>Ver detalles</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate("AddGame")}
            >
                <Text style={styles.buttonText}>Agregar Nuevo Juego</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default GameList;
