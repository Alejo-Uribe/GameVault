import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GamingNews } from "../data/GamingNewsData";
import { styles } from "../styles/GamingNewsStyle";
import { SafeAreaView } from "react-native-safe-area-context";

const GamingNewsScreen = () => {
 // useState to store the index of the current news item
  const [currentIndex, setCurrentIndex] = useState(0);
    // useState to display a message indicating the current news item
  const [message, setMessage] = useState("");

  // useEffect to automatically update the news every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
       // If it's the last news item, go back to the first; otherwise, go to the next
      setCurrentIndex(prev =>
        prev === GamingNews.length - 1 ? 0 : prev + 1
      );
    }, 5000);
// Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

   // useEffect to update the indicator message whenever the index changes
  useEffect(() => {
    setMessage(`Noticia ${currentIndex + 1} de ${GamingNews.length}`);
  }, [currentIndex]);

   // Function to manually go to the next news item
  const handleNext = () => {
    setCurrentIndex(prev =>
      prev === GamingNews.length - 1 ? 0 : prev + 1
    );
  };
 // Get the current news item according to the index
  const currentNews = GamingNews[currentIndex];
 // Component return: shows the news, the indicator, and a button to go to the next one
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>{currentNews.title}</Text>
      <Text style={styles.content}>{currentNews.content}</Text>

      <Text style={styles.indicator}>{message}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Siguiente noticia</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default GamingNewsScreen;