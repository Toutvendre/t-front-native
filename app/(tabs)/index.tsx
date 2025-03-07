import React from 'react';
import { AppRegistry, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Composant principal de l'application
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenue dans mon App !</Text>
        <Text style={styles.subtitle}>
          Ceci est un exemple de base en React Native
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

// Enregistrement du composant principal
AppRegistry.registerComponent('MyApp', () => App);

export default App;