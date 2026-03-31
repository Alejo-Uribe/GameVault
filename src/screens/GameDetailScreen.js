import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { styles } from "../styles/GameDetailStyles";

const GameDetail= ({route}) =>{
    const{game} = route.params;
    const{name, platform, genre, price, classification, description} = game;
    const[deseos, setDeseos] = useState([]);
    const[loading, setLoading] = useState(false)
    const[agregar, setAgregar] = useState(false);

    //This is responsible for checking whether the user wants to add the video game to the wishlist.
    const handleAddDeseos = () =>{
        setAgregar(true)
    }
//And if the user truly wants to add the game to the wishlist, this is responsible 
// for sending it and also simulating a loading screen while it is being submitted.
    useEffect(()=>{
        if(!agregar) return
            setLoading(true)
        const timer = setTimeout(() => {
            setDeseos(prev => [...prev, game]);
            setLoading(false);
            setAgregar(false);
        }, 2000);
        return () => clearTimeout(timer);
    },[agregar])
//And this displays the loading screen to the user as long as the condition is true.
    if(loading){
        return(
        <View style={styles.loadingContainer}>
            <ActivityIndicator/>
            <Text style={styles.loadingText}>Cargando Lista de Deseados...</Text>
        </View>
        );
    }
//And this displays all the details of the game that the user wants to view, 
// along with a button to add the video game to the wishlist.
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>Detalles del Juego</Text>
            <View style = {styles.card}>
            <Text>Nombre del juego: {name}</Text>
            <Text>Plataformas disponibles: {platform}</Text>
            <Text>Generos: {genre}</Text>
            <Text>Precio: {price}</Text>
            <Text>Clasificación: {classification}</Text>
            <Text>Descripcion: {description}</Text>
            <TouchableOpacity style={styles.button} onPress={handleAddDeseos}>
                <Text style={styles.buttonText}>Agregar a Deseados</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.listTitle}> ⭐ Lista de Deseados</Text>
            <FlatList
            data={deseos}
            keyExtractor = {(item) => item.id.toString()}
            renderItem={({item}) =>(
                <View style={styles.wishItem}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            >

            </FlatList>
            </ScrollView>
            </SafeAreaView>
        
    );
};

export default GameDetail;
