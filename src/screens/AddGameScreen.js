import { useState } from "react";
import { Alert, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { ScrollView, Text , View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ListVideoGames} from "../data/GameList";
import { ActivityIndicator } from "react-native";
import { styles } from "../styles/AddGameStyles";

const AddGame = ({navigation}) => {
    //We use useState to initialize the input values as simple empty values.
    const [name, setName] = useState('');
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');
    const [classification, setClassification] = useState('');
    const [description, setDescription] = useState('');
    const [refresh, setRefresh] = useState(false);

    //This is responsible for verifying that no field is empty, and if the condition is met, 
    // it creates an object with the data and sends it to be stored in the list.
    const VerifyInformation = () =>{
        if(!name.trim() || !platform.trim() || !genre.trim() || !price.trim() || !classification.trim() || !description.trim()){
            Alert.alert("Los datos no pueden estár incompletos");
            return;
        }
        else{
            const NewGame = {
                id: ListVideoGames.length +1,
                name,
                platform,
                genre,
                price,
                classification,
                description
            }
            ListVideoGames.push(NewGame);

            setRefresh(true);
            setTimeout(() => {
                setRefresh(false);
                navigation.goBack();
            }, 1000);
            
            Alert.alert("Se ha agregado el juego" + name);
            setName('');
            setPlatform('');
            setGenre('');
            setPrice('');
            setClassification('');
            setDescription('');
            
        }
    }
    //Responsible for clearing the data stored in the variables, leaving them empty.
    const Limpiar = () =>{
        setName('');
        setPlatform('');
        setGenre('');
        setPrice('');
        setClassification('');
        setDescription('');
    };

    //This shows a loading indicator to simulate that the game is being added to the list.
    if(refresh){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator/>
                <Text style={styles.loadingText}>Enviando Juego...</Text>
            </View>
        )
        }
        //And the return, which is responsible for displaying the form to fill in the necessary values to create a game.
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <Text style={styles.title}>Agregar Videojuego</Text>

                    <Text style={styles.label}>Nombre del Videojuego</Text>
                    <TextInput style={styles.input} 
                    placeholder = "Ej: God of war"
                    value={name}
                    onChangeText={setName}
                    >
                    </TextInput>

                    <Text style={styles.label}>Plataformas</Text>
                    <TextInput style= {styles.input} 
                    placeholder = "PS5, XBOX, PC"
                    value={platform}
                    onChangeText={setPlatform}
                    >
                    </TextInput>

                    <Text style={styles.label}>Generos</Text>
                    <TextInput style={styles.input} 
                    placeholder = "Terror, Accion"
                    value={genre}
                    onChangeText={setGenre}
                    >
                    </TextInput>

                    <Text style={styles.label}>Precio</Text>
                    <TextInput style={styles.input}
                    placeholder = "Ej: 3000"
                    value={price}
                    onChangeText={setPrice}
                    >
                    </TextInput>

                    <Text style={styles.label}>Clasificación</Text>
                    <TextInput style={styles.input}
                    placeholder = "+18, +16, +7"
                    value={classification}
                    onChangeText={setClassification}
                    >
                    </TextInput>

                    <Text style={styles.label}>Descripcion</Text>
                    <TextInput style={styles.input}
                    placeholder = "Ej: este juego va de un chico"
                    value={description}
                    onChangeText={setDescription}
                    >
                    </TextInput>

                    <TouchableOpacity style={styles.button} onPress={VerifyInformation}>
                        <Text style={styles.buttonText}>Agregar juego</Text>

                    </TouchableOpacity>
                   <TouchableOpacity style={styles.button} onPress={Limpiar}>
                    <Text style={styles.buttonText}>Limpiar Datos</Text>
                    </TouchableOpacity> 
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddGame;
