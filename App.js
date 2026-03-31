import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './src/styles/AppStyles';

//This is the home; here it connects to the main screens using navigation.
const App = ({navigation}) => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style ={styles.container}>
        <Text style = {styles.title}>Bievendio a GameVault🎮🕹️</Text>
        
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("GameList")}
        >
        <Text style={styles.buttonText}>Lista de Videojuegos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("AddGame")}
        >
          <Text style={styles.buttonText}>Agregar Videojuego 🕹️👌</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("GamingNews")}
        >
          <Text style={styles.buttonText}>Noticias del Mundo Gaming 🌎</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App;


