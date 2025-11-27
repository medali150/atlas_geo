import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomePage() {
  const navigation = useNavigation();

  const handleEnter = () => {
    navigation.navigate('Main' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/welcome.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Découvrez les pays{'\n'}du monde</Text>
        <TouchableOpacity style={styles.button} onPress={handleEnter}>
          <Text style={styles.buttonText}>Explorer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2332',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#e8dcc8',
    marginTop: 100,
    marginBottom: 60,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 60,
    lineHeight: 42,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
